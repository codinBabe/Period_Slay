import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';

export default function Contact() {
    return (
        <>
            <Header />
            <main>
                <div className='p-5'>
                    <h1 className='align-center text-center font-DMSerif font-medium text-5xl mt-10 leading-16'>Get in touch with us for
                        <br /> more information</h1>
                    <h4 className='align-center text-center font-Jost font-medium text-xl mt-10 '>If you need help or have a question, we are here for you</h4>
                </div>
                <div className='flex gap-20 justify-center'>
                    <div className='bg-primary400 w-80 h-60 mb-5 rounded-lg text-center p-5'>
                        <h3 className='mt-10 font-bold'>Chat Support</h3>
                        <h6 className='content-center mt-10 text-sm'>Our support team is just a click away</h6>
                        <button className='text-primary500 border-2 rounded-lg border-primary500 
                        w-20 p-0.5 mt-10 text-xs h-10 font-bold cursor-pointer '><Link to="/support">Chat Now</Link></button>
                    </div>
                    <div className='bg-primary400 w-80 h-60 mb-5 rounded-lg text-center p-5'>
                        <h3 className='mt-10 font-bold'>Email Support</h3>
                        <h6 className='content-center mt-10 text-sm '>Send us an email and we will get back to you</h6>
                        <button className='text-primary500 border-2 rounded-lg border-primary500 
                        w-20 p-0.5 mt-10 text-xs h-10 font-bold cursor'><Link to="/contact">Send Email</Link></button>
                    </div>

                </div>
                <Newsletter/>
            </main>
            <Footer />
        </>
    );
}
