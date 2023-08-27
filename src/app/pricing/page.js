"use client"; // This is a client component 👈🏽
import React, { useEffect } from "react";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import * as Unicons from "@iconscout/react-unicons";

const Navbar = dynamic(()=>import('../componants/Navbar'));
const Switcher = dynamic(()=>import('../componants/Switcher'));
const Footer = dynamic(()=>import('../componants/Footer'));
const GetInTuch = dynamic(()=> import('../componants/Get-in-tuch'));


export default function Pricing(){
    const pricingPlan = [
        {
            title:'Basic',
            time:19,
            Icon:Unicons.UilTrees,
            fearures:['Full Access','Source Files','Free Appointments','Enhanced Security']
        },
        {
            title:'Premium',
            time:39,
            Icon:Unicons.UilShield,
            fearures:['Full Access','Source Files','Free Appointments','Enhanced Security']
        },
        {
            title:'Business',
            time:99,
            Icon:Unicons.UilRocket,
            fearures:['Full Access','Source Files','Free Appointments','Enhanced Security']
        },

    ]
  
    return(
        <>
          <Navbar navClass="navbar-white" />
          <section
                style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Pricing Plans</h3>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[50px]">
                        {pricingPlan.map((item,index)=>{
                            const Icon = item.Icon
                            return(
                                <div className="rounded-md shadow dark:shadow-gray-700 hover:shadow-md dark:hover:shadow-gray-700 duration-500 ease-in-out" key={index}>
                            <div className="border-b dark:border-gray-800 p-6 text-center">
                                <div className="w-24 h-24 bg-green-600/5 text-green-600 flex items-center justify-center text-3xl rounded-full mx-auto">
                                  <Icon width={30} height={30}/>
                                </div>
                                <h3 className="text-2xl text-green-600 font-medium mt-4">{item.title}</h3>

                                <div className="flex justify-center mt-4">
                                    <span className="text-xl">$</span>
                                    <span className="text-3xl font-semibold">{item.time}</span>
                                    <span className="text-xl self-end">/month</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h5>Pricing Features:</h5>
                                <ul className="list-none">
                                {item.fearures.map((subitem, index) => (
                                     <li className="flex items-center my-1 text-slate-400 dark:text-slate-300"  key={index}>
                                            <Unicons.UilCheckCircle width="18px" className="text-lg text-green-600 me-1"/>
                                            <span>{subitem}</span>
                                     </li>
                                ))}
                                
                                </ul>
                                <Link href="#" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-md w-full mt-4">Get Started</Link>
                            </div>
                        </div>
                            )
                        })}
                        
                    </div>
                </div>

               <GetInTuch/>
            </section>
          
            <Footer />
            <Switcher />
        </>
    )
}