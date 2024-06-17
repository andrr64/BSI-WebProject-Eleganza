/* eslint-disable react/prop-types */
import './NavigationBar.css'
import Profile from './Profile';
import SearchBar from './SearchBar';
import Logo from './Logo';
import Cart from './Cart';

const UserActions = () => (
  <div className='flex justify-end items-center gap-4 divide-x-2 divide-gray-500'>
    <div className='flex gap-4'>
      <Cart/>
    </div>
    <div className='pl-4'>
      <Profile/>
    </div>
  </div>
)

const NavigationBar = () => {
  return (
    <div className="bg-black text-white grid grid-cols-3 md:px-20 items-center justify-between p-5 navigationBar">
      <Logo/>
      <SearchBar/>
      <UserActions/>
    </div>
  );
}

export default NavigationBar;