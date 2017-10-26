import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import classname from 'classname'

import './index.css'

const StartTheGame = ({ disabled, onClick }) => {
  return (
    <div className={classname('StartTheGame', { disabled })}>
      <Link to='play' onClick={disabled ? (e => e.preventDefault()) : onClick} className='StartTheGame__link'>
        <div className='StartTheGame__ball' />
        <Header as='h1' inverted>
          <div className='StartTheGame__header'>S T A R T</div>
        </Header>
      </Link>
    </div>
  )
}

StartTheGame.defaultProps = {
  onClick() {}
}

StartTheGame.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default StartTheGame
