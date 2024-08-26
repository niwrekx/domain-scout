import React from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { PiVaultFill } from "react-icons/pi";
import { MdOutlineClose } from "react-icons/md";
import { SiHelpscout } from "react-icons/si";

const Navbar = () => {
  return (
    <section className='text-slate-900  '>
    <div className='generalContainer '>
      <div className='h-[50px] flexCenterBetween'>
        <Link to='/' className='flexCenterAll'>
          <SiHelpscout className=' text-3xl pt-1 text-slate-50 '/>
          <p className='text-lg font-semibold text-slate-50 '>domain scout</p>
        </Link>
        <button type="button" className='text-xl block relative' 
        // onClick={handleDropdown}
        >
          {/* {dropdown  ? <MdOutlineClose/> : <RxHamburgerMenu />}  */}
        </button>

        {/* {dropdown &&
          <div className='bg-white  rounded-md shadow-sm absolute right-7 top-14 min-w-[200px] p-5'> 
            {currentUser ? 
            <>
              <div className='flexCenterStart gap-2'>
                <ProfileImage />            
              </div>
              <Link className='flexCenterStart side-nav py-3 px-4' onClick={handleSignOut}>
                Sign Out
              </Link>   
            
            </>                      
            : 
              <Link className='flexCenterStart side-nav py-3 px-4'  to={signInLink}>
                Sign In
              </Link>
            }  
          </div>   
        }        */}
     
      
      </div>
    </div>
   
  </section>
  )
}

export default Navbar