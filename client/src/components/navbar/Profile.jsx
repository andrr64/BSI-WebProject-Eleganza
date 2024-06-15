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

  const renderProfilePicture = () => {
    return (
      <img
        alt="Profile Picture"
        src={user.currentUser.picture}
        className="w-20 h-20 rounded-full" // Menggunakan kelas-kelas Tailwind CSS untuk mengatur ukuran dan rounded
      />
    );
  };

  const getMenu = () => {
    const buildMenuItem = (title, link, icon = false, on_click = () => {}) => {
      return (
        <Link to={link} onClick={on_click}>
          <div className='flex items-center justify-left px-5 py-2 hover:bg-gray-100 cursor-pointer'>
            {icon && (
                <FontAwesomeIcon className="w-12" icon={icon}/>
            )}
            {title}
          </div>
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
          <li>
            <div className='pb-5 pt-5'>
              <div className='flex justify-center'>
                {renderProfilePicture()}
              </div>
              <div className='mx-8 text-center mt-2'>
                <h1 className='text-lg md:text-2xl font-bold font-inter'>
                  {user.currentUser.name}
                </h1>
                <p>{user.currentUser.email}</p>
              </div>
            </div>
          </li>
          <li className='pt-5'>
            <hr />
            <div className='grid grid-cols-1 divide-y items-center'>
              {buildMenuItem('Pengaturan Akun', ROUTE.user.account, faGear)}
              {buildMenuItem('Transaksi Ku', ROUTE.user.transactions, faReceipt)}
              {buildMenuItem('Keluar', '', faDoorOpen, handleSignOut)}
            </div>
            <hr />
          </li>
        </ul>
      )
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="cursor-pointer text-center relative inline-block" ref={menuRef}>
      <div onClick={handleIconClick}>
        { user.currentUser !== null? 
          <img src={user.currentUser.picture} className='w-8 rounded-full avatar' /> : (<FontAwesomeIcon icon={faUser} size='lg' />)
        }
      </div>
      {isMenuOpen && (
        <div className="text-black absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg">
          {getMenu()}
        </div>
      )}
    </div>
  );
}