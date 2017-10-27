import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'
import groupBy from 'lodash.groupby'

import './index.css'

import FrameItem from '../frameItem'

const FrameTable = ({ playerList, frameList, frameNumberList }) => {
  const framesByNumber = groupBy(frameList, 'number')

  return (
    <div className='FrameTable'>
      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            {frameNumberList.map((frameNumber, i) =>
              <Table.HeaderCell key={i}>
                {frameNumber}
              </Table.HeaderCell>
            )}
            <Table.HeaderCell>Total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {playerList.map((player, i) =>
            <Table.Row key={i}>
              <Table.Cell>{player.name}</Table.Cell>
              {frameList
                .filter(frame => frame.playerId === player.id)
                .map((item, k) =>
                  <Table.Cell key={k}>
                    <FrameItem
                      rollList={[]}
                      frameStatus={'strike'}
                      frameTotal={10}
                    />
                  </Table.Cell>
                )}
              <Table.Cell>100</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  )
}

FrameTable.defaultProps = {
  playerList: [],
  frameList: [],
  frameHeaderList: [],
}

FrameTable.propTypes = {
  frameHeaderList: PropTypes.arrayOf(PropTypes.number),
  playerList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  frameList: PropTypes.arrayOf(PropTypes.shape({
    playerId: PropTypes.number,
    number: PropTypes.number,
    rolls: PropTypes.arrayOf(PropTypes.shape({
      score: PropTypes.number,
    })),
    status: PropTypes.oneOf(['strike', 'spare', 'open', '']),
    totalScore: PropTypes.number,
  }))
}

export default FrameTable
