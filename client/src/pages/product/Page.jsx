import { useEffect, useState } from "react";
import { useAsyncError, useNavigate, useParams } from "react-router-dom"
import { scrollToZero } from "../../utility/ScrollToZero";
import { getProductById, isServerOnline } from "../../api/API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Page from "../RenderPage";
import React from 'react';
import ProductImages from "../../components/product/Images";
import ProductDescription from "../../components/product/Description";
import ProductGender from "../../components/product/Gender";
import ProductSizeSelector from "../../components/product/SizeSelector";
import ProductActions from "../../components/product/Actions";
import Reviews from "../../components/product/Reviews";
import Product from "../../models/product.model";
import { TransactionItem } from "../../models/transaction.item.model";
import { setIndexConfiguration } from "firebase/firestore";

function ProductPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState(true);
  const [product, setProduct] = useState();
  const [transactionItem, setTransactionItem] = useState( new TransactionItem('0', '0', 1, 0));
  const [pictureIndex, setPictureIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);

  const UI_backButton = () => (
    <button 
      onClick={() => navigate(-1)} 
      className="transition ease-in-out duration-300 flex hover:-translate-x-2 items-center font-medium text-l"
    >
      <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
      <p>Kembali</p>
    </button>
  )

  const handleMasukkanKeranjang = () => {

  }

  const handleSizeIndexChange = (value) => {
    setSizeIndex(value);
    transactionItem.setSizeIndex(value)
  }

  const handleNoteChange = (value) => {
    transactionItem.setNote(value);
  }

  const renderContent = () => {
    return (
      <div className="py-10 h-screen font-inter text-gray-800">
        <div className="my-8 container mx-auto p-8 lg:w-10/12">
          <UI_backButton/>
          <div className="lg:grid lg:grid-cols-2 lg:items-start my-5">
            <ProductImages images={product.data.list_picture} imageIndex={pictureIndex} callback={setPictureIndex} />
            <div>
              <ProductDescription product={product}/>
              <ProductGender product={product} />
              <ProductSizeSelector currentIndex={sizeIndex} product={product} callback={handleSizeIndexChange} />
              <ProductActions transactionItem={transactionItem} product={product} callbackMasukkanKeranjang={() => {}}/>
            </div>
          </div>
          <Reviews/>
        </div>
      </div>
    )
  }
  
  useEffect(() => {
    const getContent = async() => {
      try {
        setLoading(true);
        if (!(await isServerOnline())) return setServerStatus(false);
        const res = await getProductById(params.id);
        setProduct(new Product(res.data.product, res.data.brand));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    scrollToZero();
    getContent();
  }, [params.id]);

  return Page(loading, serverStatus, renderContent, true, false)
}

export default ProductPage