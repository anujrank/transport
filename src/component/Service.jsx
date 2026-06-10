import React from 'react'
import { useNavigate } from 'react-router-dom';
function Service() {
    const navigate = useNavigate();
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased font-sans">
        {/* hero section */}
        <div>
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-blue-950 flex items-center justify-center overflow-hidden">

                {/* Blue Tint Overlay over the Background Image */}
                <div className="absolute inset-0 bg-[url('/service-img.png')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/10 via-slate-900/10 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-4">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                        What We Do
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                        Our Services
                    </h1>
                    <h2 className="text-white text-xl font-semibold">Efficient, Safe, and Dependable Services</h2>
                    <p className="text-white text-lg">We offer customized logistics, transport, and storage solutions to ensure seamless operations and peace of mind.</p>
                </div>

            </div>
        </div>

        {/* Services Section */}
        <div className="py-24 px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            
            {/* Storage Card */}
            <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-200 space-y-4 p-4">
                <img src="/service4.png" alt="Storage services" className="w-full h-64 object-cover rounded-xl" />
                <div className="px-2 space-y-2">
                    <h1 className="text-xl font-bold text-slate-900">Storage</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Secure and flexible storage solutions designed to keep your goods safe, organized, and protected. Our facilities offer reliable inventory management and security for both short-term and long-term storage needs.
                    </p>
                </div>
            </div>

            {/* Logistic Card */}
            <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-200 space-y-4 p-4">
                <img src="/service5.png" alt="Logistic services" className="w-full h-64 object-cover rounded-xl" />
                <div className="px-2 space-y-2">
                    <h1 className="text-xl font-bold text-slate-900">Logistic</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Comprehensive logistics solutions that streamline the movement of goods and improve operational efficiency. We manage planning, coordination, and tracking to ensure smooth deliveries and customer satisfaction.
                    </p>
                </div>
            </div>

            {/* Tow Service Card */}
            <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-200 space-y-4 p-4">
                <img src="/service6.png" alt="Tow services" className="w-full h-64 object-cover rounded-xl" />
                <div className="px-2 space-y-2">
                    <h1 className="text-xl font-bold text-slate-900">Tow Service</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Professional towing services for vehicle recovery, roadside assistance, and secure transportation. Our skilled team responds quickly to ensure safe and efficient towing whenever needed.
                    </p>
                </div>
            </div>

            {/* Passenger Transport Card */}
            <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-200 space-y-4 p-4">
                <img src="/service7.png" alt="Passenger Transport services" className="w-full h-64 object-cover rounded-xl" />
                <div className="px-2 space-y-2">
                    <h1 className="text-xl font-bold text-slate-900">Passenger Transport</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Safe and comfortable passenger transportation services designed for individuals, groups, and businesses. Our well-maintained vehicles and professional drivers ensure a reliable and pleasant travel experience.
                    </p>
                </div>
            </div>

            {/* Vehicle Service Card */}
            <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-200 space-y-4 p-4">
                <img src="/service8.png" alt="Vehicle services" className="w-full h-64 object-cover rounded-xl" />
                <div className="px-2 space-y-2">
                    <h1 className="text-xl font-bold text-slate-900">Vehicle Service</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Professional vehicle maintenance and support services to keep your fleet running efficiently. We provide reliable inspections, repairs, and servicing to ensure optimal performance and safety.
                    </p>
                </div>
            </div>

            {/* Transport Card */}
            <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-200 space-y-4 p-4">
                <img src="/service9.png" alt="Transport services" className="w-full h-64 object-cover rounded-xl" />
                <div className="px-2 space-y-2">
                    <h1 className="text-xl font-bold text-slate-900">Transport</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Efficient transportation solutions for moving goods safely and on schedule. With experienced drivers and modern vehicles, we ensure dependable delivery services tailored to your requirements.
                    </p>
                </div>
            </div>

        </div>

        {/* contact section */}
        <div className='bg-black text-white text-center space-y-4 py-20 px-6 sm:px-8 border-t border-blue-900'>
            <span className="text-xs font-bold text-blue-400 tracking-widest uppercase block">Get In Touch</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto">Feel free to contact us anytime you need</h1>
            <h3 className='text-slate-300 text-base sm:text-lg font-medium max-w-xl mx-auto'>Contact us anytime for reliable support and assistance.</h3>
            <h4 className='text-slate-400 text-sm max-w-md mx-auto'>Available 24/7 to support your transportation needs.</h4>
            <div className="pt-4">
                <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-blue-500/10 transition-all duration-200 cursor-pointer" onClick={() => navigate('/contact')}>
                    Contact Us Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Service