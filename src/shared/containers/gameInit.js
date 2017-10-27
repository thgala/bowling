import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import GamePlay from './gamePlay'

import Player from '../../modules/player'
import Frame from '../../modules/frame'


const stateToProps = createStructuredSelector({
  playerList: Player.selectors.playerList,
})

class GameInit_Connect extends Component {
  render() {
    const
      { playerList } = this.props

    return (
      <div>
        <GamePlay
          playerList={playerList}
          totalFrames={Frame.constants.TOTAL_FRAMES}
          rollsPerFrame={Frame.constants.ROLLS_PER_FRAME}
          rollsInLastFrame={Frame.constants.ROLLS_IN_LAST_FRAME}
        />
      </div>
    );
  }
}

export default connect(stateToProps)(GameInit_Connect)
