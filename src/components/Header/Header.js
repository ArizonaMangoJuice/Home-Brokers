import React from 'react'
import './Header.css'

export default class Header extends React.Component{
    render(){
        return (
            <nav className='header'>
                <div className='logo'>Logo</div>
                <nav className='nav-button-container'>
                    <div className='nav-button'>Houses</div>
                    {/* <div className='nav-button'></div> */}
                    <div className='nav-button'>About</div>
                    <div className='nav-button'>Contact</div>
                </nav>
            </nav>
        )
    }
}