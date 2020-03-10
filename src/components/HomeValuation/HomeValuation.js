import React from 'react'
import './HomeValuation.css'
import {
    Link
} from 'react-router-dom'

export default class HomeValuation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return (
            <div>
                <div>
                    <div className='mch-md relative home-val-img'>

                        <h1 className='title-page'>Home Valuation</h1>
                    </div>                    
                </div>
            </div>
        )
    }
}