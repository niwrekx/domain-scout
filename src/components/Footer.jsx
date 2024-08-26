import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <section className='text-slate-100  '>
      <div className='generalContainer '>
        <div className='h-[30px] flexCenterAll'>
          <div className='text-xs'>developed by © niwrekx {year}</div>         
        </div>
      </div>
    
    </section>
  )
}

export default Footer