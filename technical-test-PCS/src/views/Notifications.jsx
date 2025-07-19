import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { notif } from '../components/statics/constant';
import { useNavigate } from 'react-router-dom';


export default function Notifications() {

  const navigate = useNavigate();

  return (
    <div>
      <nav className='bg-white sticky top-0 shadow-[0px_10px_6px_-5px_rgba(0,_0,_0,_0.3)] flex flex-row p-6 gap-6 items-center'>
        <a className='text-xl cursor-pointer' onClick={()=>navigate(-1)}><FaArrowLeft/></a>
        <a className='text-xl font-bold text-[#ef2724]'>Notifications</a>
      </nav>

      <section className='pt-4'>
        {notif.map((items,idx)=>(
          <div className='flex flex-row hover:bg-blue-200 p-4 gap-4'>
            <div className='p-4 bg-gradient-to-r from-[#f82c17] to-[#c5105f] rounded-xl'>
              <img className='max-w-[50%] m-auto' src={items.icon}/>
            </div>
            <div >
              <div className='flex flex-row justify-between '>
                <a className='font-bold '>{items.title}</a>
                <a className='text-[#a0a0a0]'>{items.hari}</a>
              </div>
              <div className='pt-4'>
                <a>{items.content}</a>
              </div>
            </div>
          </div>
        ))}
        
      </section>
    </div>
  )
}
