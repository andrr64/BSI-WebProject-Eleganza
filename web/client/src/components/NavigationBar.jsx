import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUser} from "@fortawesome/free-solid-svg-icons"

function ProfileController () {
  return (
    <div className="transition hover:translate-y-1 ease-in-out">
      <Link to={'/profile'}>
        <FontAwesomeIcon icon={faUser} color="white" size="xl" className="ml-8"/>
      </Link>
    </div>
  )
}

const NavigationBar = () => {
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
          Eleganza
        </h1>
        <div className="hidden md:flex"> {/* Move menu to right side */}
          <ul className="px-12 flex item-center space-x-10">
            {navBarMenu.menu.map((menu, index) => (
              <li
                key={index}
                className={`font-medium hover:translate-y-1 uppercase transition ease-in-out`}
                style={{ cursor: 'pointer' }}
              >
                <Link to={navBarMenu.linkTo[index]}>{menu}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ProfileController/>
    </nav>
  );
};


export default NavigationBar;
