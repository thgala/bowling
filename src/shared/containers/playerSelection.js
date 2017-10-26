import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'

import PlayerList from '../components/playerList'
import PlayerAdd from '../components/playerAdd'

import Player from '../../modules/player'


const stateToProps = createStructuredSelector({
  playerList: Player.selectors.playerList,
})

const actionCreators = dispatch => ({
  playerActions: bindActionCreators(Player.actions, dispatch),
})

class PlayerSelection_Connect extends Component {
  render() {
    const
      { playerList, playerActions } = this.props

    return (
      <div>
        <PlayerList
          list={playerList}
          changePlayersOrder={playerActions.changePlayersOrder}
          removePlayer={playerActions.removePlayer}
        />
        <PlayerAdd
          addPlayer={playerActions.addPlayer}
        />
      </div>
    );
  }
}

export default connect(stateToProps, actionCreators)(PlayerSelection_Connect)
