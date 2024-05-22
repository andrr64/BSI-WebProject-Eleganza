/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import {CollectionCard} from "../components/CollectionCard";
import { useEffect, useState } from "react";

function _Title(judul){
  return (
    <div className="flex justify-center items-center mb-5">
      <h1 className="uppercase text-lg md:text-2xl font-inter-light ">
      {judul}
      </h1>
    </div>
  )
}

function Homepage() {

  const [collectionByCategory, setCollectionByCategory] = useState([]);
  const [collectionByGender, setCollectionByGender] = useState([]);
  const [collectionByBrands, setCollectionByBrands] = useState([]);

  const getCollectionByCategory = async () => {
    return [
      {
        title: 'SEPATU', 
        link: 'http://adidas.com', 
        imageUrl: 'https://i.pinimg.com/originals/08/89/9f/08899fbe510797b1151df941b01530e2.jpg', 
        font: "font-inter-light text-slate-100",
        fontSize: "text-lg md:text-2xl",
        height: "80vh",
      },
      {
        title: 'TAS', 
        link: 'http://adidas.com', 
        imageUrl: 'https://i.pinimg.com/736x/43/98/34/4398343f91fc640bfa0e1629946989c4.jpg', 
        font: "font-inter-light text-slate-100",
        fontSize: "text-lg md:text-2xl",
        height: "80vh",
      },
      {
        title: 'PARFUM',
        link: 'https://adidas.com',
        imageUrl: 'https://i.pinimg.com/564x/a9/47/80/a94780ff09fde80a673a770318371db3.jpg',
        font: "font-inter-light text-slate-100",
        fontSize: "text-lg md:text-2xl",
        height: "80vh",
      },
      {
        title: 'AKSESORIS',
        link: 'https://adidas.com',
        imageUrl: 'https://asset.swarovski.com/images/c_crop,g_xy_center,w_4386,h_5490,x_11703,y_5754/dpr_auto,f_auto,q_auto,c_lfill,w_759,h_950/swa-cms/2023_HOLIDAY_VISUAL_MODEL-12_EXT_OF_GL_72DPI_RGB/.jpg',
        font: "font-inter-light text-slate-100",
        fontSize: "text-lg md:text-2xl",
        height: "80vh",
      }
    ];
  };
  const getCollectionByGender = async() => {
    return [
      {
        title: "PRIA",
        height: "85vh",
        link: "man", 
        imageUrl: "https://www.thefashionisto.com/wp-content/uploads/ama/2010/12/daisuke-traditionalist17.jpg",
        font: "font-josefin font-bold",
        scaleTransition: false,
      },
      {
        title: "Wanita",
        height: "85vh",
        link: "woman",
        imageUrl: "https://plus.unsplash.com/premium_photo-1682095643806-79da986ccf8d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        font: "font-laBelle",
        fontSize: "text-2xl md:text-4xl",
        uppercase: false,
        scaleTransition: false,
      }
    ]
  }
  const getCollectionByBrands = async() => {
    return [
      {
        imageUrl: "https://pbs.twimg.com/media/Cuc8pEBUMAAl9lH?format=jpg&name=4096x4096",
        height: "60vh",
        titleWithImage: "https://careom-b2b.eigerindo.co.id/_nuxt/img/b2b-logo.3714496.png",
        titleWithImageHeight: "20vh"
      },
      {
        imageUrl: "https://www.adidas.co.id/media/scandiweb/slider/n/a/nav-men-d_tcm207-819364_2.jpg",
        height: "60vh",
        titleWithImage: "https://firebasestorage.googleapis.com/v0/b/andreas-web-cloud-5c228.appspot.com/o/brand-logo-adidas.png?alt=media&token=ca9f2849-837d-4df4-adba-6536f7fba03d",
        titleWithImageHeight: "20vh"
      },
      {
        imageUrl: "https://media.gucci.com/dynamic/b3c8/A2CwL3kwWV9_QAEeDJaA+TDlkQxFdofwWAe797J1AZ0xc_V509QTfWIeFMdzA2bzyil+mou_nknpBwm9iwswa8i9BlH6ntsirvrJ63DmZqaNx7JeTMZqKghuLb1sKbnaJQghOYvyQrtc6mrOBw1mSamhEMKbTcQ_S6L7p+yNoJfPAely71_BYpJP9tN2tzEC8mNU2hWmIBveyK7aPXNUetGDFaUHVmxbcBLmZr6AtENa5EBnCkAi6iTprzIzgtiWmpDRXzsGGrUuyV9GUlHkPR7hxM04a8H_YyOmOThooY_3bvueGMrETtawzKhBSKy9IPhLtdvYENtycwWQXTsRcv7lcXE907JDTwcGpOtQA4Pg7rrUlS7DrweDI9aUejTd1kV2xDIhOr+zNdwtmdDKiw==/HP_Hero-FullBleed-Desktop_Gucci-PF24-TIERII-May24-240424-ON_MODEL-DAY2-1293_001_Default.png",
        height: "60vh",
        titleWithImage: "https://firebasestorage.googleapis.com/v0/b/andreas-web-cloud-5c228.appspot.com/o/brand-logo-gucci.png?alt=media&token=7ac9f185-e560-4045-b82d-cfe87510ba4d",
        titleWithImageHeight: "20vh"
      }
    ];
  }

  useEffect(() => {
    const fetchData = async () => {
      setCollectionByCategory(await getCollectionByCategory());
      setCollectionByGender(await(getCollectionByGender()))
      setCollectionByBrands(await getCollectionByBrands())
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="content px-10">
        <div id="" className="h-screen px-5 my-20">
          <p className="text-center">
            Mama
          </p>
        </div>
        
        <div id="by-brand" className="justify-center my-12">
          {_Title('merek unggulan')}
          <div className="grid grid-cols-1 md:grid-cols-3 px-5 gap-2 w-full h-1/2 mb-5">
            {
              collectionByBrands.map((item, index) => {
                return (
                  <CollectionCard
                    key={index}
                    title={item.title}
                    link={item.link}
                    imageUrl={item.imageUrl}
                    font={item.font}
                    fontSize={item.fontSize}
                    height={item.height}
                    uppercase={item.uppercase}
                    scaleTransition = {item.scaleTransition}
                    opacityTransition = {item.opacityTransition}
                    titleWithImage= {item.titleWithImage}
                    titleWithImageHeight={item.titleWithImageHeight}
                    titleWithImageWidth={item.titleWithImageWidth}
                  />
                )
              })
            }
          </div>
        </div>

        <div id="by-gender" className="justify-center my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-2 w-full h-1/2 mb-5">
            {
              collectionByGender.map((item, index) => {
                return (
                  <CollectionCard
                    key={index}
                    title={item.title}
                    link={item.link}
                    imageUrl={item.imageUrl}
                    font={item.font}
                    fontSize={item.fontSize}
                    height={item.height}
                    scaleTransition = {item.scaleTransition}
                    opacityTransition = {item.opacityTransition}
                    uppercase= {item.uppercase}
                  />
                )
              })
            }
          </div>
        </div>
        
        <div id="by-category" className="justify-center my-12">
          {_Title("kategori")}
          <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            {
              collectionByCategory.map((item, index) => {
                return (
                  <CollectionCard
                  key={index}
                  title={item.title}
                  link={item.link}
                  imageUrl={item.imageUrl}
                  font={item.font}
                  fontSize={item.fontSize}
                  height={item.height}
                  uppercase={item.uppercase}
                  scaleTransition = {item.scaleTransition}
                  opacityTransition = {item.opacityTransition}
                />
                )
              })
            }
          </div>
          <div className="flex justify-center items-center lg:mt-10">
            <button className="transition ease-in-out duration-300 border border-black px-10 py-2 hover:bg-neutral-800 hover:text-white">
              TAMPILKAN LEBIH BANYAK
            </button>
          </div>
        </div>
        
        {/* <section id="costumer-care" className="w-full flex justify-center px-10 py-20">
          <img className="rounded-lg w-1/2" src="https://media.graphassets.com/FFUsIOhsSKeVVHz1eHGC" alt="" />
          <div className="ml-10 flex items-center">
            <div>
              <h1 className="font-inter font-bold text-3xl my-4">Layanan Pelanggan</h1>
              <p>
                Mengalami masalah atau ada yang ingin ditanyakan?
                Tim layanan pelanggan kami siap membantu anda dengan segala pertanyaan, masukan atau
                masalah yang sedang anda hadapi.
              </p>
              <button className="mt-10 rounded-lg bg-black px-10 py-3 flex items-center">
                <p className="text-white text-lg font-inter">Hubungi sekarang</p>
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} size="lg" color="white"/>
              </button>
            </div>
          </div>
        </section> */}
      </div>
      <Footer/>
    </>
  );
}

export default Homepage;
