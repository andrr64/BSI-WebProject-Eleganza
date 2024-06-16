import React, { useState } from 'react'
import { IconCartPlus, IconCatatan } from '../Icons'

export default function ProductActions() {

  const [stok, setStok] = useState(1);
  const [note, setNote] = useState('')

  const handleStokChange = (event, availableStock) => {
    const value = event.target.value;
    if (!isNaN(value) && value <= availableStock) {
      setStok(Number(value));
    }
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  }

  const renderFieldStok = (stokTersedia) => {
    return (
      <>
        <div className='grid grid-cols-2 divide-x'>
          <div className='flex items-center gap-4'>
            <input type="text"  value={stok} placeholder="Stok" className={`font-bold input input-bordered input-md w-16 ${stok <= 0 && 'input-error'}`} onChange={(e) => handleStokChange(e, stokTersedia)} />
            <p>Stok Tersedia: {stokTersedia}</p>
          </div>
          <div className='px-5 space-y-2'>
              <label htmlFor="" className='flex items-center gap-2'>
                <IconCatatan/>
                Catatan
              </label>
              <textarea onChange={handleNoteChange} value={note} className="font-bold textarea h-24 textarea-bordered w-full" placeholder="Ketik disini"></textarea>
          </div>
        </div>
        <p className='h-4 text-red text-sm text-red-400'>
          {stok <= 0 && 'Min. pembelian produk adalah 1 barang'}
        </p>  
      </>
    )
  }

  return (
    <div className="p-5 grid grid-cols-1 border gap-3 mt-8">
      <h2 className='font-bold'>Atur jumlah dan catatan</h2>
      {renderFieldStok(20)}
      <div className='grid grid-cols-2 gap-5'>
        <button className="w-full p-3 border border-gray-200 bg-gray-50 rounded-md text-gray-800 flex items-center justify-center gap-4 transition ease-in-out duration-300  hover:bg-gray-200">
          <IconCartPlus />
          Masukkan Keranjang
        </button>
        <button className="w-full p-3 bg-blue-600 border border-blue-600 rounded-md text-white">Beli Sekarang</button>
      </div>
    </div>
  )
}
