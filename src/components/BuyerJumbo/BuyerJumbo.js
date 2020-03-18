import React from 'react'
import './BuyerJumbo.css'

import {Link} from 'react-router-dom'
import ImageLink from '../ImageLink/ImageLink'

export default function BuyerJumbo(){
    return (
    <div>
        <div className='mch-md buyer-img'>
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
                    <div className='title-and-info readable-color'>
                        <div className='page-info-container'>
                            <p className='page-info-title relative'>BUYERS</p>
                            <p className='page-info-long-title'>HIGH-QUALITY BUYER SERVICES</p>
                            <p className='page-info-block'>“MY COMPREHENSIVE, HIGH-QUALITY SERVICES CAN SAVE YOU TIME AND MONEY, AS WELL AS MAKE THE EXPERIENCE MORE ENJOYABLE AND LESS STRESSFUL.”</p>
                        </div>
                        <div className='page-info-long-info'>
                            <p>Whether you’re looking for your first home, your dream home or an investment property, I’m committed to providing you with the highest quality buyer service. When making the type of investment that buying a home requires, you deserve to have all the latest market information and the very best advice, both of which I can provide. Buying a home is an exciting and complex adventure. It can also be a very time-consuming and costly one if you’re not familiar with all aspects of the process, and don’t have all the best information and resources at hand.</p>
                            <p>One of my specialties is representing the best interests of Atlanta area buyers throughout the home buying process. My comprehensive, high-quality services can save you time and money, as well as make the experience more enjoyable and less stressful. If you’re like most people, buying a home is the biggest investment you will ever make. So whether you’re buying a starter home, your dream home or an investment property, why not take advantage of my experience as a local market expert for Atlanta to make the most informed decisions you can, every step of the way?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mch for-buyers-color alternate-background relative'>
                <div className='container-b-info ' >
                        <div className='title-and-info '>
                            <div className='page-info-container'>
                                <p className='page-info-title relative bb'>WOULD YOU LIKE TO</p>
                                <p className='page-info-long-title'>LEARN MORE ABOUT THE PROCESS?</p>
                                <p className='page-info-block'>THIS DETAILED HOME BUYING GUIDE WILL ADDRESS A FEW OF THE KEY QUESTIONS THAT MOST BUYERS HAVE.</p>
                            </div>
                            <div className='page-info-long-info'>
                                <ImageLink linkName='financialObligation' title="FINANCIAL OBLIGATIONS" imgLink='hugging.jpg'/>
                                <ImageLink title="A ROAD MAP OF THE ENTIRE PROCESS" imgLink='denver.jpg'/>
                                <ImageLink linkName='youShouldHire' title="WHY YOU SHOULD HIRE A REAL ESTATE PROFESSIONAL" imgLink='family.jpg'/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

    )
}