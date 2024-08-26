import React from 'react'
import AboutUsImage from '../assets/images/web-host.webp'

const AboutUs = () => {
  return (
    <section className='flexCenterAll generalContainer gap-11  '>
      <div className=' md:flexCenterAll '>
        <div className=' max-w-7xl flexCenterAllStart gap-4 basis-1/2'>
          <h2 className='main-title text-sky-950 '>About Us</h2>
          <p className='text-sm lg:text-lg text-sky-900 '>In today’s digital world, your domain is more than just a web address—it's the cornerstone of your online identity. At Domain Scout, we understand the critical importance of ensuring your domain operates smoothly and securely. That's why we've developed a comprehensive tool designed to give you the peace of mind you need.</p>
        </div>

        <div className=' flexCenterAllColumn gap-4 basis-1/2'>
          <img src={AboutUsImage} alt="about us" className='w-full object-contain ' />
        </div>
      </div>

      
    </section>
  )
}

export default AboutUs