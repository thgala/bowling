import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const FrameItem = ({ rollList, status, totalScore }) => {
  return (
    <div className={'FrameItem'}>
      <div className='FrameItem__rollList'>
        {rollList.map((roll, i) =>
          <div key={i} className='FrameItem__roll'>
            {roll.score === 0 ? '_' : roll.score}
          </div>
        )}
      </div>
      <div className='FrameItem__total'>
        {totalScore === 0 ? '' : `Frame total: ${totalScore}`}
      </div>
    </div>
  )
}

FrameItem.defaultProps = {
  totalScore: 0,
  rollList: []
}

FrameItem.propTypes = {
  rollList: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number,
  })),
  status: PropTypes.oneOf(['strike', 'spare', 'open', '']),
  totalScore: PropTypes.number,
}

export default FrameItem
