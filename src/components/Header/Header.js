import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header () {
    return (
        <div className='header-container'>
            <div className='relative'>
                <div className='logo-container'>
                    <Link to='/' className='logo-link'>
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
                    </Link>
                </div>
                <div className='phone-container'>
                        <a href='tel:303-350-6089'>303-350-6089</a>
                </div>

                <div className='nav container borderXwidth'>
                    <Link to='/contact'>
                        Houses
                    </Link>
                    <Link to='/contact'>
                        Contact
                    </Link>
                    <Link to='/about'>
                        About
                    </Link>
                     
                </div>
            </div>
        </div>
    )
}