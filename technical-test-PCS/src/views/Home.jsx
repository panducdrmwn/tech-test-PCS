import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCircleUser,  } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { TbClockHour8, TbClockCheck, TbClockHour5, TbSettingsFilled } from "react-icons/tb";
import { BiSolidCalendarCheck } from "react-icons/bi"
import { VscSignOut } from "react-icons/vsc";
import { HiDocumentText } from "react-icons/hi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { users, news } from '../components/statics/constant';
import profpic from '../assets/1.png'
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiperStyle.css';



export default function Home() {
    const navigate = useNavigate();

  return (
    <>
    <div className='p-8'>
        <div className='mb-4 flex justify-between items-center'>
            <h1 className='text-3xl font-bold text-[#ef2724]'>KerjaYuk!</h1>
            <a className='text-4xl hover:cursor-pointer' onClick={()=>navigate('/notification')}><IoIosNotificationsOutline /></a>
        </div>
  
        <a className='object-fill text-2xl text-left ml-0'>Hi, Good Morning!</a>
       
        <div className=' text-white my-4 p-10 rounded-xl bg-gradient-to-r from-[#f82c17] to-[#c5105f]'>
            <div className='flex flex-row '>
                <div className='w-[20%]'>
                <div className="border border-white/[.2] rounded-full bg-gray-600 lg:w-22 lg:h-22 w-12 h-12 flex justify-center items-center">
                        <img className='max-w-full' src={profpic} alt='online'/>
                        </div>
                </div>
                <div className='w-[80%] flex flex-row justify-between'>
                    <div className='flex flex-col items-start'>
                        <a className='font-bold text-2xl '>Tabay</a>
                        <a className='italic'>UI/UX Designer</a>
                    </div>
                    <div className='flex flex-col items-end'>
                        <a>Member since</a>
                        <a className='font-bold text-xl'>01 Juni 2025</a>
                    </div>
                </div>
            </div>
            <div className='pt-4 flex flex-col items-start'>
                    <a>Location</a>
                    <a className='font-bold'>Kantor Sahid</a>
            </div>
        </div> 

        <a className='text-2xl font-bold text-left ml-0'>Today's activity</a>

        <div className='my-4 max-w-[80%] m-auto flex flex-row justify-between'>
            <div className='flex flex-col items-center'>
                <a className='text-5xl text-[#ef2724]'><TbClockHour8/></a>
                <a className='font-bold'>08.30</a>
                <a>Check In</a>
            </div>
            <div  className='flex flex-col items-center'>
            <a className='text-5xl text-[#ef2724]'><TbClockCheck /></a>
                <a className='font-bold text-[#ef2724]'>03.30.00</a>
                <a>Working hours</a>
            </div>
            <div  className='flex flex-col items-center'>
            <a className='text-5xl text-[#ef2724]'><TbClockHour5/></a>
                <a className='font-bold'>--.--</a>
                <a>Check Out</a>
            </div>
        </div> 

        <a className='text-2xl font-bold'>PCS News</a>

        <div className='my-4'>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {news.map((items,index)=>(
                   <SwiperSlide>
                   <div key={index} className='p-5 my-2 rounded-lg shadow-[0px_5px_15px_-4px_rgba(0,_0,_0,_0.7)] w-full'>
                       <div className='flex flex-row justify-between'>
                           <div className='flex flex-row gap-2 items-center'>
                           <div className="border border-white/[.2] rounded-full bg-gray-600 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                               <img className='max-w-full' src={items.icon} alt='online'/>
                           </div>
                               <a className='font-bold text-[#ef2724]'>{items.name}</a>
                           </div>
                           <div className='flex flex-col items-end'>
                               <a>{items.hari}</a>
                               <a>{items.tanggal}</a>
                           </div>
                       </div>
                       <div className='pt-2 flex flex-col'>
                       {items.kalimat.map((words,idx)=>(       
                           <a key={idx}>{words}</a>
                       ))}
                       </div>
                   </div> 
                   </SwiperSlide>

            ))}
               
            
            </Swiper>
        </div> 

        <a className='text-2xl font-bold'>Online</a>

        <div className='my-4 '>
            <div className="rounded-xl shadow-[0px_5px_15px_-4px_rgba(0,_0,_0,_0.7)] w-full flex items-center p-5">
                    {users.map((items, index) => (
                        <div>
                        <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-gray-600 lg:w-18 lg:h-18 w-12 h-12 flex justify-center items-center"
                        style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                        }}
                        >
                        <img className='max-w-full' src={items.icon} alt='online'/>
                        </div>
                        <div className='flex flex-col p-3'
                        style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                        }}>
                        <a className='font-bold'>{items.name}</a>
                        <a className='text-sm'>{items.location}</a>
                        </div>
                        </div>
                    ))}
            </div> 
        </div>

      
    </div>

    <div className=' z-[100] text-[#a0a0a0] py-2 px-10 sticky bottom-0 shadow-[0px_-7px_6px_0px_rgba(50,_50,_93,_0.25)] bg-white flex flex-row justify-between [&>*]:hover:text-[#f82c17]'>
        <div className='flex flex-col items-center'>
            <a className='text-2xl'><FaHome /></a>
            <a>Home</a>
        </div>
        <div className='flex flex-col items-center '>
            <a className='text-2xl'><BiSolidCalendarCheck/></a>
            <a>Attendance</a>
        </div>
        <div className='flex flex-col items-center'>
            
            <div className="absolute -top-9  border border-white/[.2] rounded-full bg-[#f82c17] lg:w-18 lg:h-18 w-12 h-12 flex justify-center items-center">
                <a className='text-2xl'><VscSignOut /></a>
            </div>
            <a>&#8205;</a>
            <a>Sign Out</a>
        </div>
        <div className='flex flex-col items-center'>
            <a className='text-2xl'><HiDocumentText /></a>
            <a>Form</a>
            </div>
        <div className='flex flex-col items-center'>
            <a className='text-2xl'><TbSettingsFilled /></a>
            <a>Setting</a>
        </div>
    </div>
 </>
  )
}
