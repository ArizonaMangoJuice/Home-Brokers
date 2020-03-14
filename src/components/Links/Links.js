import React from 'react'
import {Link} from 'react-router-dom'
import './Links.css'

export default class Links extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            one: false,
            two: false,
            three: false,
            four: false,
        }
    }

    darkScreen(e) {
        if (e == 1) this.setState({one: true})
        if (e == 2) this.setState({two: true})
        if (e == 3) this.setState({three: true})
        if (e == 4) this.setState({four: true})
    } 

    removeScreen(){
        this.setState({
            one:false,
            two:false,
            three:false,
            four:false,
        })
    }

    render(){
        return (
            <div className='links mch'>
                <Link onMouseEnter={() => this.darkScreen(1)} 
                    onMouseLeave={() => this.removeScreen()} 
                    to='/buyers'
                    className='a-format' href='#'>                   
                    <div className='picture-box p1 relative'>
                        <div className={this.state.one ? 'dark' : ''}></div>
                        <img className={this.state.one ? 'picture scale' : 'picture'} src={require('../../images/hugging.jpg')} />
                        <p className='links-title'>Buyers</p>
                    </div>
                </Link>
                <Link onMouseEnter={() => this.darkScreen(2)} 
                    onMouseLeave={() => this.removeScreen()} 
                    to='/homeValuation'
                    className='a-format' href='#'>                   
                    <div className='picture-box p1 relative'>
                        <div className={this.state.two ? 'dark' : ''}></div>
                        <img className={this.state.two ? 'picture scale' : 'picture'} src={require('../../images/home-interior.jpg')} />
                        <p className='links-title'>Home Valuation</p>
                    </div>
                </Link>
                <Link onMouseEnter={() => this.darkScreen(3)} 
                    onMouseLeave={() => this.removeScreen()} 
                    to='/listwithus'
                    className='a-format' href='#'>                   
                    <div className='picture-box p1 relative'>
                        <div className={this.state.three ? 'dark' : ''}></div>
                        <img className={this.state.three ? 'picture scale' : 'picture'} src={require('../../images/contract.jpg')} />
                        <p className='links-title'>List With Us</p>
                    </div>
                </Link>
                <Link onMouseEnter={() => this.darkScreen(4)} 
                    onMouseLeave={() => this.removeScreen()}
                    to='/sellers'
                    className='a-format' href='#'>                   
                    <div className='picture-box p1 relative'>
                        <div className={this.state.four ? 'dark' : ''}></div>
                        <img className={this.state.four ? 'picture scale' : 'picture'} src={require('../../images/family.jpg')} />
                        <p className='links-title'>Sellers</p>
                    </div>
                </Link>
        </div>
        )
    }
}

