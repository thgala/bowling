import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header as Heading, Icon, Divider } from 'semantic-ui-react'

import Header from '../components/header'
import PlayerSelection from '../containers/playerSelection'
import StartTheGame from '../components/startTheGame'

class Players extends Component {
  render() {
    return (
      <div>
        <Header title='Players' />
        <Container>
          <div>
            <Heading as='h2'>
              Please specify at least one player to start the game
            </Heading>
            <p>
              By default, the order of the players in the game is equal to the order of player addition.
              You can change the order by clicking <Icon name='arrow up' /> or <Icon name='arrow down' /> buttons
            </p>
          </div>
          <Divider />
          <PlayerSelection />
          <StartTheGame />
        </Container>
      </div>
    );
  }
}

export default Players
