import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Header from '../components/header'
import GameInit from '../containers/gameInit'

class Play extends Component {
  render() {
    return (
      <div>
        <Header title='Gameplay' />
        <Container>
          <GameInit />
        </Container>
      </div>
    )
  }
}

export default Play
