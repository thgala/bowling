import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import FrameTable from '../components/frameTable'

import Player from '../../modules/player'
import Frame from '../../modules/frame'


const stateToProps = createStructuredSelector({
  playerList: Player.selectors.playerList,
})

class FrameTable_Connect extends Component {
  render() {
    const
      { playerList } = this.props

    return (
      <div>
        <FrameTable
          playerList={playerList}
          totalFrames={Frame.constants.TOTAL_FRAMES}
        />
      </div>
    );
  }
}

export default connect(stateToProps)(FrameTable_Connect)
