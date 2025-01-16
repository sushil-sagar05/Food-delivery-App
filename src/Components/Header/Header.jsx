import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setSearch } from '../../Redux/Slices/SearchSlice';
import { Link } from 'react-router-dom';
import { FaBowlFood } from "react-icons/fa6";
import Hamburger from '../Hamburger';
import{ useGSAP} from '@gsap/react'
import gsap from 'gsap';
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
        <div className="left w-1/2 h-full  flex items-center justify-end ">
      <div  className='text-4xl mr-3 flex gap-3 rounded-lg text-white bg-black'>
        {/* <GiHamburgerMenu /> */}
      <Hamburger  />
      </div>
        </div>
      </nav>
     
        
    
    </header>
  );
}

export default Header;