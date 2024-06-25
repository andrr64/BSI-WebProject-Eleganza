import React, { useState } from 'react';
import Page from '../RenderPage';
import { getUserRedux } from '../../App';
import { useNavigate } from 'react-router-dom';

const AccountSetting = () => {
    const [loading, setLoading] = useState(false);
    const [serverStatus, setServerStatus] = useState(true);

    const { currentUser } = getUserRedux();
    const [email, setEmail] = useState(currentUser.email);
    const navigate = useNavigate();

    const handleChangeEmail = () => {

    }

    const handleChangePassword = () => {

    }

    const renderContent = () => {
        return (
            <div className="mt-20 mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
                <button className='btn mt-5' onClick={(e) => navigate(-1)}>
                    Kembali
                </button>
                <h1 className="border-b mt-3 text-4xl font-semibold">Pengaturan</h1>
                <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">

                    <div className="col-span-2 hidden sm:block">
                        <div className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">Akun</div>
                    </div>

                    <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
                        <div className="pt-4">
                            <h1 className="py-2 text-2xl font-semibold">Pengaturan Akun</h1>
                        </div>
                        <p className="py-2 text-xl font-semibold">Email Address</p>
                        <div className='mt-2 gap-5 flex items-center'>
                            <div className="relative w-96 flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    id="new-email"
                                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                />
                            </div>
                            {email !== currentUser.email && (
                                <>
                                    <button className='btn bg-blue-600 hover:bg-blue-500 text-white' onClick={() => handleChangeEmail()}>
                                        Simpan  
                                    </button>
                                    <button className='btn bg-red-600 hover:bg-red-700 text-white' onClick={() => setEmail(currentUser.email)}>
                                        Undo
                                    </button>
                                </>
                            )}
                        </div>

                        <hr className="my-4" />
                        <p className="py-2 text-xl font-semibold">Password</p>
                        <div className="flex items-center">
                            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                                <label htmlFor="current-password">
                                    <span className="text-sm text-gray-500">Current Password</span>
                                    <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                        <input
                                            type="password"
                                            id="current-password"
                                            className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                            placeholder="***********"
                                        />
                                    </div>
                                </label>
                                <label htmlFor="new-password">
                                    <span className="text-sm text-gray-500">New Password</span>
                                    <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                        <input
                                            type="password"
                                            id="new-password"
                                            className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                            placeholder="***********"
                                        />
                                    </div>
                                </label>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mt-5 ml-2 h-6 w-6 cursor-pointer text-sm font-semibold text-gray-600 underline decoration-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                        </div>
                        <button className='btn mt-5 bg-blue-600 hover:bg-blue-500 text-white' onClick={() => handleChangePassword()}>
                            Simpan Password
                        </button>

                        <hr className="mt-4 mb-8" />
                        <div className="mb-10">
                            <p className="py-2 text-xl font-semibold">Hapus Akun</p>
                            <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Lakukan dengan hati-hati
                            </p>
                            <p className="mt-2">Pastikan Anda telah mencadangkan akun Anda jika Anda perlu mengakses data Anda di masa mendatang. Kami akan menghapus data Anda sepenuhnya. Tidak ada cara untuk mengakses akun Anda setelah tindakan ini.</p>
                            <button className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2">Continue with deletion</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return Page(loading, serverStatus, renderContent, true, false);
};

export default AccountSetting;