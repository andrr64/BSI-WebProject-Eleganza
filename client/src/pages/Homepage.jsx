/* eslint-disable react/prop-types */
import {CollectionCard} from "../components/CollectionCard";
import { useEffect, useState } from "react";
import { serverApiJsonGet, isServerOnline } from "../api/API";
import { goToNXCollection } from "../AppRoute";
import { scrollToZero } from "../utility/ScrollToZero";
import Page from "./RenderPage";

function Title ({judul}){
  return (
    <div className="flex justify-center items-center py-5">
      <h1 className="text-black uppercase text-lg md:text-2xl font-inter-light ">
      {judul}
      </h1>
    </div>
  )
}

function Section({id, title, layout, data}){
  return (
    <section id={id}>
      <Title judul={title}/>
      <div className={`${layout}`}>
      {
          data.map((item, index) => {
            return (
              <CollectionCard 
                key={index} 
                link= {goToNXCollection(item.link.path, item.link.x)}
                imageUrl={item.imageUrl}
                title={item.title}
                extraClassname={item.extraClassname}
                font={item.font}
                fontSize={item.fontSize}
                height={item.height}
                width={item.width}
                scaleTransition={item.scaleTransition}
                opacityTransition={item.opacityTransition}
                uppercase={item.uppercase}
                titleWithImage={item.titleWithImage}
                titleWithImageHeight={item.titleWithImageHeight}
                titleWithImageWidth={item.titleWithImageHeight}
              />
            )
          })
        }
      </div>
    </section>
  )
}

function Homepage() {
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState(true);
  const [kontenMerekUnggulan, setKontenMerekUnggulan] = useState([]);
  const [kontentKategori, setKontentKategori] = useState([]);
  const [kontenGender, setKontenGender] = useState([]);

  const mainContent = () => {
    return (
      <>
        <section id="content" className={`mx-10 my-20 $ ${loading? 'h-screen' : ''}`}>
          <Section 
            id={"merek-unggulan"} 
            title={kontenMerekUnggulan.title} 
            layout={`grid grid-cols-1 md:grid-cols-3 px-5 gap-2 w-full h-1/2 mb-5`}
            data={kontenMerekUnggulan.data}
          />
          <Section 
            id={"gender"} 
            title={kontenGender.title} 
            layout={`grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-1/2 mb-5`}
            data={kontenGender.data}
          />
          <Section 
            id={"kategori"} 
            title={kontentKategori.title} 
            layout={`grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2`}
            data={kontentKategori.data}
          />
        </section>
      </>
    ); 
  }

  useEffect(() => {
    const delay = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    const getContents = async () => {
      setLoading(true);
      setServerStatus(await isServerOnline());
      try {
        const merek_unggulan = await (await serverApiJsonGet('/web/homepage/merek-unggulan')).json();
        const kategori = await (await serverApiJsonGet('/web/homepage/kategori')).json();
        const gender = await (await serverApiJsonGet('/web/homepage/gender')).json();
        setKontenMerekUnggulan(merek_unggulan.data);
        setKontentKategori(kategori.data);
        setKontenGender(gender.data);
        await delay(500);
      } catch (error) {
        console.log(error);
        setServerStatus(false);
      } finally {
        setLoading(false);
      }
    };
    scrollToZero();
    getContents();
  }, []);

  return Page(loading, serverStatus, mainContent);
}

export default Homepage;