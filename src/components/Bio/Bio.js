import React from 'react'
import './Bio.css'
import Card from '../Card/Card'

export default function Bio (){
    return(
        <div className='mch padding-top-bio relative'>
            <div className='dark-blue-glass'></div>
            <div className='bio-container relative '>
                <Card/>
                <div className='goal'>
                    <h2>Lorem Ipsum</h2>
                    <p>Adipisicing consectetur magna irure non ea fugiat. Anim officia ipsum commodo minim. Minim pariatur elit est non exercitation.</p>
                    <p>Magna quis sint esse consectetur. Mollit culpa fugiat voluptate sit nisi est. Nostrud reprehenderit cillum amet officia aliqua labore cupidatat eiusmod voluptate minim. Irure Lorem cillum labore commodo irure mollit. Id ea duis sit duis dolor magna officia. Ex officia elit quis nulla exercitation aliquip duis.</p>
                    <p>Magna quis sint esse consectetur. Mollit culpa fugiat voluptate sit nisi est. Nostrud reprehenderit cillum amet officia aliqua labore cupidatat eiusmod voluptate minim. Irure Lorem cillum labore commodo irure mollit. Id ea duis sit duis dolor magna officia. Ex officia elit quis nulla exercitation aliquip duis.</p>
                </div>
            </div>
            
        </div>
    )
}