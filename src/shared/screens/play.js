import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Header from '../components/header'
import GamePlay from '../containers/gamePlay'

class Play extends Component {
  render() {
    return (
      <div>
        <Header title='Gameplay' />
        <Container>
          <GamePlay />
        </Container>
      </div>
    )
  }
}

export default Play
