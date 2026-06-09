import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
function Contact() {
    return (
        <section className="bg-slate-50 py-20 px-4 sm:px-6 antialiased font-sans">
            
            {/* Hero Section */}
            <div className="relative h-[350px] md:h-[450px] lg:h-[500px] w-full bg-blue-950 flex items-center justify-center overflow-hidden rounded-3xl max-w-7xl mx-auto shadow-xl">
                {/* Blue Tint Overlay over the Background Image */}
                <div className="absolute inset-0 bg-[url('/contact.png')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-blue-950/5 to-blue-950"></div>
                
                {/* Hero Inner Content */}
                <div className="relative z-10 text-center space-y-3 px-4">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                        Contact Us
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Heading Description */}
                <div className="text-center mb-16 mt-12 max-w-2xl mx-auto space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        We're Ready to Help You
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                        Feel free to contact us anytime. We're here to assist with all your transport and storage needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

                    {/* Contact Form */}
                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-sm">
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
                            Send Us a Message
                        </h3>

                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors text-slate-800"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors text-slate-800"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors text-slate-800 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-blue-950 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-xl transition duration-200 shadow-md cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info + Map */}
                    <div className="space-y-6">

                        {/* Info Block */}
                        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="border-b border-slate-100 pb-4">
                                    <h4 className="text-lg uppercase tracking-wider font-bold text-blue-600 flex items-center gap-2">
                                        <FaPhoneAlt />
                                        Phone
                                    </h4>
                                    <p className="text-lg font-semibold text-slate-800 mt-1">
                                        4042039738
                                    </p>
                                </div>

                                <div className="border-b border-slate-100 pb-4">
                                    <h4 className="text-lg uppercase tracking-wider font-bold text-blue-600 flex items-center gap-2">
                                        <MdOutlineMail />
                                        Email
                                    </h4>
                                    <p className="text-lg font-semibold text-slate-800 mt-1">
                                        kevinsimp88@aol.com
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg uppercase tracking-wider font-bold text-blue-600 flex items-center gap-2">
                                        <IoLocation />
                                        Address
                                    </h4>
                                    <p className="text-lg font-semibold text-slate-800 mt-1 leading-relaxed">
                                        3215 lancer drive <br />
                                        Powder Springs ga 30127
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Container */}
                        <div className="overflow-hidden rounded-2xl border border-slate-200/60 shadow-sm h-[350px]">
                            <iframe
                                title="Google Map"
                                src="https://maps.google.com/maps?q=3215%20Lancer%20Drive%20Powder%20Springs%20GA%2030127&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact