import React from 'react';
import { Link, useLocation, } from 'react-router-dom';
import Logo from '../assets/PERIOD SLAY LOGO.png'

export default function Header() {
    const location = useLocation();
    return (
        <nav className='border-b-2 border-b-primary500'>
            <div className='container mx-auto'>
                <div className='tabs flex items-center justify-between'>
                    <Link to="/">
                        <img src={Logo} alt='logo' width={150} />
                    </Link>
                    <ul className='flex items-center gap-4 font-medium text-base'>
                        <li>
                            <Link
                                className={location.pathname === '/blog' ? 'active' : ''}
                                to="/blog">Health Blog</Link>
                        </li>
                        <li>
                            <Link
                                className={location.pathname === '/tracker' ? 'active' : ''}
                                to="/tracker">Period Tracker</Link>
                        </li>
                        <li>
                            <Link
                                className={location.pathname === '/about' ? 'active' : ''}
                                to="/about">About</Link>
                        </li>
                        <li>
                            <Link
                                className={location.pathname === '/contact' ? 'active' : ''}
                                to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className='flex items-center gap-5 font-medium text-base'>
                        <li>
                            <Link 
                                className={location.pathname === '/login' ? 'active' : ''}
                            to="/login">Log in</Link>
                        </li>
                        <li className='border-2 border-primary500 py-2 px-5 rounded-md'>
                            <Link to="/signup">Sign up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
