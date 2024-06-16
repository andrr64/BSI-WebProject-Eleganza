import React, { useState } from 'react'
import { IconCartPlus, IconCatatan } from '../Icons'

export default function ProductActions({
  transactionItem, 
  product, 
  callbackMasukkanKeranjang
}) {

  const [qty, setQty] = useState(1);
  const [note, setNote] = useState();

  const handleStokChange = (event, availableStock) => {
    const value = event.target.value;
    if (!isNaN(value) && value <= availableStock) {
      setQty(value);
      transactionItem.setQuantity(value);
    }
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
    transactionItem.setNote(e.target.value);
  }

  const renderFieldStok = (stokTersedia) => {
    return (
      <>
        <div className='grid grid-cols-2 divide-x'>
          <div className='flex items-center gap-4'>
            <input type="number"  value={qty} placeholder="Qty" className={`font-bold input input-bordered input-md w-16 ${qty <= 0 && 'input-error'}`} onChange={(e) => handleStokChange(e, stokTersedia)} />
            <p>Stok Tersedia: {stokTersedia}</p>
          </div>
          <div className='px-5 space-y-2'>
              <div htmlFor="" className='flex items-center gap-2'>
                <IconCatatan/>
                Catatan
              </div>
              <textarea onChange={handleNoteChange} value={note} className="font-bold textarea h-24 textarea-bordered w-full" placeholder="Ketik disini"></textarea>
          </div>
        </div>
        <p className='h-4 text-red text-sm text-red-400'>
          {qty <= 0 && 'Min. pembelian produk adalah 1 barang'}
        </p>  
      </>
    )
  }

  const handleMasukkanKeranjang = async() => {
    callbackMasukkanKeranjang()
  }

  const renderActionButton = () => {
    return (
      <div className='grid grid-cols-2 gap-5'>
        <button onClick={() => handleMasukkanKeranjang()} className="w-full p-3 border border-gray-200 bg-gray-50 rounded-md text-gray-800 flex items-center justify-center gap-4 transition ease-in-out duration-300  hover:bg-gray-200">
          <IconCartPlus />
          Masukkan Keranjang
        </button>
        <button className="w-full p-3 bg-blue-600 border border-blue-600 rounded-md text-white">Beli Sekarang</button>
      </div>
    )
  }

  return (
    <div className="p-5 grid grid-cols-1 border gap-3 mt-8">
      <h2 className='font-bold'>Atur jumlah dan catatan</h2>
      {renderFieldStok(product.stock)}
      {renderActionButton()}
    </div>
  )
}
