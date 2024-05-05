import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavigationBar = () => {
  const [activeMenu, setActiveMenu] = useState('Beranda');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const navBarMenu = {
    menu: [
      'Beranda',
      'Pria',
      'Wanita'
    ],
    linkTo: [
      '/',
      '/collection/man',
      '/collection/woman'
    ]
  };

  return (
    <nav className="bg-black text-white flex items-center px-20 py-5">
      <div className="flex items-center flex-grow">  {/* Flex-grow for spacing */}
        <h1 className="text-4xl font-medium ml-4 font-laBelle">
          <Link to="/">Eleganza</Link>
        </h1>
        <div className="hidden md:flex"> {/* Move menu to right side */}
          <ul className="px-12 flex item-center space-x-10">
            {navBarMenu.menu.map((menu, index) => (
              <li
                key={index}
                className={`${activeMenu === menu ? 'font-bold' : ''} uppercase`}
                onClick={() => handleMenuClick(menu)}
                style={{ cursor: 'pointer' }}
              >
                <Link to={navBarMenu.linkTo[index]}>{menu}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SearchBar />
    </nav>
  );
};

export default NavigationBar;
