import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='bg-gray-900 text-white flex justify-between px-4 h-16 items-center'>
            <div className='logo font-bold text-lg'>💰 Fund Me Here 💰</div>
            {/* <ul className='flex justify-between gap-4 cursor-pointer'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign Up</li>
                <li>Log In</li>
            </ul> */}
            <div>
                <Link href={"/login"}>
                    <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log In</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar