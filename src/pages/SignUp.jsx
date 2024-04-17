import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Slogan from "../components/Slogan";
import UterusFull from '../assets/UterusFull.png';


export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, confirmPassword }),
            });
        } catch (error) {
            console.error('Login error:', error);
        }
    };
    return (
        <>
            <Header />
            <main className='bg-primary50 relative'>
                <div className='container mx-auto py-20 relative'>
                    <div className='max-w-3xl w-1/2 px-4 relative z-10'>
                        <div className='bg-white rounded-xl p-12 shadow-2xl transform translate-x-[73%]'>
                            <h1 className='font-DmSerif text-6xl text-center'>Sign Up</h1>
                            <form className='form' onSubmit={handleLogin}>
                                <div className="mb-6">
                                    <label htmlFor='name'>Full Name</label>
                                    <input type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor='email'>Email</label>
                                    <input type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor='password'>Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor='password'>Confirm Password</label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                <button className='rounded-md px-8 py-4 w-full text-white text-lg font-medium bg-primary500 mb-6' type="submit">Log In</button>
                            </form>
                            <div className='text-center'>
                                <p className='text-xl'>Already have an account? <Link className='text-primary500' to='/login'>Log In</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[14%] left-[28%] transform -translate-x-1/2">
                        <Slogan />
                        <div className="relative">
                            <img src={UterusFull} alt='placeholder' className="mt-[-5px] ml-[-48px] h-[300px] w-[300px]" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
