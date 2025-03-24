import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import LandingImage from '../../../assets/landing-image.png'

const LandingPage = () => {
    return (
        <div className='container mx-auto'>
            {/* Intro content */}
            <div className='flex flex-row xl:justify-between md:gap-4 mt-20'>
                <div>
                    <h1 className='.heading-h1 text-whitecolor xl:text-6xl lg:text-5xl md:text-3xl uppercase font-bold'>
                        we create beautiful <span className='text-primarycolor'>efficient</span> wordpress websites.
                    </h1>
                </div>
                <div className='py-2'>
                    <p className='.heading-h4-m text-whitecolor md:text-sm'>You need to get positive results when you spend hard earned marketing and promotions
                        need to get positive results when you  </p>
                    <Link to="/" className='primary_btn heading-m-eb mt-4'>
                        <p className='button_text'>Get Started</p>
                    </Link>
                </div>
            </div>
            {/* Landing Image  */}
            <div>
                <div>
                    <div>
                        <img src={LandingImage} alt="" className='lg:w-[650px] xl:w-[800px] md:w-[550px]'  />
                    </div>
                </div>
            </div>





























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
        </div>
    )
}

export default LandingPage
