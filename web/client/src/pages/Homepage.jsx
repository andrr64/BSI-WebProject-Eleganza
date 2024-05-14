import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import "./Homepage.css"

function buildCollectionCard(link, imageUrl, title, extraClassname) {
  return (
    <Link 
      to={link}
      className={`
        rounded-2xl overflow-hidden h-64 w-1/3 
        transition duration-500 ease-in-out 
        flex justify-center items-center
        relative
        ${extraClassname}
      `}
    >
      <img 
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="
          absolute inset-0
          bg-black opacity-20 hover:opacity-40 transition duration-500 ease-in-out
        "
      ></div>
      <div 
        className="z-10 text-center text-white font-inter text-3xl">
        {title}
      </div>
    </Link>
  );
}
function buildUnggulanCard(link, imageUrl, title, extraClassname) {
  return (
    <Link 
      to={link}
      className={`
        homepage-unggulan
        flex justify-center items-center
        relative
        transition duration-500 ease-in-out
        hover:scale-95
        border-2 border-white rounded-lg
        overflow-hidden
        ${extraClassname}
      `}
    >
      <img 
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="
          absolute inset-0
          bg-black opacity-10 hover:opacity-30 transition duration-500 ease-in-out
        "
      ></div>
      <div className="justify-center items-center flex backdrop-blur-sm border py-1 px-5 z-10 text-white bg-white bg-opacity-30">
        <p className="text-3xl text-center">{title}</p>
      </div>
    </Link>
  );
}



function Homepage() {
  return (
    <>
      <div id="content" className="bg-white">
       
        <section className="h-screen mt-20 px-5">
          <p className="text-center">
            Mama
          </p>
        </section>
       
        <section className="w-full my-10 px-10">
          <div className="my-10">
            <h1 className="font-inter-light text-2xl md:text-3xl">
              Koleksi Terbaru
            </h1>
            <p className="font-inter-light text-xs md:text-lg">
              Upgrade penampilanmu dengan koleksi terbaru yang mengikuti tren terkini. 
            </p>
          </div>
          <div className="flex space-x-12">
            {buildCollectionCard('http://google.com', 'https://pinoy-in-style.com/wp-content/uploads/2020/11/1-819x1024.jpg', 'Simple')}
            {buildCollectionCard('http://google.com', 'https://i.pinimg.com/564x/52/6f/bb/526fbbe9dcd5899ee6f423d36a5d33d3.jpg', 'Vintage')}
          </div>
        </section>
        <section className="w-full my-10 px-5">
          <div className="flex justify-center items-center my-12">
            <h1 className="text-2xl md:text-3xl font-inter-light">
              UNGGULAN
            </h1>
          </div>
          <div className="grid justify-center items-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {buildUnggulanCard("https://google.com", "https://assets.vogue.com/photos/6407afdd068d1267137bb20d/4:3/w_840,h_630,c_limit/00-social.jpg", "Bags", "")}
            {buildUnggulanCard("https://google.com", "https://i.pinimg.com/564x/ba/6a/08/ba6a081b2a989593600fdaad28b5524f.jpg", "Man", "")}
            {buildUnggulanCard("https://google.com", "https://pinoy-in-style.com/wp-content/uploads/2020/11/1-819x1024.jpg", "Women", "")}
            {buildUnggulanCard("https://google.com", "https://img.freepik.com/free-photo/kids-fashion-style-childrens-wear-accessories-concept-serious-confident-african-american-boy-modeling-against-blank-wall-wearing-striped-jumper-pink-shades-his-head_343059-4497.jpg", "Kids", "")}
            {buildUnggulanCard("https://google.com", "https://pinoy-in-style.com/wp-content/uploads/2020/11/1-819x1024.jpg", "Women", "")}
            {buildUnggulanCard("https://google.com", "https://pinoy-in-style.com/wp-content/uploads/2020/11/1-819x1024.jpg", "Women", "")}
          </div>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default Homepage