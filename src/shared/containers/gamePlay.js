import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'

import FrameTable from '../components/frameTable'

import Player from '../../modules/player'
import Frame from '../../modules/frame'


const stateToProps = createStructuredSelector({
  framesGroupedByPlayerId: Frame.selectors.groupedByPlayerId,
  framesGroupedByNumber: Frame.selectors.groupedByNumber,
})

const actionCreators = dispatch => ({
  frameActions: bindActionCreators(Frame.actions, dispatch),
})

class GamePlay_Connect extends Component {

  constructor(props) {
    super(props)

    this.generateFrames = this.generateFrames.bind(this)
  }

  componentWillMount() {
    const
      { playerList } = this.props

    if(playerList.length !== 0){
      this.generateFrames()
    }
  }

  generateFrames() {
    const
      { playerList, totalFrames, rollsPerFrame, rollsInLastFrame } = this.props,
      { frameActions } = this.props

    frameActions.initFrameList(playerList, totalFrames, rollsPerFrame, rollsInLastFrame)
  }

  render() {
    const
      { playerList, framesGroupedByPlayerId, framesGroupedByNumber } = this.props

    return (
      <div>
        <FrameTable
          playerList={playerList}
          framesGroupedByPlayerId={framesGroupedByPlayerId}
          framesGroupedByNumber={framesGroupedByNumber}
        />
      </div>
    );
  }
}

GamePlay_Connect.defaultProps = {
  playerList: [],
  totalFrames: 10,
  rollsPerFrame: 2,
  rollsInLastFrame: 3,
}

GamePlay_Connect.propTypes = {
  playerList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  totalFrames: PropTypes.number,
  rollsPerFrame: PropTypes.number,
  rollsInLastFrame: PropTypes.number,
}

export default connect(stateToProps, actionCreators)(GamePlay_Connect)
