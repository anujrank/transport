import React, { useState } from 'react';

function Faq() {
  // Track open state for each category's items
  // Format: { 'categoryIndex-itemIndex': true/false }
  const [openItems, setOpenItems] = useState({
    '0-2': true, // "Do you offer custom solutions?" open by default
    '0-3': true, // "What areas do you serve?" open by default
    '2-4': true, // "What about hazmat certifications?" open by default
  });

  const toggleAccordion = (catIndex, itemIndex) => {
    const key = `${catIndex}-${itemIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const faqData = [
    {
      category: "General",
      items: [
        { q: "What services does Seaquip Transport Solutions offer?", a: "We offer comprehensive transport, tank storage, and logistics management solutions tailored to your supply chain needs." },
        { q: "How long has Seaquip been in business?", a: "Seaquip has been a trusted leader in the transport and logistics industry for over two decades." },
        { q: "Do you offer custom solutions?", a: "Yes, we specialize in creating tailored logistics solutions based on your specific business needs. Contact our team to discuss your requirements." },
        { q: "What areas do you serve?", a: "We have facilities in Atlanta, Marietta, and Fort Lauderdale with the ability to serve clients nationwide and internationally." }
      ]
    },
    {
      category: "Tank Storage",
      items: [
        { q: "What size tanks can you store?", a: "We accommodate a wide range of tank sizes, from standard ISO tanks to specialized high-capacity industrial units." },
        { q: "Is climate control always included?", a: "Climate control options are available depending on your inventory requirements. Please specify your needs during setup." },
        { q: "What is your minimum storage term?", a: "We offer flexible storage terms ranging from short-term monthly agreements to multi-year contracts." },
        { q: "How do you ensure security?", a: "Our facilities feature 24/7 video surveillance, secure perimeter fencing, and strict access control protocols." },
        { q: "Can I access my stored inventory anytime?", a: "Authorized personnel can access inventory during standard operating hours, with emergency access available upon request." }
      ]
    },
    {
      category: "Shipping Services",
      items: [
        { q: "What shipping options do you provide?", a: "We offer regional trucking, intermodal transport, long-haul freight, and global maritime shipping configurations." },
        { q: "Do you handle international shipping?", a: "Yes, we provide full-service international logistics including customs clearance and documentation management." },
        { q: "Is insurance included?", a: "Standard liability insurance is included. We also offer comprehensive cargo insurance add-ons for high-value freight." },
        { q: "Can I track my shipment in real-time?", a: "Yes, all active shipments come with digital tracking links accessible through our client portal." },
        { q: "What about hazmat certifications?", a: "Our team holds all necessary DOT Hazmat certifications and EPA compliance certifications for safe handling of hazardous materials." }
      ]
    },
    {
      category: "Pricing & Payment",
      items: [
        { q: "How do I get a shipping quote?", a: "You can request a custom quote directly through our website contact form or by calling our sales team." },
        { q: "Do you offer volume discounts?", a: "Yes, we offer competitive volume discounts and contracted rates for high-frequency shippers." },
        { q: "What payment methods do you accept?", a: "We accept ACH transfers, all major credit cards, and corporate invoicing for pre-approved accounts." },
        { q: "Are there any hidden fees?", a: "No, we believe in complete transparency. All potential accessorial charges are clearly outlined in your initial agreement." }
      ]
    },
    {
      category: "Compliance & Safety",
      items: [
        { q: "What certifications do you hold?", a: "We are fully bonded, licensed, and maintain elite safety ratings with national transport regulators." },
        { q: "Do you handle regulated materials?", a: "Yes, our certified teams and specialized equipment are fully compliant to handle regulated and sensitive materials safely." }
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 font-sans bg-gray-50/50 min-h-screen">
      {faqData.map((section, catIndex) => (
        <div key={catIndex} className="mb-10">
          {/* Section Heading */}
          <h2 className="text-xl font-extrabold text-slate-800 mb-4 tracking-tight">
            {section.category}
          </h2>
          
          {/* Accordion List */}
          <div className="space-y-3">
            {section.items.map((item, itemIndex) => {
              const isOpen = !!openItems[`${catIndex}-${itemIndex}`];
              return (
                <div 
                  key={itemIndex} 
                  className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm transition-all duration-200"
                >
                  {/* Accordion Trigger Button */}
                  <button
                    onClick={() => toggleAccordion(catIndex, itemIndex)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left text-sm font-bold text-slate-700 hover:bg-gray-50 transition-colors focus:outline-none"
                  >
                    <span>{item.q}</span>
                    <span className={`text-slate-900 font-medium text-lg transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </button>

                  {/* Accordion Content Panel */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-40 border-t border-gray-100' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 text-xs sm:text-sm text-gray-500 leading-relaxed bg-white">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;