import React from 'react';
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const PropagationStatus = ({propagationData}) => {
  const propagationLocation = propagationData?.response?.server || [];


  return (
    <div className='p-5 bg-slate-100/50 shadow-lg border-2 w-full rounded-md backdrop-blur-xl '>
      <div>
        <h4 className='item-title p-2'>Propagation Data:</h4>
      </div>

      {/* <div className='flexCenterBetween '>
        <div className='basis-2/3 min-h-[40px] p-2 font-semibold'>Location</div>
        <div className='basis-1/3 min-h-[40px] p-2 font-semibold '>Status</div>
        <div className='basis-1/3 min-h-[40px] p-2 font-semibold'>Value</div>
      </div> */}

      <div>
        {propagationLocation.map((item,index)=>(
        <div key={index} className='flex ' >
          <div className='basis-2/3  min-h-[40px] p-2'>{item.location}</div>
          <div className='basis-1/3  min-h-[40px] p-2 text-xl'>
            {item.resultstatus === 'ok' ? <FaCheck className='text-teal-500'/> : <IoClose  className='text-red-500'/>}
          </div>
          <div className='basis-1/3  min-h-[40px] p-2 flexCenterAll'>{item.resultvalue}</div>
        </div>
        ))}
      </div>

    </div>
  )
}

export default PropagationStatus