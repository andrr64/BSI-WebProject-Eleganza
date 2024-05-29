/* eslint-disable react/prop-types */
import {CollectionCard} from "../components/CollectionCard";
import { useEffect, useState } from "react";
import { serverApiJsonGet, isServerOnline } from "../api/API";
import { goToNXCollection } from "../AppRoute";
import { scrollToZero } from "../utility/ScrollToZero";
import { delay } from "../utility/Delay";
import Page from "./RenderPage";

function Title ({judul}){
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-black uppercase text-lg md:text-xl font-inter-light">
      {judul}
      </h1>
    </div>
  )
}

function Section({id, title, layout, data}){
  return (
    <section id={id}>
      <div className="py-5">
        <Title judul={title}/>
      </div>
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
        <section id="content" className={`mx-2 my-20 md:mx-20 ${loading? 'h-screen' : ''}`}>
            <Section 
              id={"merek-unggulan"} 
              title={kontenMerekUnggulan.title} 
              layout={`grid grid-cols-2 md:grid-cols-3 gap-2 px-5 w-full h-1/2`}
              data={kontenMerekUnggulan.data}
            />
            <Section 
              id={"gender"} 
              title={kontenGender.title} 
              layout={`grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-1/2`}
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
    const getContents = async () => {
      setLoading(true);
      try {
        if (!(await isServerOnline()))
          return setServerStatus(false);
        const merek_unggulan = await (await serverApiJsonGet('/web/homepage/merek-unggulan')).json();
        const kategori = await (await serverApiJsonGet('/web/homepage/kategori')).json();
        const gender = await (await serverApiJsonGet('/web/homepage/gender')).json();
        setKontenMerekUnggulan(merek_unggulan.data);
        setKontentKategori(kategori.data);
        setKontenGender(gender.data);
        await delay(500);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    scrollToZero();
    getContents();
  }, []);

  return Page(loading, serverStatus, mainContent, true, true);
}

export default Homepage;