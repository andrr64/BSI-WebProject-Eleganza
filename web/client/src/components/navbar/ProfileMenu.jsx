import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../AppRoute';
import { signOutStart, signOutSuccess } from '../../redux/user/userSlice';

export default function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIconClick = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const handleSignOut = async () => {
    dispatch(signOutStart());    
    dispatch(signOutSuccess());  
    navigate('/');      
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getMenu = () => {
    const buildMenuItem = (title, link) => {
      return (
        <Link to={link}>
          <li className='px-5 py-2 hover:bg-gray-100 cursor-pointer'>
            {title}
          </li>
        </Link>
      )
    }

    if (user.currentUser == null){
      return (
        <ul className='py-1'>
          {buildMenuItem('Sign In', ROUTE.user.signin)}
          {buildMenuItem('Sign Up', ROUTE.user.signup)}
        </ul>
      )
    } else {
      return (
        <ul className='py-1'>
        {buildMenuItem('Account', ROUTE.user.account)}
        {buildMenuItem('My Transaction', ROUTE.user.transactions)}
        <li 
          onClick={handleSignOut} 
          className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${user.loading ? 'disable' : ''}`}
        >
            Sign Out
        </li>
      </ul>
      )
    }
  }

  return (
    <div className="cursor-pointer relative inline-block" ref={menuRef}>
      <div onClick={handleIconClick}>
        <FontAwesomeIcon icon={faUser} size='lg' />
      </div>
      {isMenuOpen && (
        <div className="text-black absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
          {getMenu()}
        </div>
      )}
    </div>
  );
}
