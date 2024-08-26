import React,{useEffect, useState} from 'react'
import { useLocation, useParams, useNavigate,Link } from 'react-router-dom';
import DomainInformation from '../components/DomainInformation'
import PropagationStatus from '../components/PropagationStatus'
import Spinner from '../components/Spinner';

import { useDomainContext } from '../context/DomainContext';




const ResultsPage = () => {

  const {domainData} = useDomainContext();
  const navigate = useNavigate();

  const {domain, nameserverData, whoisData,sslCertData,propagationData} = domainData;



  


  if (!domain || !nameserverData || !whoisData || !sslCertData ||!propagationData) {
    return <div><Spinner /></div>;
  }
 

  return (
    <section className=' generalContainer flexStartCenterCol gap-11 min-h-[calc(100vh-130px)] '>
        <div className='flexCenterAllColumn gap-3 w-full '>
            <div className='flexCenterBetween w-full'>
                <h1 className='item-title text-slate-50 '>Domain Information for: {domain}</h1>
                <Link className='cta-btn-white' to="/" >Search Again</Link>
            </div>
   
            

            <div className='w-full h-full flexCenterAllColumn gap-3 md:flex-row md:items-start'>
              <div className=' md:basis-1/2 w-full md:max-w-[600px]'>
                <DomainInformation 
                    nameserverData={nameserverData} 
                    whoisData={whoisData}
                    sslCertData={sslCertData} 
                />            
              </div>

              <div className=' md:basis-1/2'>
                <PropagationStatus 
                    propagationData={propagationData}
                />
              </div>
            </div>  


   

         

        </div>

    </section>
  )
}

export default ResultsPage