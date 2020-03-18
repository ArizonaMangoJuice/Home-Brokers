import React from 'react'
import './ImageLink.css'
import {
    Link
} from 'react-router-dom'


export default class ImageLink extends React.Component{
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
                    to='/buyers'
                    className='a-format' href='#'>                   
                    <div className='small-picture-link relative'>
                        <div className={this.state.hovered ? 'dark' : ''}></div>
                        <img alt='real estate small ' className={this.state.hovered ? 'small-link-picture scale' : 'small-link-picture'} src={require('../../images/' + this.props.imgLink)} />
                        <p className='small-link-title'>{this.props.title}</p>
                    </div>
            </Link>
        )
    }
}