import React from 'react';
import { FaCheckSquare } from "react-icons/fa";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
function About() {
    return (
        <div className="bg-slate-50 min-h-screen text-slate-800 antialiased font-sans">
            
            {/* abouthero section */}
            <div className="relative h-[400px] md:h-[500px] bg-slate-950 flex items-center justify-center overflow-hidden">
                {/* Overlay with subtle image backdrop */}
                <div className="absolute inset-0 bg-[url('/about-img.png')] bg-cover bg-center  mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/10 via-slate-900/10 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-4">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                        Corporate Profile
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                        About Us
                    </h1>
                </div>
            </div>

            {/* about us */}
            <div className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex lg:flex-row-reverse flex-col-reverse items-center gap-12 lg:gap-16">
                <div className="lg:w-1/2 space-y-6">
                    <h2 className='text-sm font-bold text-amber-600 tracking-widest uppercase'>ABOUT US</h2>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Your Trusted Partner in Storage & Transportation Solutions</h3>
                    <p className="text-slate-600 leading-relaxed">At our company, we specialize in providing reliable storage and transportation services tailored to meet the needs of businesses and individuals. With a commitment to safety, efficiency, and customer satisfaction, we ensure that your goods are handled with the utmost care from pickup to delivery. Our experienced team, modern fleet, and secure storage facilities enable us to deliver seamless logistics solutions that you can trust. Whether you need short-term storage or long-distance transportation, we are dedicated to providing timely, secure, and cost-effective services every step of the way.</p>
                    
                    <h1 className="text-lg font-bold text-amber-700 bg-amber-50 border border-amber-200/60 rounded-xl px-4 py-3 w-fit">
                        Owner : Kevin M Simpson
                    </h1>
                    
                    {/* <div>
                        <button className="bg-slate-900 hover:bg-slate-800 cursor-pointer text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition-all duration-200">
                            Know More
                        </button>
                    </div> */}
                </div>
                <div className="lg:w-1/2 w-full">
                    <img src="/aboutus.png" alt="about us" className="w-full h-[400px] lg:h-[450px] object-cover rounded-2xl shadow-xl border border-slate-200/60" />
                </div>
            </div>

            {/* section2 */}
            <div className="bg-slate-100/80 border-y border-slate-200/50 py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto rounded-none md:rounded-3xl lg:rounded-none">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Mission */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                           <BsRocketTakeoffFill className="text-2xl" /> Our Mission
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            Our mission is to provide safe, reliable, and efficient storage and
                            transportation solutions that help businesses and individuals move
                            their goods with confidence. We are committed to delivering exceptional
                            service, ensuring timely deliveries, maintaining the highest safety
                            standards, and building long-term relationships through trust,
                            professionalism, and customer satisfaction.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                            <TbBulbFilled className="text-2xl" /> Our Vision
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            Our vision is to be the most trusted and preferred storage and
                            transportation company, recognized for excellence, innovation, and
                            reliability. We strive to create a future where businesses and
                            individuals can rely on seamless logistics solutions that ensure
                            efficiency, safety, and sustainable growth.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 shadow-xl space-y-4 md:col-span-2 lg:col-span-1">
                        <div>
                            <h3 className="text-xs tracking-widest text-amber-400 font-bold uppercase">
                                Professional Services
                            </h3>
                            <h2 className="text-2xl font-bold tracking-tight mt-1 flex items-center gap-2">
                                <BiSupport className="text-2xl"/>24 Hours Support
                            </h2>
                        </div>

                        <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
                            <li className='flex items-center gap-3'><FaCheckSquare className='text-amber-400 shrink-0 text-base' /> Professional & Experienced Team</li>
                            <li className='flex items-center gap-3'><FaCheckSquare className='text-amber-400 shrink-0 text-base' /> 24/7 Customer Support</li>
                            <li className='flex items-center gap-3'><FaCheckSquare className='text-amber-400 shrink-0 text-base' /> Safe & Secure Operations</li>
                            <li className='flex items-center gap-3'><FaCheckSquare className='text-amber-400 shrink-0 text-base' /> Fast & Efficient Service</li>
                            <li className='flex items-center gap-3'><FaCheckSquare className='text-amber-400 shrink-0 text-base' /> Customer-Focused Approach</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* What We Provide Our Customers */}
            <div className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 tracking-tight mb-16">
                    What We Provide Our Customers
                </h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm text-center space-y-4 hover:shadow-md transition-shadow duration-200 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center p-4">
                            <img src="/Reliable-Transportation.png" alt="transportation" className="w-full h-full object-contain" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-bold text-slate-900">Reliable Transportation</h2>
                            <p className="text-slate-500 text-sm leading-relaxed">Safe and timely delivery of goods.</p>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm text-center space-y-4 hover:shadow-md transition-shadow duration-200 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center p-4">
                            <img src="/Secure-Storage.png" alt="storage" className="w-full h-full object-contain" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-bold text-slate-900">Secure Storage</h2>
                            <p className="text-slate-500 text-sm leading-relaxed">Well-maintained and protected warehousing solutions.</p>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm text-center space-y-4 hover:shadow-md transition-shadow duration-200 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center p-4">
                            <img src="/Efficient-Logistics.png" alt="logistics" className="w-full h-full object-contain" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-bold text-slate-900">Efficient Logistics</h2>
                            <p className="text-slate-500 text-sm leading-relaxed">Smooth supply chain and freight management.</p>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm text-center space-y-4 hover:shadow-md transition-shadow duration-200 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center p-4">
                            <img src="/Cost-Effective-Solutions.png" alt="cost-effective" className="w-full h-full object-contain" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-bold text-slate-900">Cost-Effective Solutions</h2>
                            <p className="text-slate-500 text-sm leading-relaxed">Quality services at competitive prices.</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default About;