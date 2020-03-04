import React from 'react'
import './Jumbotron.css'

export default function Jumbotron(){
    return (
        <div className='full-screen'>
            <video className='video-background' autoPlay muted loop>
                <source
                    src={require('../../images/Home.mp4')} type='video/mp4'/>
            </video>

            <div className='video-overlay'>
                <h1>Choose The House <br></br> That Best Fits Your Lifestyle</h1>
            </div>
        </div>
    )
}