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

        product.stock -= quantity;

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
                itemAlreadyExist.quantity += quantity;
                await itemAlreadyExist.save();
                console.log("Existing item updated:", itemAlreadyExist);
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
                console.log("New item added to existing cart:", newItem);
            }
        }
        await product.save();
        serverOk(res);
    }, 'add item to cart');
};