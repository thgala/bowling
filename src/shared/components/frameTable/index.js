import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

import './index.css'

import FrameItem from '../frameItem'

const FrameTable = ({ playerList, totalFrames }) => {
  const framesArray = Array.from({ length: totalFrames }, (v, i) => i)

  return playerList.length === 0 ? null : (
    <div className='FrameTable'>
      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            {framesArray.map((item, i) =>
              <Table.HeaderCell key={i}>
                {i + 1}
              </Table.HeaderCell>
            )}
            <Table.HeaderCell>Total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {playerList.map((player, i) =>
            <Table.Row key={i}>
              <Table.Cell>{player.name}</Table.Cell>
              {framesArray.map((item, k) =>
                <Table.Cell key={k}>
                  <FrameItem />
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
  totalFrames: 10,
}

FrameTable.propTypes = {
  playerList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  totalFrames: PropTypes.number,
}

export default FrameTable
