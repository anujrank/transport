import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function Footer() {
    const navigate = useNavigate();
    return (
        <div className='bg-slate-950 text-slate-200 pt-16 pb-8 px-6 sm:px-12 md:px-20 lg:px-40 space-y-12 border-t border-slate-900'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
                <div>
                    <ul className='space-y-4'>
                        <h1 className='text-lg font-bold text-white pb-2'>Quick Links</h1>
                        <li className="text-slate-400 hover:text-amber-500 transition-colors duration-200 cursor-pointer text-sm sm:text-base" onClick={() => navigate('/')}>
                            Home
                        </li>
                        <li className="text-slate-400 hover:text-amber-500 transition-colors duration-200 cursor-pointer text-sm sm:text-base" onClick={() => navigate('/about')}>
                            About Us
                        </li>
                        <li className="text-slate-400 hover:text-amber-500 transition-colors duration-200 cursor-pointer text-sm sm:text-base" onClick={() => navigate('/service')}>
                            Services
                        </li>
                        <li className="text-slate-400 hover:text-amber-500 transition-colors duration-200 cursor-pointer text-sm sm:text-base" onClick={() => navigate('/contact')}>
                            Contact
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-4'>
                        <h1 className='text-lg font-bold text-white'>Our Services</h1>
                        <li className="text-slate-400 hover:text-amber-500 transition-colors duration-200 cursor-pointer text-sm sm:text-base" onClick={() => navigate('/service')}>Storage</li>
                        <li className="text-slate-400 hover:text-amber-500 transition-colors duration-200 cursor-pointer text-sm sm:text-base" onClick={() => navigate('/service')}>Logistic</li>
                        <li className="text-slate-400 hover:text-amber-500 transition-colors duration-200 cursor-pointer text-sm sm:text-base" onClick={() => navigate('/service')}>Transportation</li>
                        <li className="text-slate-400 hover:text-amber-500 transition-colors duration-200 cursor-pointer text-sm sm:text-base" onClick={() => navigate('/service')}>Tow Service</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-4'>
                        <h1 className='text-lg font-bold text-white'>Contact Information</h1>
                        
                        <li className="text-slate-400 text-sm sm:text-base leading-relaxed flex items-start gap-3">
                            <IoLocation className="text-amber-500 text-xl mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-slate-200">Address :: </span>
                                <span>3215 lancer drive Powder Springs ga 30127</span>
                            </div>
                        </li>

                        <li className="text-slate-400 text-sm sm:text-base flex items-center gap-3">
                            <FaPhoneAlt className="text-amber-500 text-base flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-slate-200">Phone :: </span>
                                <a href="tel:4042039738" className="hover:text-blue-400 transition-colors">4042039738</a>
                            </div>
                        </li>

                        <li className="text-slate-400 text-sm sm:text-base flex items-center gap-3">
                            <MdOutlineMail className="text-amber-500 text-lg flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-slate-200">Email :: </span>
                                <a href="mailto:kevinsimp88@aol.com" className="hover:text-blue-400 transition-colors break-all">kevinsimp88@aol.com</a>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            
            <div className="pt-6 border-t border-slate-800 max-w-7xl mx-auto">
                <div className="w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

                        <p className="text-xs sm:text-sm text-slate-500 text-center lg:text-left">
                            © 2026 Swift Logistics & Storage. All Rights Reserved.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0 text-xs sm:text-sm text-slate-500">
                            <a href="#" className="hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </a>

                            <span className="hidden sm:inline mx-4 h-4 border-l border-slate-800"></span>

                            <a href="#" className="hover:text-white transition-colors duration-200">
                                Terms & Conditions
                            </a>

                            <span className="hidden sm:inline mx-4 h-4 border-l border-slate-800"></span>

                            <a href="#" className="hover:text-white transition-colors duration-200">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;