/* eslint-disable react/prop-types */
import './NavigationBar.css'
import { Link } from "react-router-dom"
import { ROUTE } from "../../AppRoute";
import ProfileMenu from './ProfileMenu';

const TypeWhite = () => {
  return (
    <div className="border bg-white grid grid-cols-3 px-20 items-center justify-between p-5 navigationBar">
      <div className="flex gap-5">
        <Link to="/fashion-accessories">Fashion Accessories</Link>
        <Link to="/fragrance-beauty">Fragrance & Beauty</Link>
      </div>
      <Link to={ROUTE.homepage}>
        <div className="text-center">
          <span className="font-laBelle text-4xl">Eleganza</span>
        </div>
      </Link>
      <div className="flex justify-end gap-5">
        <ul>
          <li><ProfileMenu/></li>
        </ul>
      </div>
    </div>
  );
}


const NavigationBar = ( ) => {
  return  <TypeWhite/>
};

export default NavigationBar;