import React from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../../data';
import Vconelogo from '../../assets/logo-v-Cone.svg'
const Header = () => {
    return (
        <header>
            <div className='container mx-auto mt-4'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={Vconelogo} alt="" />
                        </Link>
                    </div>
                    <div>
                        <ul className='flex flex-row gap-6'>
                            {
                                menuData.map((item, index, link) => (
                                    <li key={index.id}>
                                        <Link to={link.path} className='heading-h4-m text-whitecolor hover:text-primarycolor'>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='contact_us'>
                        <Link to="/" className='primary_btn heading-m-eb'>
                            <p className='button_text'>Contact</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
