import Footer from "../components/Footer";
import NavigationBar from "../components/navbar/NavigationBar";

/* eslint-disable react/prop-types */
export default function Content({main}) {
  return (
    <>
        <NavigationBar />
        {main}
        <Footer/>
    </>
  )
}
