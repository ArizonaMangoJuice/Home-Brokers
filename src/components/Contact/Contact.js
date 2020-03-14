import React from 'react'
import './Contact.css'
import ContactForm from '../ContactForm/ContactForm'
import { Link } from 'react-router-dom'
import SmallImageLink from '../SmallImageLink/SmallImageLink'

export default class Contact extends React.Component{
  render(){
    return (
      <div>
        <div className='mch-md relative list-with-us-img mch-md-img'>
          <div className='dark-blue-glass'></div>
          <h1 className='title-page raised'>Contact Us</h1>
        </div>  

        <div className='grid-container'>
                    <div className='mch  relative '>
                        <div className='dark-blue-glass'></div>
                        
                        <div className='container-b-info'>
                            <nav className='buyer-links'>
                                <Link className='back-page' to='/'>
                                    <span className='no-margin'>Home</span>
                                </Link>
                                <i className="current-page fas fa-angle-double-right"></i>
                                <span className='current-page'>Contact Us</span>
                            </nav>
                            <div className='mch relative'>
                                <div className='container-b-info-md' >
                                        <div className='title-and-info-sm '>
                                            <div className='page-info-container'>
                                                <p className='page-info-block nolm contact-title'>We would love to hear from you!</p>
                                                <p className='page-info-block nolm'>Send us a message and we’ll get right back in touch.</p>
                                                <p className='page-info-block nolm contact-name'>Noraceli Vizcaino</p>
                                                <a className='contact-us-link footer-links default-number' href='tel:303-350-6089'>
                                                    <i className="fas fa-phone-square-alt contact-padding"></i>  
                                                    303-350-6089
                                                </a>
                                                <a className='contact-us-link footer-links' href='mailto:hello@nv.com'>
                                                    <i className="fas fa-envelope contact-padding"></i>    
                                                    NoraVizcaino@nv.com
                                                </a>
                                                <ContactForm />
                                            </div>

                                            <div className='page-info-long-info'>
                                                <SmallImageLink title="Buyers" imgLink='Buyers.jpg'/>
                                                <SmallImageLink title="Home Valuation" imgLink='home-interior.jpg'/>
                                                <SmallImageLink title="LIST WITH US" imgLink='contract.jpg'/>
                                                <SmallImageLink title="SELLERS" imgLink='family.jpg'/>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
        </div>  
      </div>
    )
  }
}