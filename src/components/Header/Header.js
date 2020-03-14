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

                <nav className='phone-nav'>
                    <div className='burger'>
                        <div className='burger-line'></div>
                        <div className='burger-line'></div>
                        <div className='burger-line'></div>
                    </div>
                    <div className='phone-phone'>
                        <a className="phone-header-link" href="tel:303-350-6089"><i class="fas fa-phone-square-alt "></i></a>
                    </div>
                    <div className='phone-email'>
                        <a class="phone-email-link" href="mailto:hello@nv.com"><i class="fas fa-envelope"></i></a>
                    </div>
                </nav>

            </div>
        </div>
    )
}