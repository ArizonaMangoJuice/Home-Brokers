import React from 'react'
import './FancyLink.css'
import {
    Link
} from 'react-router-dom'

export default class FancyLink extends React.Component{
    constructor(props){
       super(props)
       this.state = {
            hovered: false
       } 
    }

    hovered = () => {
        this.setState({
            hovered: !this.state.hovered
        })
    }

    render(){
        let hovered = this.state.hovered;
        let count = this.props.text.split('').length;
        let backWidth = count * 11.19047619047619;
        console.log('count' + backWidth)

        const fancyBackgroundLength = {
            width: backWidth,
            position: 'absolute',
            left: '0',
            height: '100%',
            backgroundColor: 'royalblue',
            transition: 'ease-in 0.2s',
            zIndex: '-1',
        }

        return (
            <div className='fancy-link relative'>
                <div style={hovered ? fancyBackgroundLength : {}} className={hovered ? '' : 'fancy-background'}></div>
                <Link onMouseEnter={() => this.hovered()}
                    onMouseLeave={() => this.hovered()} 
                    className='fancy-link-settings' 
                    to='/'>
                    {this.props.text}
                </Link>
            </div>
        )
    }
}