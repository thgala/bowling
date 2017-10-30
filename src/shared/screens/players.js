import React, { Component } from 'react'
import { Container, Header as Heading, Icon, Divider } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import Player from '../../modules/player'
import Gameplay from '../../modules/gameplay'

import Header from '../components/header'
import BallButton from '../components/ballButton'
import PlayerList from '../components/playerList'
import PlayerAdd from '../components/playerAdd'


const stateToProps = createStructuredSelector({
  isGameplayReady: Gameplay.selectors.isReady,
  playerList: Player.selectors.list,
})

const actionCreators = dispatch => ({
  playerActions: bindActionCreators(Player.actions, dispatch),
  gameplayActions: bindActionCreators(Gameplay.actions, dispatch),
})

class Players_Scene extends Component {

  render() {
    const
      { playerList, playerActions, isGameplayReady, gameplayActions } = this.props,
      noPlayers = playerList.length === 0

    const initialiseGameplay = noPlayers
      ? (e => e.preventDefault())
      : () => gameplayActions.init(playerList)

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
          <PlayerList
            list={playerList}
            changePlayersOrder={playerActions.changePlayersOrder}
            removePlayer={playerActions.removePlayer}
          />
          <PlayerAdd
            addPlayer={playerActions.addPlayer}
          />
          <BallButton
            disabled={noPlayers}
            title='G O'
            onClick={initialiseGameplay}
          />
          {isGameplayReady && (
            <Redirect to='/play' />
          )}
        </Container>
      </div>
    )
  }
}

export default connect(stateToProps, actionCreators)(Players_Scene)
