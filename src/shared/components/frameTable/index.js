import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

import './index.css'

import FrameItem from '../frameItem'

const FrameTable = ({ playerList, framesGroupedByPlayerId, framesGroupedByNumber }) => {
  return (
    <div className='FrameTable'>
      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            {Object.keys(framesGroupedByNumber).map((frameNumber, i) =>
              <Table.HeaderCell key={i}>
                {frameNumber}
              </Table.HeaderCell>
            )}
            <Table.HeaderCell>Total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {playerList.map((player, i) => {
            const totalPerPlayer = framesGroupedByPlayerId[player.id]
              .reduce((acc, val) => acc + val.totalScore, 0)

            return (
              <Table.Row key={i}>
                <Table.Cell>{player.name}</Table.Cell>
                {framesGroupedByPlayerId[player.id]
                  .map((frame, k) =>
                    <Table.Cell key={k}>
                      <FrameItem
                        isActive={frame.isActive}
                        rollList={frame.rollList}
                        status={frame.status}
                        totalScore={frame.totalScore}
                      />
                    </Table.Cell>
                  )}
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
  framesGroupedByPlayerId: {},
  framesGroupedByNumber: {},
}

FrameTable.propTypes = {
  playerList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  framesGroupedByPlayerId: PropTypes.object,
  framesGroupedByNumber: PropTypes.object,
}

export default FrameTable
