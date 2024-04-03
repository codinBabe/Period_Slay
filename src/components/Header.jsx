import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/PERIOD SLAY LOGO.png'

export default function Header() {
    return (
        <nav className='text-primary500'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <Link to="/"><img src={Logo} alt='logo' /></Link>
                    <ul className='flex items-center gap-4 font-semibold text-xs'>
                        <li>
                            <Link to="/blog">Health Blog</Link>
                        </li>
                        <li>
                            <Link to="/tracker">Period Tracker</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className='flex items-center gap-5 font-semibold text-xs'>
                        <li>
                            <Link to="/login">Log in</Link>
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
