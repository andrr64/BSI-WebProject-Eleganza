import { Link } from "react-router-dom"
import { goToProductDetail } from "../../AppRoute"
import { formatRupiah } from "../../utility/Format"
import { IconCartPlus } from "../Icons";

/* eslint-disable react/prop-types */

// Fungsi untuk menampilkan gambar produk
function ProductImage({ product, src, alt }) {
    return (
        <Link to={goToProductDetail(product._id)}>
            <img className="h-10/12 w-full object-cover" src={src} alt={alt} />
        </Link>
    );
}

// Fungsi untuk menampilkan informasi produk
function ProductInfo({ category, name, price, id }) {
    return (
        <div className="text-center py-5">
            <Link className="underline">
                <p className="text-center text-sm font-inter-light mb-2 uppercase">{category}</p>  
            </Link>
            <Link to={goToProductDetail(id)}>
                <p className="font-inter font-bold text-sm">{name}</p>
            </Link>
            <p className="font-inter uppercase text-base">{formatRupiah(price)}</p>
        </div>
    );
}

const renderButton = (text, icon, callback) => {
    return (
        <button onClick={() => callback()} className="hover:bg-black bg-gray-50 hover:text-white transition ease-in-out duration-300 border text-slate-700 flex rounded-lg items-center justify-center px-5 py-2 gap-2">
            {icon}
            {text}
        </button>
    )
}

// Fungsi untuk tombol "Add to Cart"
function Actions() {
    return (
        <div className="w-full gap-2 flex justify-center ">
            {renderButton('Tambah', <IconCartPlus size="18"/>, ()=>{})}
        </div>
    );
}

// Fungsi utama untuk kartu produk
function ProductCard({ data }) {
    return (
        <div className="hover:bg-zinc-100 grid-cols cols-1 hover:scale-105 transition duration-300 ease-in-out border border-slate-200 w-full rounded-lg overflow-hidden">
            <ProductImage product={data} src={data.list_picture[0]} alt={`Picture of ${data.name}`} />
            <div className="mb-5">
                <ProductInfo category={data.category} name={data.name} price={data.price} id={data._id} />
                <Actions />
            </div>
        </div>
    );
}

export default ProductCard;