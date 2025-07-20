import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { notif } from '../components/statics/constant';
import { useNavigate } from 'react-router-dom';


export default function Notifications() {

  const navigate = useNavigate();

  return (
    <div>
      <nav className='z-100 bg-white sticky top-0 shadow-[0px_10px_6px_-5px_rgba(0,_0,_0,_0.3)] flex flex-row p-6 gap-6 items-center'>
        <a className='text-xl cursor-pointer' onClick={()=>navigate(-1)}><FaArrowLeft/></a>
        <a className='text-xl font-bold text-[#ef2724]'>Notifications</a>
      </nav>

      <section className='pt-4'>
        {notif.map((items,idx)=>(
          <div key={idx} className='flex flex-row hover:bg-blue-200 p-4 gap-4'>
            <div className='relative p-4 w-[40%] h-[20%]  bg-gradient-to-r from-[#f82c17] to-[#c5105f] rounded-xl  '>
              <img className='  m-auto' src={items.icon}/>
              <img className='w-[30%] absolute lg:right-[-20px] right-[-10px] lg:bottom-[-20px] bottom-[-10px]'   src={items.status}/>
            </div>
            <div >
              <div className='flex flex-row justify-between '>
                <a className='font-bold lg:text-xl text-lg'>{items.title}</a>
                <a className='text-[#a0a0a0]'>{items.hari}</a>
              </div>
              <div className='lg:pt-4 pt-1'>
                <a className='lg:text-base text-sm'>{items.content}</a>
              </div>
            </div>
          </div>
        ))}
        
      </section>
    </div>
  )
}
