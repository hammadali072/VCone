import React from 'react';
import { Link } from 'react-router-dom';
import LandingImage from '../../assets/landing-image.png'
import ExplorerImg from '../../assets/Star.png'

const HeroSection = () => {
    return (
        <div className='container mx-auto text-white'>
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
                <div className='flex flex-row gap-10 mt-28'>
                    <div className='relative w-8/12'>
                        <img src={LandingImage} alt="" className='lg:w-[650px] xl:w-[1040px] md:w-[550px]' />
                        <div className='absolute xl:top-[-65px] xl:right-16'>
                            <img src={ExplorerImg} alt="" className='xl:w-32 ' />
                        </div>
                    </div>
                    <div className='w-4/12'>
                        <div className='mt-14 px-24'>
                            <h6 className='heading-h2 text-whitecolor'>13<span className='text-primarycolor'>+</span></h6>
                            <p className='heading-h4-m'>Awards Won</p>
                            <hr className='border-2 mt-8'/>
                        </div>
                        <div className='mt-10 px-24'>
                            <h6 className='heading-h2 text-whitecolor'>500<span className='text-primarycolor'>+</span></h6>
                            <p className='heading-h4-m'>Projects Done</p>
                            <hr className='border-2 mt-8'/>
                        </div>
                        <div className='mt-10 px-24'>
                            <h6 className='heading-h2 text-whitecolor'>274<span className='text-primarycolor'>+</span></h6>
                            <p className='heading-h4-m'>Brands Trust Us</p>
                            <hr className='border-2 mt-8'/>
                        </div>
                    </div>
                </div>
            </div>





























           
        </div>
    )
}

export default HeroSection
