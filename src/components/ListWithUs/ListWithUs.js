import React from 'react'
import './ListWithUs.css'
import {
    Link
} from 'react-router-dom'
import FancyLink from '../FancyLink/FancyLink'
import SmallImageLink from '../SmallImageLink/SmallImageLink'
import ContactForm from '../ContactForm/ContactForm'
export default class ListWithUs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return (
            <div>
                <div className='mch-md relative list-with-us-img mch-md-img'>
                    <div className='dark-blue-glass'></div>
                    <h1 className='title-page raised'>List With Us</h1>
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
                                <span className='current-page'>List with us</span>
                            </nav>
                            <div className='mch relative'>
                                <div className='container-b-info-md' >
                                        <div className='title-and-info-sm '>
                                            <div className='page-info-container'>
                                                <p className='page-info-block nolm'>All of my listings receive professional photography and a custom marketing plan. Did you know that buyers perceive homes with professional photography to be worth, on average, 12% more than the asking price? This quote is from The Wall Street Journal</p>
                                                <p className='page-info-block nolm'>As an experienced real estate professional, I understand the importance of pricing your home correctly and marketing your home adequately to maximize your profit. Please complete the information sheet and I will contact you to about listing and selling your home.</p>
                                                <ContactForm />
                                            </div>
                                            <div className='page-info-long-info'>
                                                <SmallImageLink title="Buyers" imgLink='Buyers.jpg' to='/buyers'/>
                                                <SmallImageLink title="Home Valuation" imgLink='home-interior.jpg' to='/homeValuation'/>
                                                <SmallImageLink title="List With Us" imgLink='contract.jpg' to='/listWithUs'/>
                                                <SmallImageLink title="Sellers" imgLink='family.jpg' to='/seller'/>
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