import { useEffect, useState } from "react";
import { scrollToZero } from "../../utility/ScrollToZero";
import { useParams } from "react-router-dom";
import { isServerOnline, serverApiJsonGet } from "../../api/API";
import Page from "../RenderPage";
import ProductCard from "../../components/cards/ProductCard";

function CollectionBrand() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState(true);
  const [products, setProducts] = useState([]);

  const mainContent = () => (
    <section id="content" className={`mx-10 my-20 py-10 lg:py-5 lg:mx-20 ${loading? 'h-screen' : ''}`}>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((item, index) => {
            return <ProductCard key={index} data={item}/>
          })}
        </section>
    </section>  
  );

  useEffect(() => {
    const getContent = async () => {
      try {
        setLoading(true);
        if (!(await isServerOnline())) return setServerStatus(false);
        const res = await (await serverApiJsonGet(`/brand/name/${params.name}`)).json();
        const _products = await (await serverApiJsonGet(`/product/brand/${res.data._id}`)).json();
        setProducts(_products.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    scrollToZero();
    getContent();
  }, [params.name]); // Tambahkan params.name ke dalam array dependensi

  return Page(loading, serverStatus, mainContent,true, false);
}

export default CollectionBrand;
