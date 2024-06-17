import React, { useState } from 'react';
import { IconCartPlus, IconCatatan } from '../Icons';

export default function ProductActions({ stock, cart_item, product, callbackMasukkanKeranjang }) {
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState('');

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value <= product.stock) {
      setQty(value);
      cart_item.quantity = value;
    }
  };

  const handleNoteChange = (e) => {
    const value = e.target.value;
    setNote(value);
    cart_item.note = value;
  };

  const handleMasukkanKeranjang = () => {
    callbackMasukkanKeranjang();
  };

  const isDisabled = stock === 0;

  return (
    <div className="p-5 grid grid-cols-1 border gap-3 mt-8">
      <h2 className="font-bold">Atur jumlah dan catatan</h2>
      <div className="grid grid-cols-2 divide-x">
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={qty}
            placeholder="Qty"
            className={`font-bold input input-bordered input-md w-16 ${qty <= 0 ? 'input-error' : ''}`}
            onChange={handleQuantityChange}
            disabled={isDisabled}
          />
          <p>Stok Tersedia: {stock}</p>
        </div>
        <div className="px-5 space-y-2">
          <div className="flex items-center gap-2">
            <IconCatatan />
            Catatan
          </div>
          <textarea
            onChange={handleNoteChange}
            value={note}
            className="font-bold textarea h-24 textarea-bordered w-full"
            placeholder="Ketik disini"
            disabled={isDisabled}
          ></textarea>
        </div>
      </div>
      <p className="h-4 text-red-400 text-sm">{qty <= 0 && 'Min. pembelian produk adalah 1 barang'}</p>
      <div className="grid grid-cols-2 gap-5">
        <button
          onClick={handleMasukkanKeranjang}
          className={`w-full p-3 ${isDisabled? 'no-cursor bg-gray-200 cursor-not-allowed' : 'hover:bg-gray-200 border border-gray-200 bg-gray-50'} rounded-md text-gray-800 flex items-center justify-center gap-4 transition ease-in-out duration-300 `}
          disabled={isDisabled}
        >
          <IconCartPlus />
          Masukkan Keranjang
        </button>
        <button
          className={`${isDisabled? 'bg-red-200 cursor-not-allowed' : 'bg-blue-600 border border-blue-600'} w-full p-3 rounded-md text-white`}
          disabled={isDisabled}
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  );
}
