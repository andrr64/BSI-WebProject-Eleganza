import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { scrollToZero } from "../../utility/ScrollToZero";
import { addItemToCart, getProductById, isServerOnline } from "../../api/API";
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
import { useSelector } from "react-redux";
import { CartItem } from "../../models/user.cart.item.model";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { delay } from "../../utility/Delay";
import { ALERT, showAlert } from "../../components/Alert";

function ProductPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState(true);
  const [product, setProduct] = useState();
  const [cartItem, setCartItem] = useState(new CartItem('', params.id, 1, '', 0));
  const [pictureIndex, setPictureIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);
  const {currentUser} = useSelector((state) => state.user);
  const [toast, setToast] = useState(false);
  const [onProcess, setOnProcess] = useState(false);
  const [error, setError] = useState(null);

  const [stok, setStok] = useState(0);

  const UI_backButton = () => (
    <button className='btn flex gap-2' onClick={() => navigate(-1)}>
        <FaArrowLeft/>
        <span>Kembali</span>
    </button>
  )

  const handleMasukkanKeranjang = async () => {
    if (!currentUser){
      return showAlert(ALERT.WARNING, 'Login terlebih dahulu.');
    }
    if (!onProcess){
      setOnProcess(true);
      cartItem.user_id = currentUser._id;
      const response = await addItemToCart(currentUser._id, cartItem.json);
      if (response.status === true){
        if (!toast){
          setToast(true);
          await delay(3500);
          setToast(false);
        }
      } else {
        if (toast) setToast(false);
        setError(response.data);
        setToast(true);
        await delay(3500);
        setToast(false);
        setError(null);
      }
      setOnProcess(false);
    }
  }

  const handleBeliSekarang = async() => {
    if (!currentUser){
      return showAlert(ALERT.WARNING, 'Login terlebih dahulu.');
    }
  }

  const handleSizeIndexChange = (value) => {
    setSizeIndex(value);
    cartItem.size_index = value;
  }

  const showToast = () => {
    return (toast && (
      <div className="toast toast-bottom toast-center z-[101]">
        <div className={`${!error? 'alert-success' : 'alert-error'} alert flex items-center text-white`}>
          <FaCheckCircle size={'24px'}/>
          {!error && 'Produk berhasil dimasukkan ke keranjang'}
          {error && (error)}
        </div>
      </div>
    ))
  }

  const renderContent = () => {
    return (
      <div className="py-10 h-screen font-inter text-gray-800">
        {showToast()}
        <div className="my-8 container mx-auto p-8 lg:w-10/12">
          <UI_backButton/>
          <div className="lg:grid lg:grid-cols-2 lg:items-start my-5">
            <ProductImages images={product.data.list_picture} imageIndex={pictureIndex} callback={setPictureIndex} />
            <div>
              <ProductDescription product={product}/>
              <ProductGender product={product} />
              <ProductSizeSelector currentIndex={sizeIndex} product={product} callback={handleSizeIndexChange} />
              <ProductActions stock={stok} cart_item={cartItem} product={product} callbackMasukkanKeranjang={handleMasukkanKeranjang} callbackBeliSekarang={handleBeliSekarang}/>
            </div>
          </div>
          <Reviews/>
        </div>
      </div>
    )
  }

  const getData = async() => {
    try {
      setLoading(true);
      if (!(await isServerOnline())) return setServerStatus(false);
      const res = await getProductById(params.id);
      setProduct(new Product(res.data.product, res.data.brand));
      setStok(res.data.product.stock);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    scrollToZero();
    getData();
  }, [params.id]);
  return Page(loading, serverStatus, renderContent, true, false)
}

export default ProductPage