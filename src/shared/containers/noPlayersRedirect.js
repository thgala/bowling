import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { createStructuredSelector } from 'reselect'

import StartTheGame from '../components/startTheGame'

import Player from '../../modules/player'


function NoPlayersRedirect_Wrap(Component){
  const stateToProps = createStructuredSelector({
    playerList: Player.selectors.playerList,
  })

  class NoPlayersRedirect_Connect extends Component {
    render() {
      const
        { playerList } = this.props

      return playerList.length === 0
        ? <Redirect to='/players'/>
        : <Component {...this.props} />
    }
  }

  return connect(stateToProps)(NoPlayersRedirect_Connect)
}

export default NoPlayersRedirect_Wrap
