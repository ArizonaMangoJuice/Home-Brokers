import React from 'react'
import './BuyerJumbo.css'

import {Link} from 'react-router-dom'

export default function BuyerJumbo(){
    return (
    <div>
        <div className='mch-md'>
            <h1 className='title-page'>Buyers</h1>
        </div>
        <div className='grid-container'>
            <div className='mch for-buyers-1 relative '>
                <div className='dark-blue-glass'></div>
                
                <div className='container-b-info'>
                    <nav className='buyer-links'>
                        <Link className='back-page' to='/'>
                            <span className='no-margin'>Home</span>
                        </Link>
                        <i className="current-page fas fa-angle-double-right"></i>
                        <span className='current-page'>Buyers</span>
                    </nav>
                </div>
            </div>
            <div className='mch for-buyers-color relative'>

            </div>
        </div>
    </div>

    )
}