import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdPermPhoneMsg } from "react-icons/md";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Faq from './Faq';
function Home() {
    const navigate = useNavigate();
    return (
        <div className="bg-slate-50 min-h-screen text-slate-800 antialiased font-sans">

            {/* Hero Section */}
            <div className="relative min-h-[90vh] lg:min-h-screen bg-slate-900 flex items-center overflow-hidden">
                {/* Background Image Overlay with Gradients */}
                <div
                    className="absolute inset-0 bg-[url('/hero-img.png')] bg-cover bg-center mix-blend-overlay opacity-40"
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-linear-to-r from-slate-950/10 via-slate-900/10 to-transparent" />

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
                    <div className="max-w-3xl space-y-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 rounded-full border border-amber-400/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            Premium Logistics Infrastructure
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                            Smart Storage & <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-500">
                                Transport Enterprise
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-300 max-w-xl font-medium leading-relaxed">
                            We streamline your supply chain with precision tracking, secure warehousing, and rapid transit deployments.
                        </p>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <button className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-bold py-4 px-8 rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2" onClick={() => navigate('/contact')}>
                                Get Started Today<FaRegArrowAltCircleRight className='text-2xl' />
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-200 cursor-pointer flex items-center gap-2" onClick={() => navigate('/contact')}>
                                Contact Sales<MdPermPhoneMsg className='text-2xl' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* get your quote */}
            {/* 1. Full-width wrapper for the background image and border */}
            <div className="w-full bg-[url('/bg-quote.png')] bg-fixed bg-cover bg-center border-b-2 border-slate-950 py-16">

                {/* 2. Inner container that limits content width and centers it */}
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-center gap-12">

                    {/* Form Container */}
                    <div>
                        <form>
                            <div className="flex gap-10">
                                <input type="text" placeholder='Location' className='w-40 p-4 border border-slate-950 rounded-xl bg-slate-50/50 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors text-slate-800' />
                                <input type="text" placeholder='To Destination' className='w-40 p-4 border border-slate-950 rounded-xl bg-slate-50/50 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors text-slate-800' />
                                <input type="text" placeholder='Cargo/Persons' className='w-40 p-4 border border-slate-950 rounded-xl bg-slate-50/50 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors text-slate-800' />
                            </div>
                            <div className="flex gap-10 mt-5">
                                <input type="email" placeholder='email' className='w-40 p-4 border border-slate-950 rounded-xl bg-slate-50/50 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors text-slate-800' />
                                <input type="number" placeholder='Phone Number' className='w-40 p-4 border border-slate-950 rounded-xl bg-slate-50/50 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors text-slate-800' />
                                <input type="submit" value='Get Quote' className='w-40 p-4 border border-slate-950 rounded-xl text-white focus:outline-none bg-slate-950 focus:bg-white transition-colors cursor-pointer' />
                            </div>
                        </form>
                    </div>

                    {/* Text and Image Container */}
                    <div className="space-y-4 flex gap-4 max-w-xl">
                        <img src="/quote.png" alt="" className='h-32 mt-3 rounded-sm' />
                        <h3>
                            <span className="text-amber-600 font-bold">Get Your Free Quote Today!</span> <br />
                            Fill out the form to get your quote within the hour. We cover all routes possible. We guaranty safe and timley product delivery either for your personal travel or your products.
                        </h3>
                    </div>

                </div>
            </div>
            {/* About Us Section */}
            <div className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="space-y-2">
                            <p className="text-amber-600 font-bold text-sm uppercase tracking-widest">About Our Company</p>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                                Your Trusted Partner in Storage & Transportation Solutions
                            </h2>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            At our company, we specialize in providing reliable storage and transportation services tailored to meet the needs of businesses and individuals. With a commitment to safety, efficiency, and customer satisfaction, we ensure that your goods are handled with the utmost care from pickup to delivery.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Our experienced team, modern fleet, and secure storage facilities enable us to deliver seamless logistics solutions that you can trust. Whether you need short-term storage or long-distance transportation, we are dedicated to providing timely, secure, and cost-effective services every step of the way.
                        </p>
                        <div className="pt-2">
                            <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-200 cursor-pointer shadow-md flex items-center gap-2" onClick={() => navigate('/about')}>
                                Know More About Us <FaAngleDoubleRight className='text-xl' />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition duration-300" />
                            <img
                                src="/aboutus.png"
                                alt="Our modern warehouse facility"
                                className="relative w-full h-[450px] object-cover rounded-2xl shadow-xl border border-slate-200/60"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Value Props Section */}
            <div className="bg-slate-100/80 border-y border-slate-200/50 py-24">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
                        <p className="text-amber-600 font-bold text-sm uppercase tracking-widest">Professional Warehouse</p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Warehouse solutions built for every commercial need
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "QUALITY", highlight: "Guaranteed premium services", desc: "We utilize modern frameworks and inventory logic to keep operations seamless." },
                            { title: "FAST", highlight: "Careful & rapid execution", desc: "Velocity meets security. We move assets quickly without compromising protective standards." },
                            { title: "SAFE", highlight: "On-time dynamic delivery", desc: "Every parcel, container, or freight shipment stays locked under multi-tier custody." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-200/60 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <span className="text-xs font-bold text-amber-600 tracking-widest px-2.5 py-1 bg-amber-50 rounded-md border border-amber-200/40 inline-block">
                                        {item.title}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900">{item.highlight}</h3>
                                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                                <button className="mt-6 text-sm font-bold text-slate-900 hover:text-amber-600 inline-flex items-center gap-2 group cursor-pointer w-fit" onClick={() => navigate('/service')}>
                                    Read details
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Services */}
            <div className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
                    <p className="text-amber-600 font-bold text-sm uppercase tracking-widest">Our Offerings</p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Comprehensive Logistics Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { img: "/service1.png", label: "Short Trucks", desc: "Reliable short-distance transportation solutions." },
                        { img: "/service2.png", label: "Global Transport", desc: "Seamless international logistics and shipping." },
                        { img: "/service3.png", label: "Smart Warehouse", desc: "Advanced storage and inventory management." }
                    ].map((service, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl bg-slate-900 shadow-lg aspect-[4/5]">
                            <img
                                src={service.img}
                                alt={service.label}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
                            />
                            {/* Static overlay subtle gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                            {/* Text Content Positioning */}
                            <div className="absolute inset-x-0 bottom-0 p-8 transform transition-transform duration-300">
                                <h3 className="text-white text-2xl font-bold tracking-tight">
                                    {service.label}
                                </h3>
                                <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <span className="inline-flex items-center gap-1 font-bold text-amber-600 hover:text-amber-700 cursor-pointer transition-colors px-4 py-2 hover:bg-amber-50 rounded-lg" onClick={() => navigate('/service')}>
                        View All Operational Services Coverages <span>→</span>
                    </span>
                </div>
            </div>

            {/* Logistics Feature Section */}
            <div className="bg-slate-900 text-white py-24 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <img
                                src="/ontime.png"
                                alt="On-time secure shipping truck dispatch"
                                className="w-full h-[450px] object-cover rounded-2xl shadow-2xl opacity-90 border border-slate-800"
                            />
                        </div>

                        <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
                            <div className="space-y-2">
                                <span className="text-xs font-bold text-amber-400 tracking-widest uppercase block">Guaranteed Assurance</span>
                                <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight'>
                                    Safe and on-time transit execution for your high-value inventory
                                </h2>
                            </div>

                            <p className="text-slate-400 leading-relaxed">
                                We are committed to providing reliable, secure, and timely transportation solutions for your valuable goods. Our experienced team ensures every shipment is handled with care, tracked throughout the journey, and delivered safely to its destination.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                {[
                                    { title: "On-Time Delivery", desc: "Reliable scheduling matrices." },
                                    { title: "Safe Transportation", desc: "Secure multi-tier packaging protection." },
                                    { title: "Real-Time Tracking", desc: "Live dashboard asset mapping." },
                                    { title: "Experienced Team", desc: "Veterans of global routing pipelines." },
                                    { title: "Nationwide Coverage", desc: "Robust highway & hub networks." },
                                    { title: "Customer Support", desc: "Dedicated 24/7 communications desk." }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-amber-400 font-bold shrink-0 mt-0.5">✓</span>
                                        <div>
                                            <span className="font-semibold text-slate-200 block text-sm">{item.title}</span>
                                            <span className="text-xs text-slate-400">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Faq />
        </div>
    );
}

export default Home;