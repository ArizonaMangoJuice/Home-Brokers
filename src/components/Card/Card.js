import React from 'react'
import './Card.css'
export default function Card(){
    return (
        <div className='card-container'>
            <div className='top relative'>
                <div className='glass cover-box'> </div>
                <img 
                    className='card-picture' 
                    src={require('../../images/nora-cropped.jpg')} />
            </div>
            <div className='middle'>
                <div className='title'>
                    <p>
                        Realtor
                    </p>
                    <h2>Noraceli Vizcaino</h2>
                </div>
                <div className='info'>
                    <p>
                        Noraceli Vizcaino has been a licensed since 2014. She is part of Denver Metro Association of Realtors.
                        Noraceli is fluent in English and Spanish.
                    </p>
                </div>
            </div>
            <div className='bottom'>
                <div className='social'>
                    <div className='button right-line border-bottom-left-radius' >
                        <a href='#'>
                            <i className="fas fa-phone-square-alt"></i>
                        </a>   
                    </div>
                    <div className='button right-line'>
                        <a href='#'>
                            <i className="fab fa-facebook-square"></i>
                        </a>   
                    </div>
                    <div className='button border-bottom-right-radius'>
                        <a href='#'>
                            <i className="fas fa-map-marker-alt"></i>
                        </a>   
                    </div>
                </div>
            </div>
        </div>
    )
}