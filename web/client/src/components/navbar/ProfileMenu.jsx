import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faGear, faReceipt, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../AppRoute';
import { signOutStart, signOutSuccess } from '../../redux/user/userSlice';
import { showAlert, ALERT } from "../Alert";

export default function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleIconClick = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };
``
  const handleSignOut = async () => {
    setIsMenuOpen(false);
    dispatch(signOutStart());    
    dispatch(signOutSuccess());  
    showAlert(ALERT.SUCCESS, 'Logout Success')
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getMenu = () => {
    const buildMenuItem = (title, link, icon = false, on_click = () => {}) => {
      return (
        <Link to={link} onClick={on_click}>
          <li className='flex items-center justify-left px-5 py-2 hover:bg-gray-100 cursor-pointer'>
            {icon && (
                <FontAwesomeIcon className="w-12" icon={icon}/>
            )}
            {title}
          </li>
        </Link>
      )
    }

    if (user.currentUser == null){
      return (
        <ul className='py-1'>
          {buildMenuItem('Masuk', ROUTE.user.signin, faRightToBracket)}
          {buildMenuItem('Registrasi', ROUTE.user.signup, faUserPlus)}
        </ul>
      )
    } 
    else {
      return (
        <ul className='py-1'>
          {buildMenuItem('Pengaturan Akun', ROUTE.user.account, faGear)}
          {buildMenuItem('Transaksi Ku', ROUTE.user.transactions, faReceipt)}
          {buildMenuItem('Keluar', '', faDoorOpen, handleSignOut)}
        </ul>
      )
    }
  }

  return (
    <div className="w-full cursor-pointer relative inline-block" ref={menuRef}>
      <div onClick={handleIconClick}>
        <FontAwesomeIcon icon={faUser} size='lg' />
      </div>
      {isMenuOpen && (
        <div className="text-black absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg">
          {getMenu()}
        </div>
      )}
    </div>
  );
}