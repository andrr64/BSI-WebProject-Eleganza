import bsiLogo from "../assets/images/bsi-logo.png";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black py-10 px-20 text-white flex justify-between">
      <div className="my-auto">
        <Link to={'/'}>
          <p className="text-4xl font-laBelle">Eleganza</p>
        </Link>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <img className="h-12 mr-4" src={bsiLogo} alt="BSIU Logo" />
          <h2 className="text-l font-bold">
            Bina Sarana Informatika University <br />
            Informatics Engineering Department
          </h2>
        </div>
        <div className="text-left py-1 text-sm">
          <p>
            This website is created to fulfill the final project of the web development course.<br /> 
            <a href="https://github.com/andrr64/BSI-WebProject-Eleganza" target="_blank" className="font-semibold">Click here</a> for more information.
          </p>
        </div>  
      </div>
    </div>
  )
}
