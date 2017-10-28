import React from 'react'
import PropTypes from 'prop-types'
import classname from 'classname'

import './index.css'

const FrameItem = ({ rolls, status, isActive, total }) => {
  return (
    <div className={classname('FrameItem', { isActive })}>
      <div className='FrameItem__rollList'>
        {rolls.map((roll, i) =>
          <div key={i} className='FrameItem__roll'>
            {roll === '' ? '_' : roll}
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
  rolls: []
}

FrameItem.propTypes = {
  isActive: PropTypes.bool,
  rolls: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.oneOf(['strike', 'spare', 'open', '']),
  total: PropTypes.number,
}

export default FrameItem
