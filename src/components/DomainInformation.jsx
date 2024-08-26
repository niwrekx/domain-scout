import React,{useState,useEffect} from 'react';
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const DomainInformation = ({nameserverData,whoisData,sslCertData}) => {
  

  const domainName = whoisData?.idnName || [];
  const registrarName = whoisData?.registrar?.name || [];
  const expiresOn = whoisData?.expires || '';
  const createdOn = whoisData?.changed || '';
  const updatedOn = whoisData?.created || '';
  const status = whoisData?.status || [];
  const mxRecords = nameserverData?.MX || [];
  const aRecord = nameserverData?.A || [];
  const nsRecord = nameserverData?.NS || [];
  const txtRecord = nameserverData?.TXT || [];
  const commonName = sslCertData?.issuer?.CN || '';
  const organization = sslCertData?.issuer?.O || '';
  const sslValid = sslCertData?.valid || '';
  const validFromSsl = sslCertData?.valid_from || '';
  const validToSsl = sslCertData?.valid_to || '';
  



 
  const formatDate = (dateString) => {
    // Check if dateString is provided and is not empty
    if (!dateString) return '';
    
    // Attempt to create a Date object
    const date = new Date(dateString);
    
    // Check if the Date object is valid
    if (isNaN(date.getTime())) return 'NA';

    // Options for formatting the date
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };
    
    // Return the formatted date if valid
    return date.toLocaleDateString('en-US', options);
  };


  const extractStatusText = (statusUrl) => {
    // Check if statusUrl is a string
    if (typeof statusUrl !== 'string') return '';
    
    // Split the string by space and return the first part
    return statusUrl.split(' ')[0] ;
  };





  return (   
    <div className='p-5 bg-slate-100/50 shadow-lg border-2 w-full rounded-md backdrop-blur-xl '>
      <div className=''>
        <h4 className='item-title'>Domain Information:</h4>
      </div>

      <div className='flex'>
        <div className='basis-1/3'>Domain Name:</div>
        <div className='basis-2/3'>{domainName}</div>
      </div>

      <div className='flex'>
        <div className='basis-1/3'>Registrar:</div>
        <div className='basis-2/3'>{registrarName}</div>
      </div>

      <div className='flex'>
        <div className='basis-1/3'>Registered On:</div>
        <div className='basis-2/3'>{formatDate(createdOn)}</div>
      </div>

      <div className='flex'>
        <div className='basis-1/3'>Expires On:</div>
        <div className='basis-2/3'>{formatDate(expiresOn)}</div>
      </div>

      <div className='flex'>
        <div className='basis-1/3'>Updated On:</div>
        <div className='basis-2/3'>{formatDate(updatedOn)}</div>
      </div>


      <div className='flex'>
        <div className='basis-1/3'>Status:</div>
        <div className='basis-2/3'>

          {/* {status.length > 0 ? (
            status.map((item,index) => (
              <div key={index}>
                  {extractStatusText(item)}
              </div>
            ))
          ) : (
            <div >
              {extractStatusText(status)}
            </div>
          )} */}

            <div >
              {extractStatusText(status)}
            </div>

          

              
            

  
        </div>
      </div>

      
      <div className='flex '>
        <div className='basis-1/3'>A Record:</div>
        <div className='basis-2/3 '>

          {aRecord.length > 0 ?          
          aRecord.map((item,index) => (
            <div key={index}>{item}</div>
          ))
          :  {aRecord}
          }
        </div>
      </div>


      <div className='flex flex-col md:flex-row'>
        <div className='basis-1/3'>MX Records:</div>
        <div className='basis-2/3'>
          {mxRecords.map((item, index) => (
            <div key={index}>
              {item.exchange}
            </div>
          ))}
        </div>
      </div>


      <div className='flex'>
        <div className='basis-1/3'>NS Records:</div>
        <div className='basis-2/3'>
          {nsRecord.map((item,index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>


      <div className='flex '>
        <div className='basis-1/3'>TXT Records:</div>
        <div className='break-all text-wrap basis-2/3'>
          {txtRecord}
        </div>
      </div>

      <div className='pt-5'>
        <h4 className='item-title'>SSL Information:</h4>
      </div>

      <div className='flex'>
        <div className='basis-1/3'>Common Name:</div>
          <div className='basis-2/3'>
            {commonName }
          </div>
      </div>

      <div className='flex'>
        <div className='basis-1/3'>Organization:</div>
          <div className='basis-2/3'>
            {organization  }
          </div>
      </div>

      <div className='flex'>
        <div className='basis-1/3'>Valid:</div>
          <div className='basis-2/3'>
            {sslValid === true ? <FaCheck className='text-teal-500' /> : sslValid===false ? <IoClose className='text-red-500' /> : null }
          </div>
      </div>

      <div className='flex'>
        <div className='basis-1/3'>Valid From:</div>
          <div>
            {extractStatusText(validFromSsl) }
          </div>
      </div>

      <div className='flex'>
        <div className='basis-1/3'>Valid Until:</div>
          <div>
            {extractStatusText(validToSsl) }
          </div>
      </div>

      
      





  
    
    </div>

  )
}

export default DomainInformation