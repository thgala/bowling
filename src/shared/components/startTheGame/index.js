import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import classname from 'classname'

import './index.css'

const StartTheGame = ({ disabled }) => {
  return (
    <div className={classname('StartTheGame', { disabled })}>
      <Link to='play' onClick={disabled && (e => e.preventDefault())} className='StartTheGame__link'>
        <div className='StartTheGame__ball' />
        <Header as='h1' inverted>
          <div className='StartTheGame__header'>S T A R T</div>
        </Header>
      </Link>
    </div>
  )
}

export default StartTheGame
