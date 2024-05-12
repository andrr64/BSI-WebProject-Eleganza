import { Link } from "react-router-dom"
import './NavigationBar.css'
import SearchBar from "./SearchBar"
import ProfileButton from "./ProfileButton";
import { ROUTE } from "../../AppRoute";
import MenuBar from "./MenuBar";

const NavigationBar = () => {
  const createNavBarItem = (title, path) => {
    return {
      title: title,
      path: path
    }
  }
  const navbarItems = [
    createNavBarItem('Home', ROUTE.homepage),
    createNavBarItem('Man', ROUTE.man),
    createNavBarItem('Woman', ROUTE.woman),
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
                className={`font-medium hover:translate-y-1 uppercase transition ease-in-out`}
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
        <li><ProfileButton/></li>
        <li className="md:hidden">
          <MenuBar/>
        </li>
      </ul>
    </nav>
  );
};


export default NavigationBar;
