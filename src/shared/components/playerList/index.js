import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Image, List, Icon } from 'semantic-ui-react'

import './index.css'

const PlayerList = ({ title, list }) => {
  return (
    <div className='PlayerList'>
      <List divided verticalAlign='middle'>
        <List.Item>
          <div className='PlayerList__item'>
            <List.Content floated='right'>
              <Icon name='arrow up' /> <Icon name='arrow down' /> <Icon name='delete' color='red' />
            </List.Content>
            <div className='PlayerList__user'>
              <Image avatar size='mini' src={`https://source.unsplash.com/random/120x120?1`} />
              <List.Content>
                Konstantin
              </List.Content>
            </div>
          </div>
        </List.Item>

        <List.Item>
          <div className='PlayerList__item'>
            <List.Content floated='right'>
              <Icon name='arrow up' /> <Icon name='arrow down' /> <Icon name='delete' color='red' />
            </List.Content>
            <div className='PlayerList__user'>
              <Image avatar size='mini' src='https://source.unsplash.com/random/120x120?2' />
              <List.Content>
                Katya
              </List.Content>
            </div>
          </div>
        </List.Item>
      </List>
    </div>
  )
}

PlayerList.propTypes = {
  title: PropTypes.string,
}

export default PlayerList
