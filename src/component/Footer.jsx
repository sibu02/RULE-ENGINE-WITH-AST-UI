import React from 'react';
import { Typography} from '@mui/material';

const Footer = () => {
  return (
      <div  className='flex flex-col justify-center items-center bg-black h-[6rem]'>
        {/* Links */}
        <div className='flex text-gray-600 space-x-4'>
          <a href="/" className='hover:text-white'>Home</a>
          <a href="/about" className='hover:text-white'>About</a>
          <a target='_blank' href="http://www.linkedin.com/in/sibusundardas" className='hover:text-white'>Contact</a>
        </div>

        {/* Copyright Section */}
        <div className='text-gray-400 mt-2'>
          <Typography>
            &copy; {new Date().getFullYear()} Rule Engine. All rights reserved.
          </Typography>
        </div>
      </div>
  );
};

export default Footer;
