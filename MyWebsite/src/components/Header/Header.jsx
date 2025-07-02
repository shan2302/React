import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function Header() {
  return (
    <header className='bg-white border-y z-50 top-0 shadow sticky'>
      <nav className="border-grey-200 px-4 lg:px-4 py-2.5">
      <div className='mx-auto w-full max-w-screen-xl py-6 xl:py-2'>
          <Link to='/' className="flex items-center">
          <img  
          src='https://images.pexels.com/photos/32752984/pexels-photo-32752984.jpeg' 
          className="mr-3 h-12"
          />
          </Link>
      <div className='hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1'>
          <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-8'>
            <li>
              <NavLink
              to="/"
               className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
              > 
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/Github"
               className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }>
                Github
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/LinkedIn"
               className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }>
                LinkedIn
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/SocialMedia
              "
               className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }>
                SocialMedia
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