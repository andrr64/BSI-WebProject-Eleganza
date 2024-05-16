import ProfileMenu from './ProfileMenu';
import SearchBar from "./SearchBar"
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom"
import { ROUTE } from "../../AppRoute";

import './NavigationBar.css'

const NavigationBar = () => {
  const createNavBarItem = (title, path) => {
    return {
      title: title,
      path: path
    }
  }
  const navbarItems = [
    createNavBarItem('Homepage', ROUTE.homepage),
    createNavBarItem('Pria', ROUTE.man),
    createNavBarItem('Wanita', ROUTE.woman),
    createNavBarItem('Anak-Anak', ROUTE.children),
  ]

  return (
    <nav className="bg-black text-white py-5 px-8 md:px-10 lg:px-14 flex items-center navigationBar">
      <div className="flex items-center flex-grow">  {/* Flex-grow for spacing */}
        <Link to={ROUTE.homepage}>
          <h1 className="text-2xl lg:text-4xl font-medium font-laBelle">
            Eleganza
          </h1>
        </Link>
        <div className="font-inter hidden md:flex"> {/* Move menu to right side */}
          <ul className="px-12 flex item-center space-x-10">
            {navbarItems.map((item, index) => (
              <li
                key={index}
                className={`font-medium uppercase`}
                style={{ cursor: 'pointer' }}
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
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
