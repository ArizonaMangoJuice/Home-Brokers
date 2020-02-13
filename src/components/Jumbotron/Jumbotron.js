import React from 'react'
import './Jumbotron.css'

export default class Jumbotron extends React.Component{
    render(){
        return (
            <div className='jumbotron'>
                <div className='opacity main-cover'>
                    <div className='jumbotron-center'>
                        <h1>Logo</h1>
                        <p>Choose the house that best fits your lifestyle</p>
                    </div>
                </div>
            </div>
        )
    }
}