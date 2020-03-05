import React from 'react'
import './Header.css'

export default function Header () {
    return (
        <div className='header-container'>
            <div className='relative'>
                <div className='logo-container'>
                    <div className='outer-box relative'>
                        <p className='n'>
                            N
                        </p>
                        <div className='line'></div>
                        <div className='bottom-line'></div>
                        <p className='v'>
                            V
                        </p>
                    </div>
                </div>

                <div className='nav container borderXwidth'>
                    <a>Houses</a> 
                    <a>Contact</a> 
                    <a>About</a> 
                </div>
            </div>
        </div>
    )
}