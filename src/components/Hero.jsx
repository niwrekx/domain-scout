import React, { useEffect, useState } from 'react'
import { nameServerLookup } from '../services/nameServerLookup'
import { dnsPropagationLookup } from '../services/dnsPropagationLookup';
import { useNavigate } from 'react-router-dom';


import { whoisLookup } from '../services/whoisLookup';
import { sslCertLookup } from '../services/sslCertLookup';
import { sanitizeDomain } from '../utils/sanitizeDomain';
import { resultsLink } from '../constants/navUrl';
import { useDomainContext } from '../context/DomainContext';
import SearchForm from './SearchForm';



const Hero = () => {
  const [domain, setDomain] = useState('');
  const {setDomainData} = useDomainContext();

//   const [isModalOpen, setIsModalOpen] = useState(false);


  const navigate = useNavigate();

  
    const handleSubmit = async(e) => {
        e.preventDefault();
        const filteredDomain = sanitizeDomain(domain);


        try{
            const [nameserverData,whoisData,sslCertData,propagationData] = await Promise.all([
                nameServerLookup(filteredDomain),
                whoisLookup(filteredDomain),
                sslCertLookup(filteredDomain),
                dnsPropagationLookup(filteredDomain)
            ]);

            setDomainData({domain:filteredDomain,nameserverData,whoisData,sslCertData,propagationData})

            navigate(`${resultsLink}/${encodeURIComponent(filteredDomain)}`)

        }catch(error){
            console.error(error.message);
        }
    }


    const handleCloseModal = () => {
        setIsModalOpen(prevState => !prevState);
    }



return (
  <section className='flexCenterAllColumn generalContainer gap-11 min-h-[calc(100vh-130px)] '>
      <div className='max-w-5xl text-center flexCenterAllColumn gap-4 '>
          <h1 className='main-title text-sky-950 '>Check Your Domain Name</h1>
          <p className='text-sm lg:text-lg text-sky-900 '>Ensure your online presence is secure and reliable with Domain Scout. Our tool provides comprehensive checks for DNS records, nameserver configurations, and SSL certificates, giving you confidence in your domain's performance and security.</p>
      </div>
  
      <div className='w-full md:max-w-[800px] '> 
          <SearchForm 
            domain={domain}
            setDomain={setDomain}
            handleSubmit={handleSubmit}
          />
      </div> 
  </section> 
  )
}

export default Hero