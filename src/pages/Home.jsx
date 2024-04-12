import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Womanwithafro from '../assets/woman-with-afro.png';
import PlaceholderImage from '../assets/Placeholder Image.png';
import WomanExercise from '../assets/woman_exercising.png';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section className='bg-primary500 text-white'>
                    <div className='container px-4 py-10 mx-auto'>
                        <div className='flex items-center'>
                            <div>
                                <h1 className='font-DmSerif font-medium text-4xl mb-6'>Learn More About Your Menstrual Health and Stay Updated on Your Cycle</h1>
                                <p className='text-md mb-5'>Welcome to Period slayer, where you can access educational resources on puberty,<br /> learn more about your monthly period and other health issues. </p>
                                <button className='bg-white text-md text-primary500 py-4 px-8 rounded-md'>Learn More...</button>
                            </div>
                            <div className='relative'>
                                <img src={Womanwithafro} alt='woman with afro hairstyle' className='object-contain w-full h-full'/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='my-12'>
                    <div className='container mx-auto'>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <Link className='font-DmSerif text-lg text-primary500' to={'/blog'}>Educational Resources Available</Link>
                                    <p className='text-md mt-2'>Explore our extensive collection of educational blog posts on topics like puberty,<br/> reproductive health, and other important issues that affect women’s health.</p>
                                </div>
                                <div>
                                    <Link className='font-DmSerif text-lg text-primary500' to={'/tracker'}>Track Your Period Easily</Link>
                                    <p className='text-md mt-2'>Our Website provides a simple  and intuitive period tracking feature that allows<br/> you to effortlessly monitor your menstrual cycle and upcoming periods.</p>
                                </div>
                                <div>
                                    <Link className='font-DmSerif text-lg text-primary500' to={'/tracker'}>Connect with our Community</Link>
                                    <p className='text-md mt-2'>Join our supportive community of users where you can share experiences,<br/>ask questions, and receive valuable  support and advice from others going through<br/> similar experiences.</p>
                                </div>
                            </div>
                            <div>
                                <img src={PlaceholderImage} alt='cute pad display shot' />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                <div className='container mx-auto'>
                        <h2 className='font-DmSerif text-2xl text-primary500'>Stay Informed, Stay Healthy</h2>
                        <p className='text-xl'>Discover informative and engaging blog posts on various health topics.</p>
                        <div>
                            <div><img src={WomanExercise} alt='placeholder' /></div>
                            <p>Health</p>
                            <div>
                                <h3>The Role of Exercise in Menstrual Health: Benefits and Best Practices</h3>
                                <p>Learn how to prioritize self care during your menstrual cycle for better well-being</p>
                            </div>
                        </div>
                </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
