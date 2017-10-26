import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Input } from 'semantic-ui-react'

import './index.css'

const PlayerAdd = () => {
  return (
    <div className='PlayerAdd'>
      <Input
        placeholder={`Player's name`}
        className='PlayerAdd__input'
        action={{
          // color: 'black',
          labelPosition: 'right',
          icon: 'plus',
          content: 'Add new player',
          onClick: () => alert('lolator')
        }}
      />
    </div>
  )
}

PlayerAdd.propTypes = {
  title: PropTypes.string,
}

export default PlayerAdd
