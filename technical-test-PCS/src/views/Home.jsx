import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import ava1 from '../assets/ava5.svg'
import { FaHome } from "react-icons/fa";
import { TbClockHour8, TbClockCheck, TbClockHour5, TbSettingsFilled } from "react-icons/tb";
import { BiSolidCalendarCheck } from "react-icons/bi"
import { VscSignOut } from "react-icons/vsc";
import { HiDocumentText } from "react-icons/hi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { users, news } from '../components/statics/constant';
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
  
        <a className='object-fill lg:text-2xl text-xl text-left ml-0'>Hi, Good Morning!</a>
       
        <div className=' text-white my-4 p-5 rounded-xl bg-gradient-to-r from-[#f82c17] to-[#c5105f]'>
            <div className='flex flex-row '>
                <div className='w-[20%]'>
                    <div className=" rounded-full lg:w-22 lg:h-22 w-12 h-12 flex justify-center items-center">
                        <img className='transform' src={ava1} alt='online'/>
                    </div>
                </div>
                <div className='w-[80%] flex flex-row justify-between'>
                    <div className='flex flex-col items-start'>
                        <a className='font-bold lg:text-2xl text-xl'>Tabay</a>
                        <a className='italic lg:text-base text-sm'>UI/UX Designer</a>
                    </div>
                    <div className='flex flex-col items-end'>
                        <a className='lg:text-base text-sm'>Member since</a>
                        <a className='font-bold lg:text-xl text-lg'>01 Juni 2025</a>
                    </div>
                </div>
            </div>
            <div className='pt-4 flex flex-col items-start'>
                    <a>Location</a>
                    <a className='font-bold'>Kantor Sahid</a>
            </div>
        </div> 

        <a className='lg:text-2xl text-xl font-bold text-left ml-0'>Today's activity</a>

        <div className='my-4 lg:max-w-[80%] m-auto flex flex-row justify-between'>
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

        <a className='lg:text-2xl text-xl font-bold'>PCS News</a>

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
                           <div className="border border-white/[.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                               <img className='max-w-full' src={items.icon} alt='online'/>
                           </div>
                               <a className='md:text-base text-sm font-bold text-[#ef2724]'>{items.name}</a>
                           </div>
                           <div className='flex flex-col items-end'>
                               <a className='lg:text-base text-sm'>{items.hari}</a>
                               <a className='md:text-base text-xs'>{items.tanggal}</a>
                           </div>
                       </div>
                       <div className='pt-2 flex flex-col'>
                       {items.kalimat.map((words,idx)=>(       
                           <a key={idx} className='lg:text-base text-sm'>{words}</a>
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
                        <div className='py-6'>
                        <div
                        key={index}
                        className="rounded-full lg:w-18 lg:h-18 w-12 h-12 flex flex-col gap-1 justify-center items-center"
                        style={{
                            transform: `translateX(-${9 * index + 2}px)`,
                        }}
                        >
                            <img className='max-w-full' src={items.icon} alt='online'/>
                            <a className='lg:text-base text-sm font-bold'>{items.name}</a>
                            <a className='lg:text-base text-sm'>{items.location}</a>
                        </div>
                       
                        </div>
                    ))}
            </div> 
        </div>

      
    </div>

    <div className='text-[#a0a0a0] py-2 sticky lg:px-10 px-4  bottom-0 shadow-[0px_-7px_6px_0px_rgba(50,_50,_93,_0.25)] bg-white z-10 flex flex-row justify-between [&>*]:hover:text-[#f82c17]'>
        <div className='flex flex-col items-center'>
            <a className='text-2xl'><FaHome /></a>
            <a className='lg:text-base text-sm'>Home</a>
        </div>
        <div className='flex flex-col items-center '>
            <a className='text-2xl'><BiSolidCalendarCheck/></a>
            <a className='lg:text-base text-sm'>Attendance</a>
        </div>
        <div className='flex flex-col items-center'>
            
            <div className="absolute -top-9  border border-white/[.2] rounded-full bg-[#f82c17] lg:w-18 lg:h-18 w-12 h-12 flex justify-center items-center">
                <a className='text-2xl'><VscSignOut /></a>
            </div>
            <a className='lg:text-base text-sm'>&#8205;</a>
            <a className='lg:text-base text-sm'>Sign Out</a>
        </div>
        <div className='flex flex-col items-center'>
            <a className='text-2xl'><HiDocumentText /></a>
            <a className='lg:text-base text-sm'>Form</a>
            </div>
        <div className='flex flex-col items-center'>
            <a className='text-2xl'><TbSettingsFilled /></a>
            <a className='lg:text-base text-sm'>Setting</a>
        </div>
    </div>
 </>
  )
}
