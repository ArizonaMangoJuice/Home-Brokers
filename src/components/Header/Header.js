import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menu: false
        }
    }

    mobile = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render(){
    return (
        <div className='header-container relative'>
            <div className={this.state.menu ? 'mobile-menu' : 'hidden'} >
                <div className='mobile-links'>
                    <nav className='burger-links-nav'>
                        <Link className='burger-links' to='/contact'>
                            Houses
                        </Link>
                        
                        <Link className='burger-links' to='/about'>
                            About
                        </Link>

                        <Link className='burger-links' to='/contact'>
                            Contact Us
                        </Link>
                    </nav>
                </div>
                <button onClick={() => this.mobile()} className='mobile-hidden-button'>

                </button>
            </div>
            <div className='relative'>
                <div className='logo-container'>
                    <Link to='/' className='logo-link'>
                    <div className='outer-box relative'>
                        <p className='n'>
                            N
                        </p>
                        <div className='line'></div>
                        <div className='bottom-line'></div>
                        <p className='v'>
                            V
                        </p>
                    </div>
                    </Link>
                </div>
                <div className='phone-container'>
                        <a href='tel:303-350-6089'>303-350-6089</a>
                </div>

                <div className='nav container borderXwidth'>
                    <Link to='/contact'>
                        Houses
                    </Link>
                    <Link to='/contact'>
                        Contact
                    </Link>
                    <Link to='/about'>
                        About
                    </Link>
                </div>

                <nav className='phone-nav'>
                    <button onClick={() => this.mobile()} className='burger'>
                        <div className='burger-line'></div>
                        <div className='burger-line'></div>
                        <div className='burger-line'></div>
                    </button>
                    <div className='phone-phone'>
                        <a className="phone-header-link" href="tel:303-350-6089"><i className="fas fa-phone-square-alt "></i></a>
                    </div>
                    <div className='phone-email'>
                        <a className="phone-email-link" href="mailto:hello@nv.com"><i className="fas fa-envelope"></i></a>
                    </div>
                </nav>

            </div>
        </div>
    )
}
}