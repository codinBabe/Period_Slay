import { Link } from 'react-router-dom';
import Logo from '../assets/PERIOD SLAY LOGO.png';
import Facebook from '../assets/Facebook.svg';
import Instagram from '../assets/Instagram.svg';
import X from '../assets/X.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import Youtube from '../assets/Youtube.svg';

export default function Footer() {
    return (
        <footer className='bg-primary400 text-primary500'>
            <div className='container px-20 py-8 mx-auto'>
                <div className='flex items-center justify-between'>
                    <Link to="/"><img src={Logo} alt='Logo' /></Link>
                    <ul className='flex items-center gap-3 font-semibold text-xs'>
                        <li>
                            <Link to="/tracker">Period Tracker</Link>
                        </li>
                        <li>
                            <Link to="/blog">Health Blog</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className='flex items-center gap-2'>
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
                </div>

            </div>
            <hr className="border border-primary500 w-full" />
            <div className='container mx-auto'>
                <div className='flex items-center justify-center gap-4 text-xs py-14'>
                    <p>© {new Date().getFullYear()} Period Slay. All rights reserved.</p>
                    <Link to="/" className='underline'>FAQs</Link>
                    <Link to="/" className='underline'>Terms and Conditions</Link>
                    <Link to="/" className='underline'>Cookie Settings</Link>
                </div>
            </div>
        </footer>
    )
}