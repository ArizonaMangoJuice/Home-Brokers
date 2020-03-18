import React from 'react'
import './YouShouldHire.css'
import SmallImageLink from '../SmallImageLink/SmallImageLink'
import { Link } from 'react-router-dom'

export default class YouShouldHire extends React.Component{
    render(){
        return (
            <div>
                <div className='mch-md relative list-with-us-img mch-md-img'>
                    <div className='dark-blue-glass'></div>
                    <h1 className='title-page raised long-words-size'>Why You Should Hire A Real Estate Professional</h1>
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
                                <span className='current-page'>Why You Should Hire A Real Estate Professional</span>
                            </nav>
                            <div className='mch relative'>
                                <div className='container-b-info-md' >
                                        <div className='title-and-info-sm '>
                                            <div className='page-info-container'>
                                                <p className='page-info-block nolm ipad-margin'>Very few people attempt to buy their first home without the aid of a qualified agent. Those who do take on the task themselves often believe that they will save on costs. However, where an agent matters most is during negotiations. They are in the best position of all to negotiate on your behalf.</p>
                                                <p className='page-info-block nolm ipad-margin'>In fact, buyers who do not work with an agent tend to spend upwards of $10,000 more for a home than those who can call on the skillful negotiation prowess of a top real estate agent. If you do enough research, you could find the home that you want.</p>
                                                <p className='page-info-block nolm ipad-margin'>But to get it at the price that is best for you, you need an expert. Contact Quiana today to help you get the best deal!</p>
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