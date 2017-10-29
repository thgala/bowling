import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

import './index.css'

import Gameplay from '../../../modules/gameplay'
import FrameItem from '../frameItem'

const FrameTable = ({ framesNumberList, scoresPerPlayer, activeFrameIndex, activePlayerIndex }) => {
  return (
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
          {scoresPerPlayer.map((player, i) => {
            const totalPerPlayer = player.frameList
              .reduce((acc, val) => acc + val.total, 0)

            return (
              <Table.Row key={i}>
                <Table.Cell>{player.name}</Table.Cell>
                {player.frameList
                  .map((frame, k) => {
                    const
                      isActive = (
                        k === activeFrameIndex &&
                        i === activePlayerIndex
                      )

                    return (
                      <Table.Cell key={k}>
                        <FrameItem
                          isActive={isActive}
                          rollList={frame.rollList}
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

// FrameTable.defaultProps = {
//   playerList: [],
//   framesNumberList: [],
//   framesPerPlayer: {},
//   activePlayerIndex: null,
//   activeFrameNumber: null,
// }

// FrameTable.propTypes = {
//   playerList: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//   })),
//   framesNumberList: PropTypes.array,
//   framesPerPlayer: PropTypes.object,
//   activePlayerIndex: PropTypes.number,
//   activeFrameNumber: PropTypes.number,
// }

export default FrameTable
