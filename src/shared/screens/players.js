import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header as Heading, Icon, Divider } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import Player from '../../modules/player'

import Header from '../components/header'
import BallButton from '../components/ballButton'
import PlayerList from '../components/playerList'
import PlayerAdd from '../components/playerAdd'


const stateToProps = createStructuredSelector({
  playerList: Player.selectors.list,
})

const actionCreators = dispatch => ({
  playerActions: bindActionCreators(Player.actions, dispatch),
})

class Players_Scene extends Component {
  render() {
    const
      { playerList, playerActions } = this.props

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
          <Link to='/play'>
            <BallButton
              disabled={playerList.length === 0}
              title='G O'
            />
          </Link>
        </Container>
      </div>
    )
  }
}

export default connect(stateToProps, actionCreators)(Players_Scene)
