import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'

import FrameTable from '../components/frameTable'
import BallButton from '../components/ballButton'

import Player from '../../modules/player'
import Gameplay from '../../modules/gameplay'


const stateToProps = createStructuredSelector({
  playerList: Player.selectors.list,
  activePlayerId: Gameplay.selectors.activePlayerId,
  activeFrameNumber: Gameplay.selectors.activeFrameNumber,
  framesPerPlayer: Gameplay.selectors.framesPerPlayer,
  framesNumberList: Gameplay.selectors.framesNumberList,
  isRolling: Gameplay.selectors.isRolling,
})

const actionCreators = dispatch => ({
  gameplayActions: bindActionCreators(Gameplay.actions, dispatch),
})

class GamePlay_Connect extends Component {

  componentWillMount() {
    const
      { playerList, gameplayActions } = this.props

    if(playerList.length !== 0){
      gameplayActions.init(playerList)
    }
  }

  render() {
    const
      { playerList,
        activePlayerId,
        activeFrameNumber,
        framesPerPlayer,
        framesNumberList,
        gameplayActions,
        isRolling,
      } = this.props

    return (
      <div>
        <FrameTable
          playerList={playerList}
          activePlayerId={activePlayerId}
          activeFrameNumber={activeFrameNumber}
          framesPerPlayer={framesPerPlayer}
          framesNumberList={framesNumberList}
        />
        <BallButton
          loading={isRolling}
          onClick={gameplayActions.rollTheBall}
          title='R O L L'
        />
      </div>
    );
  }
}

export default connect(stateToProps, actionCreators)(GamePlay_Connect)
