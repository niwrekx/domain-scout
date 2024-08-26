import React from 'react'
import { RxMagnifyingGlass } from "react-icons/rx";

const SearchForm = ({domain,setDomain, handleSubmit}) => {
  return (
    <>
        <form onSubmit={handleSubmit} className='flexCenterAllColumn gap-2 md:flex-row '>
              <div className='flexCenterBetween border-[2px] w-full border-sky-900  rounded-xl relative'>
                  <input 
                      type="text"
                      id="nameserver"
                      className='form-field placeholder-slate-100 text-slate-100 '
                      placeholder='Enter a domain name'
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                  />
            
              <div className='absolute right-0'>
                  <button type='submit' className=' text-2xl text-slate-100 p-3'>
                      <RxMagnifyingGlass />
                  </button>
              </div>
              </div>

        </form>
    
    </>
  )
}

export default SearchForm