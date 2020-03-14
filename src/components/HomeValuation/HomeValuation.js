import React from 'react'
import './HomeValuation.css'
import {
    Link
} from 'react-router-dom'
import SmallImageLink from '../SmallImageLink/SmallImageLink'
import FancyLink from '../FancyLink/FancyLink'
export default class HomeValuation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return (
            <div>
                <div>
                    <div className='mch-md relative home-val-img mch-md-img'>
                        <div className='dark-blue-glass'></div>
                        <h1 className='title-page raised'>Home Valuation</h1>
                    </div>                    
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
                                <span className='current-page'>Home Valuation</span>
                            </nav>
                            <div className='mch relative'>
                                <div className='container-b-info-md' >
                                        <div className='title-and-info-sm '>
                                            <div className='page-info-container'>
                                                <p className='page-info-block nolm'>I know that selling your home is a major life event, and in today’s market, is a multifaceted effort. That’s why I make it easy for my clients to count on me to manage the entire process for them. My unparalleled marketing strategies will maximize exposure and help you sell your home for the highest possible price in the shortest amount of time. I am dedicated to providing you great service and the least amount of stress.</p>
                                                <p className='page-info-block nolm'>An automatic home valuation tool uses proprietary and public sales data, along with market trends to provide you with an estimate of what your home may be worth today. Click the link below. In order to fully asses your property value I will need to schedule a custom marketing appointment.</p>
                                                <p className='page-info-block nolm'>Click the button for a home valuation:</p>
                                                <FancyLink text='WHAT’S MY HOME WORTH?'/>
                                                <FancyLink text='GET UP TO DATE MARKET INFORMATION FOR YOUR HOME'/>
                                                
                                            </div>
                                            <div className='page-info-long-info'>
                                                <SmallImageLink title="BUYERS" imgLink='Buyers.jpg'/>
                                                <SmallImageLink title="HOME VALUATION" imgLink='home-interior.jpg'/>
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