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

                    </div>
                    <div className='email'>

                    </div>
                    <div className='social'>

                    </div>
                </nav>
            </div>
        </div>
    )
}