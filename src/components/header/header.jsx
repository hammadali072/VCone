import React from 'react';
import { Link } from 'react-router-dom';
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
                            <li >
                                <Link to='/' className='.heading-h4-m text-whitecolor hover:text-primarycolor'>Home</Link>
                            </li>
                            <li >
                                <Link to='/' className='.heading-h4-m text-whitecolor hover:text-primarycolor'>Plugins</Link>
                            </li>
                            <li >
                                <Link to='/' className='.heading-h4-m text-whitecolor hover:text-primarycolor'>Themes</Link>
                            </li>
                            <li >
                                <Link to='/' className='.heading-h4-m text-whitecolor hover:text-primarycolor'>Templates</Link>
                            </li>
                            <li >
                                <Link to='/' className='.heading-h4-m text-whitecolor hover:text-primarycolor'>Blog</Link>
                            </li>
                            <li >
                                <Link to='/' className='.heading-h4-m text-whitecolor hover:text-primarycolor'>Support</Link>
                            </li>
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
