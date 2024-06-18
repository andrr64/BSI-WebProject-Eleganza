import { Product } from "../models/product.model.js"
import { UserAccount } from "../models/user.account.model.js"
import { CartItems } from "../models/user.cart.items.model.js"
import { serverForbidden, serverInternalError, serverNotAcceptable, serverNotFound, serverOk } from "./response.controller.js"
import { serverProcess } from "./server.process.controller.js"
import { validateClientToken } from "./user.account.controller.js"

export const addItem = async (req, res) => {
    await serverProcess(res, async () => {
        console.log("Request body:", req.body);
        const { product_id, quantity, note, size_index } = req.body;
        const user_id = req.params.id;
        const token = req.cookies.access_token;

        if (!validateClientToken(token)) {
            console.log("Invalid token");
            return serverForbidden(res);
        }

        const validUser = await UserAccount.findById(user_id);
        if (!validUser) {
            console.log("User not found");
            return serverNotFound(res);
        }

        const product = await Product.findById(product_id);
        if (!product) return serverNotFound(res, 'product not found');

        if (quantity > product.stock) return serverNotAcceptable(res, 'quantity > stock');

        const existingCartItem = await CartItems.findOne({ user_id });
        if (!existingCartItem) {
            const newItem = new CartItems({
                user_id,
                product_id,
                quantity,
                note,
                size_index,
                index: 0
            });
            await newItem.save();
            console.log("New item saved:", newItem);
        } else {
            const itemAlreadyExist = await CartItems.findOne({ product_id, user_id });
            if (itemAlreadyExist) {
                const totalQty = itemAlreadyExist.quantity + Number(quantity);
                if (totalQty > product.stock) return serverNotAcceptable(res, `Maksimal pembelian adalah ${product.stock}. Cek keranjang kamu`);
                itemAlreadyExist.quantity = itemAlreadyExist.quantity + Number(quantity);
                await itemAlreadyExist.save();
            } else {
                const itemLength = (await CartItems.find({ user_id })).length;
                const newItem = new CartItems({
                    user_id,
                    product_id,
                    quantity,
                    note,
                    size_index,
                    index: itemLength
                });
                await newItem.save();
            }
        }
        serverOk(res);
    }, 'add item to cart');
};

export const getCartItemsLength = async (req, res) => {
    await serverProcess(res, async() => {
        const user_id = req.params.id;
        const cartData = await CartItems.find({user_id});
        console.log(user_id); 
        if (!cartData) return serverNotFound(res);
        serverOk(res, cartData.length);
    });
}