import React from 'react'
import './SmallImageLink.css'
import {
    Link
} from 'react-router-dom'


export default class SmallImageLink extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hovered: false
        }
    }

    darkScreen() {
        this.setState({hovered: !this.state.hovered})
    } 

    render(){
        return (
            <Link onMouseEnter={() => this.darkScreen()} 
                    onMouseLeave={() => this.darkScreen()} 
                    to={this.props.to}
                    className='a-format' href='#'>                   
                    <div className='smaller-picture-link relative'>
                        <div className={this.state.hovered ? 'dark' : ''}></div>
                        <img className={this.state.hovered ? 'smaller-link-picture scale' : 'smaller-link-picture'} src={require('../../images/' + this.props.imgLink)} />
                        <p className='smaller-link-title'>{this.props.title}</p>
                    </div>
            </Link>
        )
    }
}