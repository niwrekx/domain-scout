import React from 'react'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbWebhook } from "react-icons/tb";
import { MdOutlineDns } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { BsBookmarkCheckFill } from "react-icons/bs";


const whyChooseUsData = [
  {
    title:"Ensure Online Accessibility",
    desc:"Our comprehensive DNS record checks ensure that your website remains accessible and performs optimally.  ",
    icon: <BsBookmarkCheckFill />
  },
  {
    title:"Avoid Disruptions with Accurate Nameserver Configurations",
    desc:"Domain Scout meticulously examines these settings, allowing you to avoid disruptions and maintain a seamless online presence. ",
    icon: <BsBookmarkCheckFill />
  },
  {
    title:"Secure Your Site with Robust SSL Certificate Validation",
    desc:"We check the validity of your SSL certificates and ensure they are configured correctly, safeguarding your site with the latest encryption standards. ",
    icon: <BsBookmarkCheckFill />
  },
  {
    title:"Gain Confidence in Your Domain’s Performance and Security",
    desc:"With Domain Scout, you can rest assured that your domain is performing optimally and is secure from potential threats.",
    icon: <BsBookmarkCheckFill />
  },
  {
    title:"Stay Updated with Regular Checks",
    desc:"Domain Scout offers ongoing monitoring, helping you stay ahead of potential issues and keep your domain in top shape. ",
    icon: <BsBookmarkCheckFill />
  },
  {
    title:"Enhance Your Online Identity",
    desc:"Your domain is a key part of your online identity. Domain Scout ensures that it functions smoothly and securely, enhancing your overall digital presence and reputation.",
    icon: <BsBookmarkCheckFill />
  },

  
];

const Benefits = () => {
  return (
    <section className='flexCenterAllColumn generalContainer gap-11 '>
      <div className=' '>
          <div className=' flexCenterAllColumn gap-4 basis-1/2 pb-4 '>
            <h2 className='main-title text-sky-950 '>Our Benefits</h2>
         
          </div>
          <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {whyChooseUsData.map((item,index) => (
              <div key={index} className='glass-box min-h-[280px]'>
                <div className='text-4xl pb-3 text-sky-900'>{item.icon}</div>
                <h4 className='whyus-title text-sky-950'>{item.title}</h4>
                <p className='text-sm md:text-base text-sky-900'>{item.desc}</p>
              </div>
            ))}
          </div>
      </div>
  </section>
  )
}

export default Benefits