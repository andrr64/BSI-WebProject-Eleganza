import Footer from "../components/Footer";
import {CollectionCard} from "../components/CollectionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Homepage() {
  return (
    <>
      <div className="content px-10">
        <section id="" className="h-screen px-5">
          <p className="text-center">
            Mama
          </p>
        </section>
        
        {/* <section id="collection" className="px-5 md:px-2">
          <div className="my-10">
            <h1 className="underline font-inter-light text-2xl md:text-3xl">
              Koleksi Terbaru
            </h1>
            <p className="font-inter-light text-xs md:text-lg">
              Upgrade penampilanmu dengan koleksi terbaru yang mengikuti tren terkini. 
            </p>
          </div>
          <div className="flex space-x-12">
            <CollectionCard 
              link='http://google.com' 
              imageUrl='https://pinoy-in-style.com/wp-content/uploads/2020/11/1-819x1024.jpg' 
              title='Simple' 
            />
            <CollectionCard 
              link='http://google.com' 
              imageUrl='https://i.pinimg.com/564x/52/6f/bb/526fbbe9dcd5899ee6f423d36a5d33d3.jpg' 
              title='Vintage' 
            />
          </div>
        </section> */}

        <section id="unggulan" 
          className="justify-center mt-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-2 w-full h-1/2 mb-5">
            <CollectionCard 
              link="https://google.com" 
              imageUrl="https://images.pexels.com/photos/15937632/pexels-photo-15937632/free-photo-of-young-man-with-bleached-hair-in-a-casual-black-outfit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              title="PRIA" 
              font="font-josefin"
              extraClassname={"font-bold"}
            />
            <CollectionCard 
              link="https://google.com" 
              imageUrl="https://plus.unsplash.com/premium_photo-1682095664848-014a0a2bfd8a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              title="wanita"
              font={"font-inter-light"}
            />
          </div>

          <div className="flex justify-center items-center my-12">
            <h1 className="text-2xl md:text-3xl font-inter-light ">
              KATEGORI
            </h1>
          </div>
          <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <CollectionCard 
              title='SEPATU' 
              link='http://adidas.com' 
              imageUrl='https://i.pinimg.com/originals/08/89/9f/08899fbe510797b1151df941b01530e2.jpg' 
              font={"font-inter-light"}
              fontSize="text-lg md:text-2xl"
              height="85vh"
            />
            <CollectionCard 
              title='TAS' 
              link='http://adidas.com' 
              imageUrl='https://i.pinimg.com/736x/43/98/34/4398343f91fc640bfa0e1629946989c4.jpg' 
              font={"font-inter-light"}
              fontSize="text-lg md:text-2xl"
              height="85vh"
            />
            <CollectionCard 
              title='PARFUM'
              link='https://adidas.com'
              imageUrl='https://i.pinimg.com/564x/c5/51/6f/c5516fed38bb44da3d025c048e5e0020.jpg'
              font={"font-inter-light"}
              fontSize="text-lg md:text-2xl"
              height="85vh"
            />
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
  );
}

export default Homepage;
