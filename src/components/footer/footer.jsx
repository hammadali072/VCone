import React from 'react';
import { Link } from 'react-router-dom';
import Vconelogo from '../../assets/logo-v-Cone.svg'
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <div className='container mx-auto mt-4'>
                <div className='flex flex-row justify-between items-center'>
                    {/* Footers Left Section */}
                    <div className='flex flex-row items-center gap-10'>
                        <div className='logo'>
                            <Link to='/'>
                                <img src={Vconelogo} alt="" width={104} height={25} />
                            </Link>
                        </div>
                        <div>
                            <ul className='flex flex-row gap-6'>
                                <li >
                                    <Link to='/' className='.heading-h4-m text-whitecolor hover:text-primarycolor'>Privacy Policy</Link>
                                </li>
                                <li >
                                    <Link to='/' className='.heading-h4-m text-whitecolor hover:text-primarycolor'>Terms & Conditions</Link>
                                </li>
                                <li >
                                    <Link to='/' className='.heading-h4-m text-whitecolor hover:text-primarycolor'>Contact</Link>
                                </li>
                                <li >
                                    <Link to='/' className='.heading-h4-m text-whitecolor hover:text-primarycolor'>License</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* footers Right section */}
                    <div className='flex flex-row gap-6 items-center'>
                        {/* icons */}
                        <div>
                            <ul className='flex flex-row gap-4'>
                                <li>
                                    <Link to='/'>
                                        <MdFacebook className='text-whitecolor' size={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <FaTwitter className='text-whitecolor' size={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <FaInstagram className='text-whitecolor' size={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <FaLinkedin className='text-whitecolor' size={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <FaDribbble className='text-whitecolor' size={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <FaPinterest className='text-whitecolor' size={24} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='.heading-s text-whitecolor'>
                                Copyright 2022 | wpcone.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
