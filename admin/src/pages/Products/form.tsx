import { useParams } from 'react-router-dom'
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useEffect, useState } from 'react';
import { getBrandsData, getProductById, serverAddProduct, serverAddTransaction } from '../../api';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from '../../firebase';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function FormProduct() {
    const params = useParams();
    const { mode, id } = params;
    const [product, setProduct] = useState({})
    const [brand, setBrand] = useState({})
    const [brands, setBrands] = useState([]);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);


    const [gender, setGender] = useState('Unisex');
    const [deskripsi, setDeskripsi] = useState('');
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState(0);
    const [brand_id, setBrandID] = useState('');
    const [pictures, setPicture] = useState([]);
    const [files, setFiles] = useState([])
    const [categories, setCategories] = useState('');
    const [stok, setStok] = useState(0);
    const [ukuran, setUkuran] = useState('');
    const [listUkuran, setListUkuran] = useState([]);

    const getData = async () => {
        const res_1 = await getBrandsData();
        if (mode === 'update') {
            const res = await getProductById(id);
            if (res.status === true) {
                setProduct(res.data.product);
                setBrand(res.data.brand);
            }
        }
        if (res_1.status === true) {
            setBrands(res_1.data);
        }
    }

    const handleUpdate = async () => {
        if (mode === 'add') {
            const response = await serverAddProduct({
                "name": nama,
                "price": harga,
                "brand_id": '66567bf28ee5ec8d4cff96a8',
                "category": 'Shoes',
                "description": deskripsi,
                "sex": gender,
                "list_picture": pictures,
                "stock": stok
            });
            if (response.status === true) {
                Swal.fire({
                    title: 'Berhasil!',
                    text: 'Data berhasil disimpan',
                    icon: 'success',
                })
            }
        }
    }

    const storageImage = async (file: any) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                },
                (error) => {
                    reject(error.message);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);
                    });
                }
            );
        });
    };

    const handleImageSubmit = async () => {
        if (files.length > 0 && files.length + pictures.length < 7) {
            const promises = [];
            for (const file of files) { // Use `of` for iteration
                promises.push(storageImage(file));
            }
            try {
                const imageUrls: any = await Promise.all(promises); // Wait for all uploads to finish
                setPicture(imageUrls);
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <DefaultLayout>
            <Breadcrumb pageName='Form Produk' />
            <div className='bg-white space-y-5 text-neutral-900 px-10 py-10 rounded-2xl'>
                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <label className="font-bold mb-3 block text-black dark:text-white">
                            Nama
                        </label>
                        <input
                            value={nama}
                            onChange={(e: any) => setNama(e.target.value)}
                            type="text"
                            placeholder="Nama Produk ..."
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="font-bold mb-3 block text-black dark:text-white">
                            Harga
                        </label>
                        <input
                            value={harga}
                            onChange={(e: any) => setHarga(e.target.value)}
                            type="number"
                            placeholder="Rp xxx,xxx,xxx"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <label className="font-bold mb-3 block text-black dark:text-white">
                            Deskripsi
                        </label>
                        <textarea
                            value={deskripsi}
                            onChange={(e: any) => setDeskripsi(e.target.value)}
                            rows={6}
                            placeholder="Deskripsi Produk ..."
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        ></textarea>
                    </div>
                    <div className='grid grid-rows-2'>
                        <div>
                            <label className="font-bold mb-3 block text-black dark:text-white">
                                Brand
                            </label>
                            <select
                                className={`w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${isOptionSelected ? 'text-black dark:text-white' : ''
                                    }`}
                                onChange={(e) => setBrandID(e.target.value)}
                            >
                                {
                                    brands.map((val: any, index) => {
                                        return (
                                            <option key={index} value={val._id} className="text-body dark:text-bodydark">
                                                {val.title}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label className="font-bold mb-3 block text-black dark:text-white">
                                Gender
                            </label>
                            <select
                                className={`w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${isOptionSelected ? 'text-black dark:text-white' : ''
                                    }`}
                            >
                                <option onClick={(e: any) => setGender(e.target.value)} className="text-body dark:text-bodydark" value={`Unisex`}>
                                    {`Unisex`}
                                </option>
                                <option onClick={(e: any) => setGender(e.target.value)} className="text-body dark:text-bodydark" value={`Pria`}>
                                    {`Pria`}
                                </option>
                                <option onClick={(e: any) => setGender(e.target.value)} className="text-body dark:text-bodydark" value={`Wanita`}>
                                    {`Wanita`}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <label className="font-bold mb-3 block text-black dark:text-white">
                            Stok
                        </label>
                        <input
                            value={stok}
                            onChange={(e: any) => setStok(e.target.value)}
                            type="text"
                            placeholder="Stok Produk ..."
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="font-bold mb-3 block text-black dark:text-white">
                            Ukuran
                        </label>
                        <input
                            onChange={(e: any) => setUkuran(e.target.value)}
                            type="text"
                            placeholder="Ukuran"
                            className="w-1/2 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                        <button
                            className="bg-green-700 text-white ml-3 px-2 py-1 rounded-lg"
                            onClick={(e) => {
                                e.preventDefault();
                                setListUkuran([...listUkuran, ukuran]);
                                setUkuran('');
                            }}
                        >
                            Tambah
                        </button>
                        <div className='flex gap-2 mt-5 items-center'>
                            {
                                listUkuran.map((val: any, index: number) => (
                                    <div key={index} className='flex gap-2 items-center bg-black px-2 py-1 text-white rounded-lg'>
                                        {val}
                                        <FontAwesomeIcon icon={faClose} onClick={(e) => {
                                            setListUkuran(listUkuran.filter(item => item !== val));
                                        }} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <div className=''>
                            <label className="font-bold mb-3 block text-black dark:text-white">
                                Gambar Produk
                            </label>
                            <div className='flex gap-2'>
                                <input
                                    type="file"
                                    onChange={(e: any) => setFiles(e.target.files)}
                                    id="images"
                                    accept="image/*"
                                    multiple
                                />
                                <button onClick={(e) => handleImageSubmit()} className='bg-green-700 text-white px-2 py-1'>
                                    Submit Image
                                </button>
                            </div>

                        </div>
                        <div className='mt-5 flex gap-5'>
                            {
                                pictures.map((val, index) => {
                                    return (
                                        <img src={val} key={index} className='h-24 rounded-sm' alt="" />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="font-bold mb-3 block text-black dark:text-white">
                                Kategory
                            </label>
                            <select
                                className={`w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${isOptionSelected ? 'text-black dark:text-white' : ''
                                    }`}
                            >
                                <option onClick={(e: any) => setCategories(e.target.value)} className="text-body dark:text-bodydark" value={`Shoes`}>
                                    {`Shoes`}
                                </option>
                                <option onClick={(e: any) => setCategories(e.target.value)} className="text-body dark:text-bodydark" value={`Sandal`}>
                                    {`Sandal`}
                                </option>
                                <option onClick={(e: any) => setCategories(e.target.value)} className="text-body dark:text-bodydark" value={`Bag`}>
                                    {`Bag`}
                                </option>
                                <option onClick={(e: any) => setCategories(e.target.value)} className="text-body dark:text-bodydark" value={`Perfume`}>
                                    {`Bag`}
                                </option>
                                <option onClick={(e: any) => setCategories(e.target.value)} className="text-body dark:text-bodydark" value={`Accessories`}>
                                    {`Bag`}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <button onClick={(e) => handleUpdate()} className='bg-green-700 text-white px-4 py-1 rounded-lg'>Simpan</button>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default FormProduct;