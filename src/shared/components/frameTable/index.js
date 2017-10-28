import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

import './index.css'

import FrameItem from '../frameItem'

const FrameTable = ({ playerList, framesNumberList, framesPerPlayer, activePlayerId, activeFrameNumber }) => {
  const fakePlayers = playerList
    .filter(player => Object.keys(framesPerPlayer).indexOf(`${player.id}`) === -1)
    .length

  return fakePlayers !== 0 ? null : (
    <div className='FrameTable'>
      <Table definition>
        {framesNumberList.length !== 0 && (
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              {framesNumberList.map(frameNumber =>
                <Table.HeaderCell key={frameNumber}>
                  {frameNumber}
                </Table.HeaderCell>
              )}
              <Table.HeaderCell>Total</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        )}

        <Table.Body>
          {playerList.map((player, i) => {
            const totalPerPlayer = framesPerPlayer[player.id]
              .reduce((acc, val) => acc + val.total, 0)

            return (
              <Table.Row key={i}>
                <Table.Cell>{player.name}</Table.Cell>
                {framesPerPlayer[player.id]
                  .map((frame, k) => {
                    const
                      isActive = (
                        frame.number === activeFrameNumber &&
                        player.id === activePlayerId
                      )

                    return (
                      <Table.Cell key={k}>
                        <FrameItem
                          isActive={isActive}
                          rolls={frame.rolls}
                          status={frame.status}
                          total={frame.total}
                        />
                      </Table.Cell>
                    )
                  })}
                <Table.Cell>{totalPerPlayer}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

FrameTable.defaultProps = {
  playerList: [],
  framesNumberList: [],
  framesPerPlayer: {},
  activePlayerId: null,
  activeFrameNumber: null,
}

FrameTable.propTypes = {
  playerList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  framesNumberList: PropTypes.array,
  framesPerPlayer: PropTypes.object,
  activePlayerId: PropTypes.number,
  activeFrameNumber: PropTypes.number,
}

export default FrameTable
