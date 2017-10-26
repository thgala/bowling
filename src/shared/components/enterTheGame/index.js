import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

import './index.css'

const EnterTheGame = () => {
  return (
    <Link to='players' className='EnterTheGame'>
      <Header as='h1' inverted>
        <div className='EnterTheGame__header'>P L A Y</div>
      </Header>
    </Link>
  )
}

export default EnterTheGame
