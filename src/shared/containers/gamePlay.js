import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'

import FrameTable from '../components/frameTable'
import BallButton from '../components/ballButton'
import { Divider, Header } from 'semantic-ui-react'

import Gameplay from '../../modules/gameplay'
const { getRandomInt } = Gameplay.helpers
const { TOTAL_PINS, MAX_ROLLS_PER_FRAME, MAX_ROLLS_IN_LAST_FRAME } = Gameplay.constants


const stateToProps = createStructuredSelector({
  scoresPerPlayer: Gameplay.selectors.scoresPerPlayer,
  framesNumberList: Gameplay.selectors.framesNumberList,
  pinsLeft: Gameplay.selectors.pinsLeft,
  lastScore: Gameplay.selectors.lastScore,
  activeFrameIndex: Gameplay.selectors.activeFrameIndex,
  activePlayerIndex: Gameplay.selectors.activePlayerIndex,
  activeRollIndex: Gameplay.selectors.activeRollIndex,
  isOver: Gameplay.selectors.isOver,
})

const actionCreators = dispatch => ({
  gameplayActions: bindActionCreators(Gameplay.actions, dispatch),
})

class GamePlay_Connect extends Component {

  constructor(props) {
    super(props)
    this.roll = this.roll.bind(this)
    this.rollInLastFrame = this.rollInLastFrame.bind(this)

    this.isStrike = this.isStrike.bind(this)
    this.isSpare = this.isSpare.bind(this)
    this.isLastPlayerInFrameCell = this.isLastPlayerInFrameCell.bind(this)
    this.isLastRollInFrame = this.isLastRollInFrame.bind(this)
    this.isLastFrame = this.isLastFrame.bind(this)
    this.detectNextPlayer = this.detectNextPlayer.bind(this)
    this.detectNextFrame = this.detectNextFrame.bind(this)
    this.detectNextRoll = this.detectNextRoll.bind(this)
  }

  isStrike(score) {
    return score === TOTAL_PINS
  }

  isSpare(score) {
    const { activeRollIndex, pinsLeft } = this.props
    return activeRollIndex !== 0 && (pinsLeft - score === 0)
  }

  isLastPlayerInFrameCell() {
    const { activePlayerIndex, scoresPerPlayer } = this.props
    return (activePlayerIndex + 1) === scoresPerPlayer.length
  }

  isLastFrame() {
    const { activeFrameIndex, framesNumberList } = this.props
    return (activeFrameIndex + 1) === framesNumberList.length
  }

  isLastRollInFrame(maxRolls) {
    const { activeRollIndex } = this.props
    return (activeRollIndex + 1) === maxRolls
  }

  detectNextPlayer() {
    const { activePlayerIndex } = this.props
    return this.isLastPlayerInFrameCell() ? 0 : (activePlayerIndex + 1)
  }

  detectNextFrame() {
    const { activeFrameIndex } = this.props
    return this.isLastPlayerInFrameCell() ? (activeFrameIndex + 1) : activeFrameIndex
  }

  detectNextRoll(maxRolls) {
    const { activeRollIndex } = this.props
    return this.isLastRollInFrame(maxRolls) ? 0 : (activeRollIndex + 1)
  }

  roll(){
    const {
      pinsLeft,
      activePlayerIndex,
      activeFrameIndex,
      activeRollIndex,
      gameplayActions,
    } = this.props
    const score = getRandomInt(0, pinsLeft)

    let nextPlayerIndex
    let nextFrameIndex
    let nextRollIndex
    let nextPinsLeft

    if(
      (activeRollIndex === 0 && this.isStrike(score)) ||
      this.isSpare(score)
    ) {
      nextPlayerIndex = this.detectNextPlayer()
      nextFrameIndex = this.detectNextFrame()
      nextRollIndex = 0
      nextPinsLeft = TOTAL_PINS
    } else {
      nextPlayerIndex = this.isLastRollInFrame(MAX_ROLLS_PER_FRAME) ? this.detectNextPlayer() : activePlayerIndex
      nextFrameIndex = this.isLastRollInFrame(MAX_ROLLS_PER_FRAME) ? this.detectNextFrame() : activeFrameIndex
      nextRollIndex = this.detectNextRoll(MAX_ROLLS_PER_FRAME)
      nextPinsLeft = this.isLastRollInFrame(MAX_ROLLS_PER_FRAME) ? TOTAL_PINS : (pinsLeft - score)
    }

    gameplayActions.updateStatus(score, nextPlayerIndex, nextFrameIndex, nextRollIndex, nextPinsLeft)
    gameplayActions.addScoreToFrame(score, activePlayerIndex, activeFrameIndex)
  }

  rollInLastFrame() {
    const {
      pinsLeft,
      activePlayerIndex,
      activeFrameIndex,
      activeRollIndex,
      gameplayActions,
      lastScore,
      isOver,
    } = this.props

    if( !isOver ){
      const score = getRandomInt(0, pinsLeft)

      let nextPlayerIndex
      let nextFrameIndex
      let nextRollIndex
      let nextPinsLeft
      let nextIsOver = false

      if(score === 10 && activeRollIndex !== 2) {
        nextRollIndex = (activeRollIndex + 1)
        nextPlayerIndex = activePlayerIndex
        nextPinsLeft = TOTAL_PINS
      }

      if(activeRollIndex === 0 && score !== 10) {
        nextRollIndex = (activeRollIndex + 1)
        nextPlayerIndex = activePlayerIndex
        nextPinsLeft = (pinsLeft - score)
      }

      if(activeRollIndex === 1 && (pinsLeft - score) !== 0) {
        const isBonus = lastScore === TOTAL_PINS

        if(isBonus){
          nextRollIndex = (activeRollIndex + 1)
          nextPlayerIndex = activePlayerIndex
        } else {
          nextIsOver = this.isLastPlayerInFrameCell()
          nextRollIndex = 0
          nextPlayerIndex = nextIsOver ? activePlayerIndex : this.detectNextPlayer()          
        }

        nextPinsLeft = TOTAL_PINS
      }

      if(activeRollIndex === 1 && (pinsLeft - score === 0)) {
        nextRollIndex = (activeRollIndex + 1)
        nextPlayerIndex = activePlayerIndex
        nextPinsLeft = TOTAL_PINS
      }

      if(activeRollIndex === 2) {
        nextIsOver = this.isLastPlayerInFrameCell()

        nextRollIndex = 0
        nextPlayerIndex = nextIsOver ? activePlayerIndex : this.detectNextPlayer()
        nextPinsLeft = TOTAL_PINS
      }

      gameplayActions.updateStatus(score, nextPlayerIndex, activeFrameIndex, nextRollIndex, nextPinsLeft, nextIsOver)
      gameplayActions.addScoreToFrame(score, activePlayerIndex, activeFrameIndex)
    }
  }

  render() {
    const
      {
        scoresPerPlayer,
        framesNumberList,
        activeFrameIndex,
        activePlayerIndex,
        isOver,
      } = this.props

    return (
      <div>
        <FrameTable
          framesNumberList={framesNumberList}
          scoresPerPlayer={scoresPerPlayer}
          activeFrameIndex={activeFrameIndex}
          activePlayerIndex={activePlayerIndex}
        />
        {isOver && (
          <Header as='h3' textAlign='center'>
            Done!
          </Header>
        )}
        <BallButton
          noHoverRoll
          disabled={isOver}
          onClick={!this.isLastFrame() ? this.roll : this.rollInLastFrame}
          title={'R O L L'}
        />

      </div>
    );
  }
}

export default connect(stateToProps, actionCreators)(GamePlay_Connect)
