import DefaultLayout from '../../layout/DefaultLayout';
import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { serverGetProducts } from '../../api';
import { formatRupiah } from '../../utility/Format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const renderProduct = (picture: string, name: string, price: number, stock: number, brand: string) => {
    return (
        <>
        <hr className='my-2'/>
        <div className='w-full flex justify-between'>
            <div className='flex'>
                <img className='h-24 rounded-lg' src={picture} alt="" />
                <div className='ml-5 justify-center space-y-2'>
                    <p className='font-bold'>{name}</p>
                    <p>{formatRupiah(price)}</p>
                    <div className='grid grid-cols-2 space-x-3'>
                        <p className={`rounded-lg ${stock === 0? 'bg-red-500' : 'bg-green-500'} text-white px-2 py-1`}>{stock === 0 ? 'Kosong' : 'Tersedia'}</p>
                        <button className='flex space-x-2 items-center px-3 py-1 rounded-lg bg-blue-700 text-white'>
                            <FontAwesomeIcon icon={faPlus} />
                            <p>Tambah Stok</p>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex space-x-3'>
                    <div className='px-3 py-1 rounded-lg bg-black text-white'>
                        {brand}
                    </div>
                    <button className='bg-sky-950 text-white px-3 py-1 rounded-lg'>
                        <FontAwesomeIcon icon={faEdit} className='mr-2' />
                        Ubah
                    </button>

                    <button className='bg-red-700 text-white px-3 py-1 rounded-lg'>
                        <FontAwesomeIcon icon={faTrash} className='mr-2' />
                        Hapus
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filterBy, setFilerBy] = useState(0);
    const navigate = useNavigate();

    const getData = async () => {
        const response = await serverGetProducts();
        if (response.status === true) {
            setProducts(response.data);
        }
        if (products === undefined) {
            setProducts([]);
        }
    }

    const handleTambahProduct = () => {
        navigate('/product/add');
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <DefaultLayout>
            <Breadcrumb pageName='List Produk' />
            <div className='bg-white text-neutral-900 px-10 py-10 rounded-2xl' >
                <h1 className='font-bold text-2xl '>Aksi</h1>
                <div className='flex mt-2'>
                    <button className='flex space-x-2 items-center bg-slate-700 text-sm px-4 py-2 text-white rounded-lg' onClick={(e) => handleTambahProduct()}>
                        <FontAwesomeIcon icon={faPlus} />
                        <p>Tambah Produk</p>
                    </button>
                </div>
                <div className='mt-5 space-y-5'>
                    {
                        products.map((val: any) => (
                            renderProduct(val.product.list_picture[0], val.product.name, val.product.price, val.product.stock, val.brand.title)
                        ))
                    }
                </div>
            </div>
        </DefaultLayout>
    )
}
export default Products;