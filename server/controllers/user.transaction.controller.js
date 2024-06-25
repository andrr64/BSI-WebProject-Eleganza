import { Product } from "../models/product.model.js";
import { CartItems } from "../models/user.cart.items.model.js";
import { Transaction } from "../models/user.transaction.model.js";
import { serverOk } from "./response.controller.js";
import { serverProcess } from "./server.process.controller.js";

export const addTransaction = async (req, res) => {
    await serverProcess(res, async () => {
        const { user_id, items, name, address, contact, courier } = req.body;

        // Menghapus item dari keranjang yang berkaitan dengan user_id
        await CartItems.deleteMany({ user_id: user_id });

        // Mengurangi stok produk
        for (let item of items) {
            console.log(item);
            const product = await Product.findOneAndUpdate(
                { _id: item.id },
                { $inc: { stock: -item.quantity } },
                { new: true }  // Mengembalikan dokumen yang diperbarui
            );

            // Logging untuk memastikan pembaruan
            if (product) {
                console.log(`Stok produk ${item.product_id} berhasil diperbarui. Stok baru: ${product.stock}`);
            } else {
                console.log(`Produk dengan ID ${item.product_id} tidak ditemukan atau gagal diperbarui.`);
            }
        }

        // Membuat data transaksi baru
        const newData = new Transaction({
            user_id,
            items,
            name,
            address,
            contact,
            courier,
            total: items.reduce((sum, item) => sum + item.price * item.quantity, 0), // Menghitung total harga
            status: 0
        });

        // Menyimpan data transaksi
        await newData.save();

        return serverOk(res, 'OK');
    }, 'add transaction');
}
