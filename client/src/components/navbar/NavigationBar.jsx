/* eslint-disable react/prop-types */
import ProfileMenu from './ProfileMenu';
import SearchBar from "./SearchBar"
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom"
import { ROUTE } from "../../AppRoute";

import './NavigationBar.css'
const TypeWhite = () => {
  return (
    <div className="grid grid-cols-3 items-center justify-between p-5">
    <div className="flex gap-5">
      <Link>Fashion Accessories</Link>
      <Link>Fragrance & Beauty</Link>
    </div>
    <div className="text-center">
      <span className="font-laBelle text-4xl">Eleganza</span>
    </div>
  </div>
  )
}
const NavigationBar = ({type='default'}) => {
  // const createNavBarItem = (title, path) => {
  //   return {
  //     title: title,
  //     path: path
  //   }
  // }
  // const navbarItems = [
  //   createNavBarItem('Homepage', ROUTE.homepage),
  //   createNavBarItem('Pria', ROUTE.man),
  //   createNavBarItem('Wanita', ROUTE.woman),
  //   createNavBarItem('Anak-Anak', ROUTE.children),
  // ]
  if (type === 'white'){
    return  <TypeWhite/>
  }
  return (
    <nav className="bg-black text-white py-5 px-8 md:px-10 lg:px-14 flex items-center navigationBar">
      <div className="flex items-center flex-grow">  {/* Flex-grow for spacing */}
        <Link to={ROUTE.homepage}>
          <h1 className="text-2xl lg:text-4xl font-medium font-laBelle">
            Eleganza
          </h1>
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li><SearchBar/></li>
        <li><ProfileMenu/></li>
        <li className="md:hidden">
          <MenuBar/>
        </li>
      </ul>
    </nav>
  );
};


export default NavigationBar;
