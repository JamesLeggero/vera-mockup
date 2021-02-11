import React from 'react'
import Container from 'react-bootstrap/Container'
import './MainText.css'
import VoteLine from '../../img/GettyVoteLineEDIT.png'

const MainText = () => {

    // const handleElectionClick = (event) => {
    //     window.open('https://electioneve2020.com/poll/#/en/demographics/black/')
    // }
    
    return (
        <>
        <div className='img-container'>
        <img id='voteline' src={VoteLine} alt='election eve voting line' />
        </div>
        <Container className='mainText'>
        <h1>Voters of Color on Election Eve</h1>
        <p>This year, Vera participated in the <a target= '_blank' rel="noreferrer" href='https://electioneve2020.com/poll/#/en/demographics/black/'>American Election Eve Poll</a> to learn more about the vote choices and views of thousands of voters nationwide, especially voters of color and voters in battleground states. This data tells a powerful story about the importance of voters of colors, whose views and political power will shape issues of justice, economy, and democracy for years to come. Their voices will be heard.</p>
        <p> In particular, over 80% of Black voters nationwide support reducing funding for law enforcement and <a target= '_blank' rel="noreferrer" href='https://naacp.org/latest/2020-american-election-eve-poll-finds-coronavirus-pandemic-and-racial-justice-among-most-important-issues-for-african-american-voters/'>investing more in
social services and programs proven to reduce violence</a>, and overwhemingly believe in a reduction of the number of people in jails and prisons, as well as allowing people who are incarcerated to use Pell Grants to advance their education and training. At Vera, we are working with community leaders nationwide to organize and empower local communities.</p>
        </Container>
        </>
    )
}

export default MainText