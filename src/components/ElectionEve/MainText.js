import React from 'react'
import './MainText.css'
import VoteLine from '../../img/GettyVoteLineEDIT.png'

const MainText = () => {
    
    return (
        <>
        <div className='img-container'>
        <img id='voteline' src={VoteLine} alt='election eve voting line' />
        </div>
        <h1>Exposing the massive jail</h1>
        <p>Here's some test text</p>
        </>
    )
}

export default MainText