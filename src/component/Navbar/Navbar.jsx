import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-20 px-5'>
            <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
            <img alt="" className="w-8 h-8 rounded-full ring-2 ring-offset-4 ring-violet-400 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
        </div>
    );
};

export default Navbar;