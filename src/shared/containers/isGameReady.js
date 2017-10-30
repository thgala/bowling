import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { createStructuredSelector } from 'reselect'

import Gameplay from '../../modules/gameplay'


function IsGameReady_Wrap(C, to = '/players'){
  const stateToProps = createStructuredSelector({
    isReady: Gameplay.selectors.isReady,
  })

  class IsGameReady_Connect extends Component {
    render() {
      const
        { isReady } = this.props

      return !isReady
        ? <Redirect to={to} />
        : <C />
    }
  }

  return connect(stateToProps)(IsGameReady_Connect)
}

export default IsGameReady_Wrap
