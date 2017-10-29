import React from 'react'
import PropTypes from 'prop-types'
import classname from 'classname'

import './index.css'

const FrameItem = ({ rollList, status, isActive, total }) => {
  return (
    <div className={classname('FrameItem', { isActive })}>
      <div className='FrameItem__rollList'>
        {rollList.length === 0 ? (
          <div className='FrameItem__roll'>
            _
          </div>
        ) : rollList.map((roll, i) =>
          <div key={i} className='FrameItem__roll'>
            {roll}
          </div>
        )}
      </div>
      {total !== 0 && <div className='FrameItem__total'>
        {total}
      </div>}
    </div>
  )
}

FrameItem.defaultProps = {
  rollList: []
}

FrameItem.propTypes = {
  isActive: PropTypes.bool,
  rollList: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.oneOf(['strike', 'spare', 'open', '']),
  total: PropTypes.number,
}

export default FrameItem
