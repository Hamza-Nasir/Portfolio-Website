import React from 'react'

import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { socials } from '../constants'

function Socials() {
    return (
        <div>
            <h3 className={`${styles.sectionHeadText} text-center`}>
                Find me
            </h3>
            <div className='xl:mt-12 xl:flex-row flex-col-reverse
    flex gap-10 justify-evenly overflow-hidden bg-red'>
                {
                    socials.map((social, index) => (
                        <button className='w-full h-[50px] rounded-xl font-bold border-2 border-white hover:bg-[#1A1A1A] '>


                            <a href={social.url} target="_blank">
                                <div className='flex flex-row items-center'>
                                    <p className='flex-1'>{social.name}</p>
                                    <img
                                        src={social.icon}
                                        className='w-10 h-10 pr-2'
                                    />
                                </div>
                            </a>





                        </button>
                    ))
                }
            </div>
        </div>

    )
}

export default SectionWrapper(Socials, "")