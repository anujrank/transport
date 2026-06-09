import React from 'react'

function About() {
    return (
        <div>
            {/* abouthero section */}
            <div className="relative h-[500px] bg-[url('/about-img.png')] bg-cover bg-center">

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full pl-20 pt-30 md:pl-40 space-y-5">
                    <h1 className="text-4xl md:text-4xl font-bold text-white">
                        About Us
                    </h1>
                    <div>
                    </div>
                </div>

            </div>
            {/* section2 */}
            <div>
                <div>
                    <h2>Our Mission</h2>
                    <p>Our mission is to provide safe, reliable, and efficient storage and transportation solutions that help businesses and individuals move their goods with confidence. We are committed to delivering exceptional service, ensuring timely deliveries, maintaining the highest safety standards, and building long-term relationships through trust, professionalism, and customer satisfaction.</p>
                </div>
                <div>
                    <h2>Our Vision</h2>
                    <p>Our vision is to be the most trusted and preferred storage and transportation company, recognized for excellence, innovation, and reliability. We strive to create a future where businesses and individuals can rely on seamless logistics solutions that ensure efficiency, safety, and sustainable growth. Through continuous improvement and customer-focused services, we aim to set new benchmarks in the industry.</p>
                </div>
                <div>
                    <h3>Professional Services</h3>
                    <h2>24 Hours Support</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About