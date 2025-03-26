import React from 'react';
import { Link } from 'react-router-dom';
import Vconelogo from '../../assets/logo-v-Cone.svg'
import { footerLinks, socialIcons } from '../../data';

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
                                {
                                    footerLinks.map((item, index, link) => (
                                        <li key={index.id} >
                                            <Link to={link.path} className='.heading-h4-m text-whitecolor hover:text-primarycolor'>{item.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* footers Right section */}
                    <div className='flex flex-row gap-6 items-center'>
                        {/* icons */}
                        <div>
                            <ul className='flex flex-row gap-4'>
                                {
                                    socialIcons.map((item, index, link) => (
                                        <li key={index.id}>
                                            <Link to={link.path} className='text-whitecolor'>
                                                {item.icon}
                                            </Link>
                                        </li>
                                    ))
                                }
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
