import React from 'react'
import VectorCodeImg from '../../assets/Vector-code.png'
import { ServiceItem } from '../../data'
import { DiceFive } from '@phosphor-icons/react'

const OurServices = () => {
    return (
        <div className='container mx-auto text-white mt-20'>
            <div className='text-center'>
                <div className='title_otr'>
                    <p className='heading-l text-primarycolor'>Our Services</p>
                </div>
                <div>
                    <h2 className='heading-h2'>what do we <span className='text-primarycolor'>provide</span>?</h2>
                </div>
            </div>
            {/* cards */}
            <div className='grid grid-cols-3 gap-6 mt-16'>
                {ServiceItem.map((item, index) => (
                    <div
                        key={index}
                        className='group block rounded-lg bg-blackcolor p-10 hover:bg-primarycolor hover:text-black transition duration-300'
                    >
                        {/* Image Wrapper */}
                        <div className='bg-white w-fit p-6 rounded-full transition duration-300 group-hover:bg-black'>
                            <img src={VectorCodeImg} alt="" className='w-6 text-black  group-hover:invert' />
                        </div>
                        <h4 className='heading-h3 py-2'>{item.title}</h4>
                        <p className='heading-l'>{item.detail}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OurServices