import React from 'react'
import './Me.css'

export default class Me extends React.Component{
    render(){
        return (
            <div className='full-card'>
                <div className='nora-side'>
                    <div className='bio-side'>
                        <img className='nora' src={require('../../images/nora-cropped.jpg')}></img>
                        <div >
                            <p>Labore eu culpa culpa Lorem minim et velit.</p>
                            <p>Eu cupidatat occaecat consequat dolore laboris incididunt quis irure laborum sunt laborum consequat laborum. Ullamco esse aute labore mollit ullamco fugiat ad quis dolor ipsum officia exercitation. Consectetur consectetur veniam elit proident velit eu. Excepteur amet ad adipisicing culpa tempor ullamco ea cillum sint. Aute quis velit commodo aliqua nisi sint veniam culpa.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}