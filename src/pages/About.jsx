import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutImage from '../assets/About-Image.svg';
import AboutImagePNG from '../assets/About-ImagePNG.png';
import Facebook from '../assets/Facebook.svg';
import  Instagram from '../assets/Instagram.svg';
import X from  '../assets/X.svg';
import LinkedIn from  "../assets/LinkedIn.svg";
import Youtube from  "../assets/Youtube.svg";
import meeting from '../assets/meeting.svg';
import vector from '../assets/Vector (1).png';
import TablerMail from '../assets/tabler_mail.png'


export default function About() {
    return (
        <>
            <div className='w-25 h-20 p-5 border-solid bg-white border-8 text-center text-black text-2xl m-0 '>
                About us section</div>
            <Header/>
            <main>
            <h1>About Page</h1>
                <div className='flex m-0 relative align-center justify-center'>
               <div >
                <div className='relative '>
                <div className='w-30 h-13 absolute text-primary500 text-6xl text-justify left-20 
                top-20 font-bold tracking-normal font-DmSerif leading-normal'>Learn About Period
                <br /> Slayer's Mission and 
                <br />Impact.</div>
                <img src = {AboutImage} />
                    </div>
                
               </div>
               
                </div>
                <div className = 'flex flex-col gap-40 pl-10 mt-20 ml-10'>
                <div className = 'flex'>
                <div className= ' bg-primary400 w-25 h-60 p-5 border-2 rounded-r-lg text-primary500 '>
                <ul>
                    <li className = 'mb-5 font-bold text-2xl'>ABOUT US</li>
                    <li className = 'mb-3'>LEADERSHIP</li>
                    <li className = 'mb-3'>AWARENESS AND RECOGNITION</li>
                    <li className = 'mb-3'>WHAT WE DO</li>
                    <li className = 'mb-3'>OUR PURPOSE</li>
                    <li className = ''>OUR TEAM</li>
                </ul>
               </div>
               <div className = 'w-80, h-30 leading-6 pl-2 ml-10'>
               <div className='w-30flex flex-col mr-20 right-10 absolute'>
                        <img src={meeting} alt="" />
                        <div className='bg-white p-5 w-30 h-30'>
                            <h1 className='text-primary500 text-2xl font-bold'>What We Do</h1>
                            <p>
                            Through strategic partnerships, 
                            <br />grassroots initiatives, and advocacy
                            <br /> campaigns, we're working tirelessly to 
                            <br />address the systemic challenges 
                            <br />surrounding menstrual health. From 
                            <br />distributing menstrual hygiene products 
                            <br />to underserved communities to 
                            <br />providing comprehensive education on 
                            <br />menstrual hygiene management, our 
                            <br />multifaceted approach aims to foster 
                            <br />positive change at both the individual 
                            <br />and societal levels.
                            </p>
                        </div>
                        <div className='p-10 bg-primary500 w-80 h-80 rounded-xl justify-center items-center  ring-1 gap-5 mt-60'>
                            <h1 className='p-5 text-white text- font-bold text-4xl font-DmSerif  '>Get In Touch With Us</h1>
                            <div className='flex flex-col ml-5 gap-5'>
                            <div className='flex gap-5 text-white'>
                            <img src={vector} alt=""/>+234-785-9870
                            </div>
                            <div className='flex gap-5 text-white'>
                            <img src={TablerMail} alt="" srcset="" />hello@periodslayer.com
                            </div>
                            </div>
                        </div>
                    </div>
                <h1 className = 'text-primary500 text-2xl font-bold '>WHO WE ARE</h1>
                <div className='text-justify'>
                </div>
                <section className = ''>
                    <br />Welcome to Period Slayer, where we're on a mission to empower 
                   <br /> individuals and communities by breaking down barriers to menstrual 
                   <br /> health and hygiene. We believe that everyone deserves access to safe and 
                   <br /> dignified menstrual care, regardless of their background or 
                   <br /> circumstances.
                    <p>
                   <br />
                    At Period Slayer, our mission is simple yet profound: to eradicate 
                    <br />menstrual poverty, promote menstrual health education, and advocate for 
                    <br />menstrual equity worldwide. We're committed to ensuring that no one 
                    <br />ever has to choose between their health and other basic necessities.
                    </p>
                    
                    </section>
                    
               </div>
                </div>
                <div className='' >
                <div className=' ' >
                <h6>Social Media Links</h6>
                <div className = 'flex gap-4 '>
                <a href="#" target="_blank" rel="noreferrer">
                            <img src={Facebook} alt='icon' />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={Instagram} alt='icon' />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={X} alt='icon' />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={LinkedIn} alt='icon' />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={Youtube} alt='icon' />
                        </a>
                        
                </div>
                <div className='w-50 h-50 font-Jost leading-8 max-w-fit bg-neutral ml-80  -mt-20 '>
                    <div>
                    <h1 className='text-primary500 font-bold'>Our Impact</h1>
                    </div>
                    <div className='text-sm leading-8'>
                    <p>
                   Since our inception, Period Slayer has touched the lives of countless individuals around the
                    <br /> globe. From marginalized communities in remote villages to urban centers facing economic 
                    <br />hardship, we've made it our mission to reach those who need our support the most. By 
                    <br />providing access to menstrual products, promoting menstrual health education, and 
                    <br />challenging stigma and discrimination, we're creating a world where menstruation is no 
                    <br />longer a barrier to health, dignity, and opportunity.
                   </p>
                    </div>
                    </div>

               </div>
                </div>
                <div className=' font-Jost leading-8 align-justify bg-neutral -ml-0 pt-3 -mt-20 w-2/3 '>
                    <div>
                    <h1 className='text-primary500 font-bold'>Our Mission</h1>
                    </div>
                    <div className='text-sm leading-8'>
                    <p>
                   <br />Since our inception, Period Slayer has touched the lives of countless individuals around the
                    globe. From marginalized communities in 
                    <br />remote villages to urban centers facing economic 
                    hardship, we've made it our mission to reach those who need our support the most. By 
                    <br />providing access to menstrual products, promoting menstrual health education, and 
                    challenging stigma and discrimination, we're creating a 
                    <br />world where menstruation is no 
                    longer a barrier to health, dignity, and opportunity.
                   </p>
                    </div>
                    </div>
                     <div className=' font-Jost leading-8 align-justify bg-neutral -ml-0 pt-3 -mt-10 mb-5 w-2/3'>
                    <div>
                    <h1 className='text-primary500 font-bold'>Our Vision</h1>
                    </div>
                    <div className='text-sm leading-8'>
                    
                   <br />Since our inception, Period Slayer has touched the lives of countless individuals around the
                    globe. From marginalized communities in 
                    <br />remote villages to urban centers facing economic 
                    hardship, we've made it our mission to reach those who need our support the most. By 
                    <br />providing access to menstrual products, promoting menstrual health education, and 
                    challenging stigma and discrimination, we're creating a 
                    <br />world where menstruation is no 
                    longer a barrier to health, dignity, and opportunity.
                   
                    </div>
                   
                    </div>
                    
                </div>
            </main>
            <Footer/>
        </>
    );
}
