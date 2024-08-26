import React from 'react'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbWebhook } from "react-icons/tb";
import { MdOutlineDns } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";


const whyChooseUsData = [
  {
    title:"Comprehensive DNS Record Checks",
    desc:"Our tool meticulously verifies your DNS records to ensure your website is always accessible and running efficiently. ",
    icon: <MdOutlineFormatListBulleted />
  },
  {
    title:"Accurate Nameserver Configuration",
    desc:"We thoroughly examines your nameserver settings, helping you avoid disruptions and keep your site online without interruptions. ",
    icon: <TbWebhook />
  },
  {
    title:"Robust SSL Certificate Validation",
    desc:"We check your SSL certificates to make sure they are valid and up-to-date, safeguarding your site with the latest encryption technology. ",
    icon: <IoShieldCheckmarkOutline />
  },
];


const WhyChooseUs = () => {
  return (
    <section className='flexCenterAllColumn generalContainer gap-11  '>
      <div className=' flexCenterAllColumn lg:flex-row gap-4 '>
        {whyChooseUsData.map((item,index) => (
          <div key={index} className='glass-box'>
            <div className='text-4xl pb-3 text-sky-900'>{item.icon}</div>
            <h4 className='whyus-title text-sky-950'>{item.title}</h4>
            <p className='text-sm md:text-base text-sky-900'>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs