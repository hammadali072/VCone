import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

const LandingPage = () => {
    return (
        <>
            <div className='section_title'>
                <div className='title_otr'>
                    <p className='title'>Award Winning WordPress Agency</p>
                </div>
                <h2 className='heading heading-h2'>What's our
                    <span className='heading_inr'> creative </span>
                    process?</h2>
            </div>
            <div className='links flex gap-2'>
                <Link to="/" className='primary_btn heading-m-eb'>
                    <p className='button_text'>Contact</p>
                </Link>
                <Link to="/" className='primary_btn2'>
                    <p className='button_text'>All Projects</p>
                </Link>
                <Link to="/" className='secondary_btn'>
                    <p className='button_text'>View All</p>
                    <ArrowRight className='button_icon' weight='bold' />
                </Link>
            </div>
        </>
    )
}

export default LandingPage
