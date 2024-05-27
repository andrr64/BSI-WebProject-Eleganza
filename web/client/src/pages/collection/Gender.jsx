import { useEffect } from "react";
import Footer from "../../components/Footer"
import NavigationBar from "../../components/navbar/NavigationBar"
import { scrollToZero } from "../../utility/ScrollToZero";

function CollectionGender() {
  useEffect(() => {
    scrollToZero();
  }, [])

  return (
    <>
      <NavigationBar/>
      <section id="content" className="my-20 h-screen">

      </section>
      <Footer/>
    </>
  )
}

export default CollectionGender