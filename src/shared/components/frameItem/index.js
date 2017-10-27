import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const FrameItem = ({ rollList, frameStatus, frameTotal }) => {
  return (
    <div className={'FrameItem'}>
      <div className='FrameItem__rollList'>
        <div className='FrameItem__roll'>
          4
        </div>
        <div className='FrameItem__roll'>
          6
        </div>
      </div>
      <div className='FrameItem__total'>
        {frameTotal}
      </div>
    </div>
  )
}

FrameItem.defaultProps = {
  frameTotal: 0,
  rollList: []
}

FrameItem.propTypes = {
  rollList: PropTypes.arrayOf(PropTypes.number),
  frameStatus: PropTypes.oneOf(['strike', 'spare', 'open']),
  frameTotal: PropTypes.number,
}

export default FrameItem
