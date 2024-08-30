import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {setSearch} from '../../Redux/Slices/SearchSlice'
function Header() {
    const dispatch = useDispatch()
  return (
    <header className='mt-0  outline-1 bg-white '>
        <nav className='  gap-48   h-14 items-center flex justify-evenly'>
  <div className="left flex bg-slate-300 ">
    <div className="Logo">
       Logo
    </div>
  </div>
  <div className="right">
  <div
                        className="hidden justify-between font-bold items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                           
                            <li>
                                <NavLink
                                to="/Offers"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Offers
                                </NavLink>
                            </li>
                            <li>
                              <input
                              type='search'
                              name='search'
                              id=""
                              placeholder='search-here'
                              autoComplete='off'
                              onChange={(e) => dispatch(setSearch(e.target.value))}
                              className='border-red-500 text-sm h-10 p-2 rounded-lg outline-red-500 '
                              />
                            </li>
                            <li>
                                <NavLink
                                to="/Help"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Help
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Help"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Sign UP
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
  </div>
  </nav>
  </header>
  )
}

export default Header