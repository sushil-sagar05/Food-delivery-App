import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';

function Hamburger() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const hamburgerRef = useRef(null);

  const toggleButton = () => {
    setHamburgerOpen(!hamburgerOpen);
    if (hamburgerRef.current) {
      hamburgerRef.current.style.opacity = hamburgerOpen ? '0' : '1';
    }
  };

  return (
    <div>
      <button onClick={toggleButton}>
        {hamburgerOpen ? <RxCross1 /> : <GiHamburgerMenu />}
      </button>
      <div
        ref={hamburgerRef}
        className={`bg-white mt-8 rounded-lg h-24 text-xl text-center w-24 cursor-pointer text-black transition-opacity duration-300 ${hamburgerOpen ? 'opacity-100' : 'opacity-0'}`}
        style={{ position: 'absolute', top: '65px', right: '0' }}
      >
        <ul className='border rounded-lg'>
          <Link to='/login'><li className=''>Login</li></Link>
          <hr />
          <Link to='/signup'><li>Signup</li></Link>
          <hr />
          <Link to='/help'><li>Help</li></Link>
          <hr />
        </ul>
      </div>
    </div>
  );
}

export default Hamburger;