// import React from 'react'
// import ContactForm from './ContactForm'

// const Contact = () => {
//   return (
//     <>
//     <div className='mt-32 w-full'>
//  <div style={{ color:"rgb(179, 40, 108)" }} className='w-3/4 mx-auto' > <h1  className='  tracking-wide font-semibold  text-xl'>GET IN TOUCH</h1>
//  <h1 style={{ fontFamily: "Morganite" }} className='tracking-wider text-8xl'>CONTACT</h1>
//  </div>
//  <ContactForm></ContactForm>
//  </div>
//     </>
//   )
// }

// export default Contact



import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact-section');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // Trigger animation when in view
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="contact-section" className='mt-32 w-full'>
        <div style={{ color: "rgb(179, 40, 108)" }} className='sm:w-3/4 w-5/6 mx-auto'>
          <h1
            className={`tracking-wide font-semibold text-xl transition-transform duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            GET IN TOUCH
          </h1>
          <h1
            style={{ fontFamily: 'Morganite' }}
            className={`tracking-wider text-8xl transition-transform duration-1000 ease-out delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            CONTACT
          </h1>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
