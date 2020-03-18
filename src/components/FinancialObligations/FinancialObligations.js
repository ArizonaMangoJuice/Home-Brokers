import React from 'react'
import './FinancialObligations.css'
import SmallImageLink from '../SmallImageLink/SmallImageLink'
import { Link } from 'react-router-dom'

export default class FinancialObligations extends React.Component{
    render(){
        return (
            <div>
                <div className='mch-md relative list-with-us-img mch-md-img'>
                    <div className='dark-blue-glass'></div>
                    <h1 className='title-page raised'>Financial Obligations</h1>
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
                                <span className='current-page'>Financial Obligations</span>
                            </nav>
                            <div className='mch relative'>
                                <div className='container-b-info-md' >
                                        <div className='title-and-info-sm '>
                                            <div className='page-info-container'>
                                                <p className='page-info-block nolm ipad-margin'>Before you even begin to start saving properties and calling agents, you have to get your finances in order. That begins with cleaning up old debts, improving your credit score, and building up a healthy savings to put down a 20% down payment if at all possible. Get this done first.</p>
                                                <p className='page-info-block nolm ipad-margin'>At the very least, most banks will require 5% down. Just know that lenders will typically require you to pay private mortgage insurance (PMI) if your down payment is less than 20%</p>
                                                <p className='page-info-block nolm ipad-margin'>Once you have your financial ducks in a row, it’s time to start preparing for the house hunt. The first step is actually going to a bank and getting pre-approved for a home loan.</p>
                                                <p className='page-info-block nolm ipad-margin'>Keep in mind that pre-approval and pre-qualification are two different things:</p>

                                                <ul className='page-info-block nolm ipad-margin'>
                                                    <li>Pre-Qualification: Only tells you how much you can afford for a home.</li>
                                                    <li>Pre-Approval: Tells you how much the bank will guarantee to lend you for a home.</li>
                                                </ul>
                                                
                                                <p className='page-info-block nolm ipad-margin'>When you go to an open house with a pre-approval letter in hand, the seller knows that you are a serious buyer. Plus knowing exactly how much you are approved for can help you stay within your budget. When budgeting for your home purchase, don’t forget to include other costs that will arise like:</p>

                                                <ul className='page-info-block nolm ipad-margin'>
                                                    <li>Inspections</li>
                                                    <li>Repairs</li>
                                                    <li>Closing Costs</li>
                                                    <li>Contingencies</li>
                                                    <li>And Other Fees</li>
                                                </ul>

                                                
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