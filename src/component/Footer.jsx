import React from 'react'

function Footer() {
    return (
        <div className='bg-black text-white py-10 px-10 md:px-40 space-y-5'>
            <div className='flex lg:flex-row flex-col justify-between'>
                <div>
                    <ul className='space-y-5'>
                        <h1 className='text-xl font-bold'>Quick Links</h1>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-5'>
                        <h1 className='text-xl font-bold'>Our Services</h1>
                        <li>Warehousing</li>
                        <li>Short Trucks</li>
                        <li>Transportation</li>
                        <li>Supply Chain Management</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-5'>
                        <h1 className='text-xl font-bold'>Contact Information</h1>
                        <li><span>Address :: </span>3215 lancer drive
                            Powder Springs ga 30127</li>
                        <li><span>Phone :: </span>4042039738</li>
                        <li><span>Email :: </span>kevinsimp88@aol.com</li>
                    </ul>
                </div>

            </div>
            <div className="bg-black text-white py-6 border-t border-gray-700">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        <p className="text-sm text-gray-400">
                            © 2026 Swift Logistics & Storage. All Rights Reserved.
                        </p>

                        <div className="flex items-center text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition">
                                Privacy Policy
                            </a>

                            <span className="mx-4 h-4 border-l border-gray-600"></span>

                            <a href="#" className="hover:text-white transition">
                                Terms & Conditions
                            </a>

                            <span className="mx-4 h-4 border-l border-gray-600"></span>

                            <a href="#" className="hover:text-white transition">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer