import React from 'react'

import './Footer.css'

export default function Footer(){
    return (
        <div className='mch footer '>
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
                        Nora Vizcaino
                    </p>
                </div>
                <nav className='footer-nav'>
                    <div className='number'>
                        <a className='footer-links default-number' href='tel:303-350-6089'>
                            <i class="fas fa-phone-square-alt "></i>  
                            303-350-6089
                        </a>
                    </div>
                    <div className='email'>
                        <a className='footer-links' href='mailto:hello@nv.com'>
                            <i class="fas fa-envelope"></i>    
                            NoraVizcaino@nv.com
                        </a>
                    </div>
                    <div className='social'>
                        <a href='#'><i class="fab fa-facebook-f"></i></a>
                        <a href='#'><i class="fas fa-calendar-alt"></i></a>
                        <a href='#'><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </nav>
            </div>
        </div>
    )
}