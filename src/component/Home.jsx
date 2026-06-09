import React from 'react';

function Home() {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-screen bg-[url('/hero-img.png')] bg-cover bg-center">

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full pl-20 pt-30 md:pl-40 space-y-5">
                    <h1 className="text-4xl md:text-4xl font-bold text-white">
                        Storage and Transport Company
                    </h1>

                    <p className="text-lg md:text-xl text-white">
                        We Make Your Transport Easy
                    </p>

                    <div>
                        <button className="bg-yellow-700 hover:bg-yellow-600 cursor-pointer text-white font-bold py-3 px-8 rounded">
                            Get Started
                        </button>
                    </div>
                </div>

            </div>
            {/* about us */}
            <div className="py-20 px-10 md:px-40 space-y-5 flex lg:flex-row flex-col">
                <div className="lg:pr-10 space-y-5 lg:w-1/2">
                    <h2 className='text-2xl font-bold'>ABOUT US</h2>
                    <h3 className="text-xl font-semibold">Your Trusted Partner in Storage & Transportation Solutions</h3>
                    <p>At our company, we specialize in providing reliable storage and transportation services tailored to meet the needs of businesses and individuals. With a commitment to safety, efficiency, and customer satisfaction, we ensure that your goods are handled with the utmost care from pickup to delivery. Our experienced team, modern fleet, and secure storage facilities enable us to deliver seamless logistics solutions that you can trust. Whether you need short-term storage or long-distance transportation, we are dedicated to providing timely, secure, and cost-effective services every step of the way.</p>
                    <button className="bg-yellow-700 hover:bg-yellow-600 cursor-pointer text-white font-bold py-3 px-8 rounded">
                        Know More
                    </button>
                </div>
                <div>
                    <img src="/aboutus.png" alt="about us" className="w-full h-full object-cover rounded-sm" />
                </div>
            </div>
            {/* section 2 */}
            <div className="py-20 px-10 md:px-40 space-y-5">
                <h2 className="text-2xl font-bold text-yellow-800 text-center">Professional Warehouse</h2>
                <h1 className="text-3xl font-bold text-black text-center">Warehouse solution for every need</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    <div className="bg-white border-10 border-gray-200 p-5 rounded space-y-3 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-yellow-800">QUALITY</h3>
                        <h4 className="text-lg font-semibold">We ensures you the best quality services</h4>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                        <button>
                            Read more
                        </button>
                    </div>
                    <div className="bg-white border-10 border-gray-200 p-5 rounded space-y-3 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-yellow-800">FAST</h3>
                        <h4 className="text-lg font-semibold">Very careful handling of valuable goods</h4>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                        <button>
                            Read more
                        </button>
                    </div>
                    <div className="bg-white border-10 border-gray-200 p-5 rounded space-y-3 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-yellow-800">SAFE</h3>
                        <h4 className="text-lg font-semibold">Safe and on time delivery of your goods</h4>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                        <button>
                            Read more
                        </button>
                    </div>
                </div>
            </div>
            {/* Our Services */}
            <div>
                <h2 className="text-2xl font-bold text-yellow-800 text-center">Our Services</h2>
                <h1 className="text-3xl font-bold text-black text-center">We Provide Best Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 px-10 md:px-40">

                    <div className="group relative overflow-hidden rounded-lg">
                        <img
                            src="/service1.png"
                            alt="Short Trucks"
                            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                            <h1 className="text-white text-3xl font-bold">
                                Short Trucks
                            </h1>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-lg">
                        <img
                            src="/service2.png"
                            alt="Transport"
                            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                            <h1 className="text-white text-3xl font-bold">
                                Transport
                            </h1>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-lg">
                        <img
                            src="/service3.png"
                            alt="Warehouse"
                            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                            <h1 className="text-white text-3xl font-bold">
                                Warehouse
                            </h1>
                        </div>
                    </div>

                </div>
                <h4 className="font-bold text-yellow-800 text-center cursor-pointer p-10">
                    View All Services
                </h4>
            </div>
            {/* section 4 */}
            <div className="py-20 px-10 md:px-40 space-y-5 flex lg:flex-row flex-col">
                <div>
                    <img src="/ontime.png" alt="testimonial" className="w-full h-full object-cover rounded-sm" />
                </div>
                <div className="lg:pl-10 space-y-5 lg:w-1/2">
                    <h1 className='text-2xl font-semibold'>Safe and on time delivery of your goods</h1>
                    <p>We are committed to providing reliable, secure, and timely transportation solutions for your valuable goods. Our experienced team ensures every shipment is handled with care, tracked throughout the journey, and delivered safely to its destination. With efficient logistics and customer-focused service, we guarantee peace of mind and on-time delivery every time.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><span className="font-bold">On-Time Delivery</span> – Ensuring your goods reach their destination as scheduled.</li>
                        <li><span className="font-bold">Safe Transportation</span> – Secure handling and protection of every shipment.</li>
                        <li><span className="font-bold">Real-Time Tracking</span> – Monitor your goods throughout the delivery process.</li>
                        <li><span className="font-bold">Experienced Team</span> – Skilled professionals managing logistics efficiently.</li>
                        <li><span className="font-bold">Nationwide Coverage</span> – Reliable transportation services across multiple locations.</li>
                        <li><span className="font-bold">Customer Satisfaction</span> – Dedicated support and dependable service for every client.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;