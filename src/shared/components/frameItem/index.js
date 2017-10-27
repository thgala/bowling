import React from 'react'
import PropTypes from 'prop-types'
import classname from 'classname'

import './index.css'

const FrameItem = ({ rollList, status, totalScore, isActive }) => {
  return (
    <div className={classname('FrameItem', { isActive })}>
      <div className='FrameItem__rollList'>
        {rollList.map((roll, i) =>
          <div key={i} className='FrameItem__roll'>
            {roll.score === 0 ? '_' : roll.score}
          </div>
        )}
      </div>
      {totalScore !== 0 && <div className='FrameItem__total'>
        {totalScore}
      </div>}
    </div>
  )
}

FrameItem.defaultProps = {
  totalScore: 0,
  rollList: []
}

FrameItem.propTypes = {
  isActive: PropTypes.bool,
  rollList: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number,
  })),
  status: PropTypes.oneOf(['strike', 'spare', 'open', '']),
  totalScore: PropTypes.number,
}

export default FrameItem
