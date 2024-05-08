import { Link } from "react-router-dom"
import './NavigationBar.css'
import SearchBar from "./SearchBar"
import Profile from "./Profile";
import { ROUTE } from "../../AppRoute";

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
    <nav className="bg-black text-white flex items-center px-20 py-5 navigationBar">
      <div className="flex items-center flex-grow">  {/* Flex-grow for spacing */}
        <h1 className=" text-4xl font-medium ml-4 font-laBelle">
          Eleganza
        </h1>
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
        <li><Profile/></li>
      </ul>
    </nav>
  );
};


export default NavigationBar;
