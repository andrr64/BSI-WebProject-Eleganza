import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


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
        ${extraClassname}
      `}
      style={{
        height: '100vh'
      }}
    >
      <img 
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div
        className="
          absolute inset-0
          bg-black opacity-10 hover:opacity-30 transition duration-500 ease-in-out
        "
      ></div>
      <div className="justify-center items-center flex backdrop-blur-sm border py-2 px-6 z-10 text-white bg-white bg-opacity-30">
        <p className="uppercase text-lg text-center">{title}</p>
      </div>
    </Link>
  );
}

function Homepage() {
  return (
    <>
      <div className="content px-10">
        <section id="" className="h-screen px-5">
          <p className="text-center">
            Mama
          </p>
        </section>
        
        <section id="collection" className="px-5 md:px-2">
          <div className="my-10">
            <h1 className="underline font-inter-light text-2xl md:text-3xl">
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

        <section id="unggulan" 
          className="justify-center mt-5"
        >
          <div className="flex justify-center items-center my-12">
            <h1 className="text-2xl md:text-3xl font-inter-light">
              JADILAH DIRI SENDIRI
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-2 w-full h-1/2 mb-5">
            {buildUnggulanCard("https://google.com", "https://images.pexels.com/photos/15937632/pexels-photo-15937632/free-photo-of-young-man-with-bleached-hair-in-a-casual-black-outfit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "pria", "")}
            {buildUnggulanCard("https://google.com", "https://plus.unsplash.com/premium_photo-1682095664848-014a0a2bfd8a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "wanita", "")}
          </div>

          <div className="flex justify-center items-center my-12">
            <h1 className="text-2xl md:text-3xl font-inter-light underline">
              UNGGULAN
            </h1>
          </div>
          <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {buildUnggulanCard('http://adidas.com', 'https://i.pinimg.com/originals/08/89/9f/08899fbe510797b1151df941b01530e2.jpg', 'SEPATU')}
            {buildUnggulanCard('http://adidas.com', 'https://i.pinimg.com/736x/43/98/34/4398343f91fc640bfa0e1629946989c4.jpg', 'TAS')}
          </div>
        </section>

        <section id="costumer-care" className="w-full flex justify-center px-10 py-20">
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
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default Homepage