import React from 'react'
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
                <a onMouseEnter={() => this.darkScreen(1)} 
                    onMouseLeave={() => this.removeScreen()} 
                    className='a-format' href='#'>                   
                    <div className='picture-box p1 relative'>
                        <div className={this.state.one ? 'dark' : ''}></div>
                        <img className='picture' src={require('../../images/denver.jpg')} />
                        <p className='links-title'>Buyers</p>
                    </div>
                </a>
                <a onMouseEnter={() => this.darkScreen(2)} 
                    onMouseLeave={() => this.removeScreen()} 
                    className='a-format' href='#'>                   
                    <div className='picture-box p1 relative'>
                        <div className={this.state.two ? 'dark' : ''}></div>
                        <img className='picture' src={require('../../images/denver.jpg')} />
                        <p className='links-title'>Buyers</p>
                    </div>
                </a>
                <a onMouseEnter={() => this.darkScreen(3)} 
                    onMouseLeave={() => this.removeScreen()} 
                    className='a-format' href='#'>                   
                    <div className='picture-box p1 relative'>
                        <div className={this.state.three ? 'dark' : ''}></div>
                        <img className='picture' src={require('../../images/denver.jpg')} />
                        <p className='links-title'>Buyers</p>
                    </div>
                </a>
                <a onMouseEnter={() => this.darkScreen(4)} 
                    onMouseLeave={() => this.removeScreen()}
                    className='a-format' href='#'>                   
                    <div className='picture-box p1 relative'>
                        <div className={this.state.four ? 'dark' : ''}></div>
                        <img className='picture' src={require('../../images/denver.jpg')} />
                        <p className='links-title'>Buyers</p>
                    </div>
                </a>
        </div>
        )
    }
}

