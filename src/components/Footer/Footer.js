import React from 'react'
import {
    Link
} from 'react-router-dom'
import './Footer.css'

export default function Footer(){
    return (
        <div className=' footer '>
            <div className='relative footer-container'>
                <div className='logo-container footer-logo'>
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
                <div className='name'>
                    <p>
                        Noraceli Vizcaino
                    </p>
                </div>
                <nav className='footer-nav'>
                    <div className='number'>
                        <a className='footer-links default-number' href='tel:303-350-6089'>
                            <i className="fas fa-phone-square-alt "></i>  
                            303-350-6089
                        </a>
                    </div>
                    <div className='email'>
                        <a className='footer-links' href='mailto:hello@nv.com'>
                            <i className="fas fa-envelope"></i>    
                            NoraVizcaino@nv.com
                        </a>
                        
                    </div>
                    <div className='social'>
                        <a href='#'><i className="fab fa-facebook-f"></i></a>
                        <a href='#'><i className="fas fa-calendar-alt"></i></a>
                        <a href='#'><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </nav>
                <div className='main-links'>
                        <Link to='/' href='#'>Home</Link>
                        <Link to='/about' href='#'>About Noraceli</Link>
                        <Link to='/seller' href='#'>Sellers</Link>
                        <Link to='/homeValuation' href='#'>Home Valuation</Link>
                        <Link to='/buyers' href='#'>Buyers</Link>
                        <Link to='/listWithUs' href='#'>List With Us</Link>
                        <Link to='/contact' href='#'>Contact</Link>
                </div>
                <div className='copyright'>
                    <p>© 2020. Noraceli Vizcaino. All rights reserved. Sitemap | Real Estate Website Design by <a href='https://github.com/ArizonaMangoJuice'>AMJ</a></p>
                </div>
            </div>
        </div>
    )
}