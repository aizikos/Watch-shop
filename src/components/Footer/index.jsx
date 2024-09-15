import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='my-[50px]'>
            <div className="container">
                <div className="flex justify-between">
                    <div className=" flex flex-col gap-16">
                        <h1 className='text-4xl font-black'>Shopverse</h1>
                        <h5>@ 2024 Shopverse  All Rights Reserved</h5>
                        <div className="text-3xl flex gap-10">
                            <a href=''>{<CiFacebook/>}</a>
                            <a href=''>{<FaInstagram/>}</a>
                            <a href=''>{<FaTwitter/>}</a>
                        </div>
                    </div>
                    <div className="flex text-right gap-20">
                        <div className="flex flex-col gap-4">
                            <h3 className='font-bold'>Download</h3>
                            <a href="" className='text-2xl'>Windows</a>
                            <a href="" className='text-2xl'>Mac OS</a>
                            <a href="" className='text-2xl'>Android</a>
                            <a href="" className='text-2xl'>iOS</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className='font-bold'>Resources</h3>
                            <a href='' className='text-2xl'>About</a>
                            <a href='' className='text-2xl'>Shop</a>
                            <a href='' className='text-2xl'>Categories</a>
                            <a href='' className='text-2xl'>Create</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Footer