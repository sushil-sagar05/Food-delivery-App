import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setSearch } from '../../Redux/Slices/SearchSlice';
import { Link } from 'react-router-dom';
import { FaBowlFood } from "react-icons/fa6";
import Hamburger from '../Hamburger';
import { FaRegUser } from "react-icons/fa6";

function Header() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-white shadow-md'>
      <nav className='flex items-center justify-between p-4'>
        <div className="flex items-center">
          <Link to='/' className='flex items-center text-3xl font-bold text-black'>
            Delivery <FaBowlFood className='ml-2' />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <input
            type='search'
            name='search'
            placeholder='Search here'
            autoComplete='off'
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className='border-2 border-red-500 text-sm h-10 p-2 rounded-lg outline-none'
          />
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `py-2 px-4 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
            }
          >
            Help
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `py-2 px-4 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
            }
          >
            Sign Up
          </NavLink>
        </div>
        <div className="lg:hidden">
          <Hamburger />
        </div>
      </nav>
    </header>
  );
}

export default Header;