import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Image, List, Icon } from 'semantic-ui-react'

import './index.css'

const PlayerList = ({ list, changePlayersOrder, removePlayer }) => {
  return list.length === 0 ? null : (
    <div className='PlayerList'>
      <List divided verticalAlign='middle'>
        {list.map((player, i) => {
          const
            canMoveUp = i !== 0,
            canMoveDown = i !== (list.length - 1)

          return (
            <List.Item key={i}>
              <div className='PlayerList__item'>
                <List.Content floated='right'>
                  {canMoveUp &&
                    <Icon onClick={() => changePlayersOrder(i, i - 1)} name='arrow up' className='PlayerList__icon' />
                  }
                  {canMoveDown &&
                    <Icon onClick={() => changePlayersOrder(i, i + 1)} name='arrow down' className='PlayerList__icon' />
                  }
                  <Icon onClick={() => removePlayer(player.id)} name='delete' color='red' className='PlayerList__icon' />
                </List.Content>
                <div className='PlayerList__user'>
                  <Image avatar src={`http://thecatapi.com/api/images/get?${player.id}`} />
                  <List.Content>
                    {player.name}
                  </List.Content>
                </div>
              </div>
            </List.Item>
          )
        })}
      </List>
    </div>
  )
}

PlayerList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    order: PropTypes.number,
  })),
  changePlayersOrder: PropTypes.func,
  removePlayer: PropTypes.func,
}

export default PlayerList
