import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import StartTheGame from '../components/startTheGame'

import Player from '../../modules/player'


const stateToProps = createStructuredSelector({
  playerList: Player.selectors.playerList,
})

class StartTheGame_Connect extends Component {
  render() {
    const
      { playerList } = this.props

    return (
      <div>
        <StartTheGame
          disabled={playerList.length === 0}
        />
      </div>
    );
  }
}

export default connect(stateToProps)(StartTheGame_Connect)
