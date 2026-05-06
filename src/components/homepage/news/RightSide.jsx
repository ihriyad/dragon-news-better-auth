import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSide = () => {
    return (
        <div className='flex flex-col gap-2'>
            <button className='btn border border-red-400 text-red-400'>
                <FaGoogle></FaGoogle>
                Login with google</button>
            <button className='btn border text-black'>
                <FaGithub></FaGithub>
                Login with Github</button>
        </div>
    );
};

export default RightSide;