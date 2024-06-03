/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Page from "../RenderPage";
import { scrollToZero } from "../../utility/ScrollToZero";
import { delay } from "../../utility/Delay";
import { isServerOnline } from "../../api/API";

function ProductPage() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState(true);
  
  const mainContent = () => {
    
  }

  useEffect(() => {
    const getContent = async() => {
      try {
        setLoading(true);
        if (!(await isServerOnline())) return setServerStatus(false);
        await delay(500);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    scrollToZero();
    getContent();
  }, [params.id]);

  return Page(loading, serverStatus, mainContent, true, false)
}

export default ProductPage