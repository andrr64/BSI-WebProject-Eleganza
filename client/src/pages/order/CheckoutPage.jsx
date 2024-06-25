import React, { useEffect, useState } from 'react';
import NavigationBar from '../../components/navbar/NavigationBar';
import { formatRupiah } from '../../utility/Format';
import { useNavigate } from 'react-router-dom';
import { getUserRedux } from '../../App';
import { serverGetUserCartItems } from '../../api/API';
import { IoChevronBack } from 'react-icons/io5';
import { ROUTE } from '../../AppRoute';

const CheckoutPage = () => {
    const [cartItems, setCartData] = useState([]);
    const { currentUser } = getUserRedux();
    const [loading, setLoading] = useState(true);
    const [serverStatus, setServerStatus] = useState(true);
    const [kontak, setKontak] = useState('')
    const [alamat, setAlamat] = useState('')
    const [nama, setNama] = useState('')
    const navigate = useNavigate();

    const getData = async () => {
      try {
        setLoading(true);
        setServerStatus(true);
        const response = await serverGetUserCartItems(currentUser._id);
        if (response.status) {
          setCartData(response.data);
        } else {
          if (cartItems.length === 0) {
            return navigate(ROUTE.cart);
          }
          setServerStatus(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    useEffect(() => {
      getData().then(() => {
      });
    }, [])
    
    const handleSubmit = () => {
        const response = true;
        if (true){
            navigate(ROUTE.checkout_success);
        }
    }

    const renderProduct = (index, product_name, img, size, price, qty) => {
        return (
            <>
                <div key={index} className="flex flex-col rounded-lg bg-white sm:flex-row">
                    <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={img} alt="" />
                    <div className="flex w-full flex-col px-4 py-4">
                        <span>{`${qty}x ${product_name}`}</span>
                        <span className="float-right text-gray-400">{size}</span>
                        <p className="text-1xl font-bold">{formatRupiah(price * qty)}</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <NavigationBar />
            <div className="grid my-20 py-5 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4">
                    <button className='btn mb-4 flex gap-1 items-center' onClick={() => navigate(-1)}>
                        <IoChevronBack/>
                        Kembali
                    </button>
                    <p className="text-xl font-medium">Ringkasan Order</p>
                    <p className="text-gray-400">Periksa lagi produk yang anda beli</p>
                    <div className="font-inter mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {
                            cartItems.map((val, index) => (
                                renderProduct(index, val.name, val.picture, val.size, val.price, val.quantity)
                            ))
                        }
                    </div>

                    <p className="mt-8 text-lg font-medium">Kurir Pengiriman</p>
                    <form className="mt-5 grid gap-6">
                        <div className="relative">
                            <input className="peer hidden" id="radio_1" type="radio" name="radio" defaultChecked />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
                                <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">SiCepat Delivery (COD)</span>
                                    <p className="text-slate-500 text-sm leading-6">Estimasi: 2-10 Hari</p>
                                </div>
                            </label>
                        </div>

                        <div className="relative">
                            <input className="peer hidden" id="radio_2" type="radio" name="radio" />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
                                <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">JNE Delivery (COD)</span>
                                    <p className="text-slate-500 text-sm leading-6">Estimasi: 2-10 Days</p>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>

                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Detail Alamat Penerima</p>
                    <p className="text-gray-400">Selesaikan pemesanan anda</p>
                    <div>
                        <label htmlFor="nama-penerima" className="mt-4 mb-2 block text-sm font-medium">Nama Penerima</label>
                        <div className="relative">
                            <input value={nama} onChange={(e) => setNama(e.target.value)} type="text" id="nama-penerima" name="nama-penerima" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Nama lengkap" />
                        </div>

                        <label htmlFor="Alamat" className="mt-4 mb-2 block text-sm font-medium">Alamat</label>
                        <div className="relative">
                            <textarea value={alamat} onChange={(e) => setAlamat(e.target.value)} type="address" id="address" name="address" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Alamat rumah anda" />
                        </div>
                        
                        <label htmlFor="kontak" className="mt-4 mb-2 block text-sm font-medium">Kontak</label>
                        <div className="relative">
                            <input value={kontak} onChange={(e) => setKontak(e.target.value)} type="text" id="kontak" name="kontak" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="08xxxxxxxxxxxx" />
                        </div>
                        <div className='my-10 space-y-2'>
                            <div className='text-gray-500'>
                                * Metode pembayaran COD sehingga anda hanya perlu menunggu dan bayar tagihan ke kurir pengantar
                            </div>
                            <div className='text-gray-500'>
                                * Biaya ongkos kirim gratis
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Total</p>
                            <p className="text-2xl font-semibold text-gray-900">
                                {formatRupiah(cartItems.reduce((sum, item) => sum + item.price, 0))}
                            </p>
                        </div>
                    </div>
                    <button onClick={() => handleSubmit()} className="mt-4 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Konfirmasi Pesanan</button>
                </div>
            </div>
        </>
    );
}

export default CheckoutPage;
