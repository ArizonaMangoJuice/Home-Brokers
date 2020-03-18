import React from 'react'
import './About.css'
import {Link} from 'react-router-dom'

export default class About extends React.Component{
    render(){
        return (
            <div className='alternate-background'>
                <div className='mch-md relative nora-img mch-md-img'>
                    <div className='dark-blue-glass'></div>
                    <h1 className='title-page raised long-title-phone'>About Noraceli</h1>
                </div>  

                <div className='container-b-info'>
                            <nav className='buyer-links'>
                                <Link className='back-page' to='/'>
                                    <span className='no-margin'>Home</span>
                                </Link>
                                <i className="current-page fas fa-angle-double-right"></i>
                                <span className='current-page'>About Noraceli</span>
                            </nav>
                            <div className='mch relative'>
                                <div className='container-b-info-md' >
                                        <div className='title-and-info-sm '>
                                            <div className='page-info-container'>
                                                <p className='page-info-block nolm contact-title'>Get To Know</p>
                                                <p className='page-info-block nolm about-name'>Noraceli Vizcaino</p>
                                                <p className='page-info-block nolm'>Ullamco ipsum ea deserunt veniam pariatur laboris deserunt dolor nulla sint cillum irure velit. Occaecat sit tempor exercitation minim excepteur tempor labore excepteur ut veniam id duis. Commodo nulla magna consequat nisi est minim et sunt dolor do. Ex laborum velit duis anim ut do enim sit velit incididunt ipsum sunt deserunt. Duis in voluptate mollit in. Tempor laboris dolore consectetur eu cillum sit nulla.</p>
                                                <p className='page-info-block nolm'>Consectetur ex fugiat eu ea. Deserunt laborum proident reprehenderit exercitation veniam occaecat exercitation ex non minim est ipsum nostrud. Anim ullamco exercitation fugiat dolore deserunt qui minim labore duis eiusmod ex duis Lorem. Aliquip adipisicing laboris aute mollit occaecat. Eiusmod ex exercitation consequat aute eu enim labore sint exercitation fugiat enim. Laborum adipisicing consequat veniam officia reprehenderit.</p>
                                                <p className='page-info-block nolm'>Sit deserunt ullamco elit elit culpa exercitation consectetur esse aliquip aliquip esse.</p>
                                                <p className='page-info-block nolm'></p>
                                                <p className='page-info-block nolm'></p>
                                                <p className='page-info-block nolm'></p>

                                                {/* <ContactForm /> */}
                                            </div>
                                            <img alt='noraceli vizcaino' className='about-image' src={require('../../images/nora-cropped.jpg')} />
                                            
                                        </div>
                                </div>
                            </div>
                </div>
            </div>
        )
    }
}