import { ProductImage } from "../models/productImage.model.js";

/**
 * Fungsi untuk mengunggah dan menyimpan gambar ke database.
 * @param {Array} images - Array objek file yang akan diunggah.
 * @param {string} productId - ID produk yang akan dihubungkan dengan gambar-gambar yang diunggah.
 * @returns {boolean} - Status apakah berhasil menyimpan data atau tidak.
 */
export const uploadImages = async (images, productId) => {
    try {
        // Memastikan bahwa images adalah array
        if (!Array.isArray(images)) {
            throw new Error("Images must be an array");
        }

        // Memetakan array file menjadi array promises untuk disimpan ke database
        const imagePromises = images.map((image, index) => {
            return new ProductImage({
                file: image.buffer, // Menyimpan data biner dari file
                index: index,
                product_ref: productId // Referensi ke produk terkait
            }).save();
        });

        // Menjalankan semua promises secara paralel
        await Promise.all(imagePromises);

        return true;
    } catch (error) {
        return false;
    }
};
