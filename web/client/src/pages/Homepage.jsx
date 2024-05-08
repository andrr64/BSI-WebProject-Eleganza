import NavigationBar from "../components/navbar/NavigationBar"
import Footer from "../components/Footer"

function Homepage() {
  return (
    <>
      <NavigationBar/>
      <div>
        <div className="h-screen">
          <p className="text-center">
            Beranda
          </p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Homepage