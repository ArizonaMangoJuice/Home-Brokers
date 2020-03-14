                    
import React from 'react'
import './Seller.css'
import {
    Link
} from 'react-router-dom'
import FancyLink from '../FancyLink/FancyLink'

export default class Seller extends React.Component{
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
                    <h1 className='title-page raised long-title-phone'>For Sellers</h1>
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
                                <span className='current-page'>For Sellers</span>
                            </nav>
                            <div className='mch relative'>
                                <div className='container-b-info-md' >
                                        <div className='title-and-info-sm block '>
                                            <div className='page-info-container'>
                                                <p className='page-info-long-title seller-title nolm  '>COMPREHENSIVE LISTING SERVICES</p>
                                                <p className='page-info-block seller-quote nolm '>“WHATEVER YOUR REASONS ARE FOR SELLING, MY PROVEN, EFFECTIVE MARKETING STRATEGIES WILL ENSURE THAT YOU GET THE HIGHEST POSSIBLE PRICE FOR YOUR HOME.”</p>
                                                <p className='page-info-block nolm ipad-margin'>The decision to sell a home is often dependent on many factors. Whatever your reasons are for selling, my proven effective marketing strategies will ensure that you get the highest possible price for your home. I guarantee to provide you with professional, ethical and confidential service and keep you fully informed every step of the way. For most families, their home is their largest financial asset, and deciding to sell it is a big decision that involves a lot of preparation and work. When you’re ready to sell it’s important to have an experienced real estate professional handle the details involved in the successful sale of a home for top dollar.</p>
                                                <p className='page-info-block nolm ipad-margin'>As an experienced professional who has helped many Atlanta residents sell their homes, I know how to handle every aspect of the sales process – from strategically marketing and showcasing your home to making sure everything’s signed, sealed and delivered by the closing date.</p>
                                                <p className='page-info-block nolm ipad-margin'>Providing you with comprehensive, high-quality listing service is my top priority. So when you decide to sell your home, please contact me and let’s get started!</p>
                                                <p className='page-info-block nolm ipad-margin'>CLICK BUTTON BELOW TO FIND OUT WHAT YOUR HOME IS WORTH!</p>
                                                <div className='ipad-margin'>
                                                    <FancyLink text='WHAT’S MY HOME WORTH?'/>
                                                </div>
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