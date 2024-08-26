import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import{Pagination} from "swiper/modules";
import{Autoplay} from "swiper/modules";



const testimonialData = [
  {
    name:"Sarah T",
    title:"E-commerce Business Owner",
    desc:"Domain Scout has been a game-changer for my online store. Their comprehensive DNS record checks have ensured that my site is always accessible and performing at its best. I’ve noticed a significant decrease in downtime since I started using their tool. Highly recommended!",
    review:"5"
  },

  {
    name:"David M.",
    title:"Tech Startup Founder",
    desc:"With Domain Scout’s accurate nameserver configuration checks, I’ve avoided multiple potential disruptions. Their meticulous examination of my settings means I can focus on growing my business without worrying about unexpected site outages. It’s a relief to have such a reliable service!",
    review:"5"
  },

  {
    name:"Linda G.",
    title:"Digital Marketer",
    desc:"The robust SSL certificate validation provided by Domain Scout gives me peace of mind knowing my clients' data is always secure. Their up-to-date encryption technology ensures that my website meets the latest security standards, which is crucial for maintaining trust with my audience.",
    review:"5"
  },

  {
    name:"Mike B",
    title:"Freelance Web Developer",
    desc:"Domain Scout’s ongoing monitoring and performance checks have become an essential part of my toolkit. Their service helps me stay ahead of potential issues and keeps my clients’ domains running smoothly. It’s an invaluable resource for anyone who takes their online presence seriously.",
    review:"5"
  },

  {
    name:"Emily R.",
    title:"Nonprofit Organization Director",
    desc:"Our domain is crucial to our online identity, and Domain Scout has significantly enhanced our digital presence. Their comprehensive checks and regular updates ensure our site operates seamlessly and securely. It’s reassuring to know that our online reputation is in good hands.",
    review:"5"
  },

  {
    name:"Sarah T",
    title:"E-commerce Business Owner",
    desc:"Domain Scout has been a game-changer for my online store. Their comprehensive DNS record checks have ensured that my site is always accessible and performing at its best. I’ve noticed a significant decrease in downtime since I started using their tool. Highly recommended!",
    review:"5"
  },
  

  
];


const Testimonials = () => {
  return (
    <section className='flexCenterAllColumn generalContainer gap-11 '>
        <div className=' flexCenterAllColumn gap-4  pb-4 '>
          <h2 className='main-title text-sky-950 '>What Our Client Says</h2>
        </div>
      <Swiper
        className=" w-full "
        slidesPerView={1}
        breakpoints={{
          640:{slidesPerView:1},
          1280:{slidesPerView:3},
          1440:{slidesPerView:3},     
        }}
        spaceBetween={15}
          autoplay={{
            "delay": 8000,
            "disableOnInteraction": false
          }}
            modules={[Autoplay, Pagination]}
            pagination={{clickable:true}}
      >
        {testimonialData.map((item,index) => (
          <SwiperSlide key={index} className='relative pb-11'>
          <div className='glass-box min-h-[250px] cursor-grab'>              
            <p className='text-sm md:text-base text-sky-900'>{item.desc}</p>
            <h4 className='whyus-title text-sky-950'>{item.name}</h4>
            <p className='text-xs text-sky-900'>{item.title}</p>
          </div>
          </SwiperSlide>
        ))}

        
            
            
      </Swiper>
    </section>
  )
}

export default Testimonials