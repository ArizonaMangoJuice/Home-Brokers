import React from 'react'
import './Card.css'
export default function Card(){
    return (
        <div className='card-container'>
            <div className='top'>
                <img 
                    className='card-picture' 
                    src={require('../../images/nora-cropped.jpg')} />
            </div>
            <div className='middle'>
                <div className='title'>
                    <p>
                        Level 4
                    </p>
                    <h2>The Barbarian</h2>
                </div>
                <div className='info'>
                    <p>
                        The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. 
                        He has Killer yellow horshoe mustache.
                    </p>
                </div>
            </div>
            <div className='bottom'>
                <div className='social'>
                    <div className='button right-line border-bottom-left-radius' >
                        <a>
                            <p>20</p>    
                        </a>   
                    </div>
                    <div className='button right-line'>
                        <a>
                            <p>16</p>    
                        </a>   
                    </div>
                    <div className='button border-bottom-right-radius'>
                        <a>
                            <p>150</p>    
                        </a>   
                    </div>
                </div>
            </div>
        </div>
    )
}