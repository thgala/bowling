import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

import './index.css'

const FrameItem = () => {
  return (
    <div className='FrameItem'>
      <div className='FrameItem__rollList'>
        <div className='FrameItem__roll'>
          6
        </div>
        <div className='FrameItem__roll'>
          4
        </div>
      </div>
      <div className='FrameItem__total'>
        10
      </div>
    </div>
  )
}

FrameItem.defaultProps = {
  onClick() {}
}

FrameItem.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default FrameItem
