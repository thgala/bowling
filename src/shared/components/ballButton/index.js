import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'
import classname from 'classname'

import './index.css'

const BallButton = ({ disabled, loading, noHoverRoll, onClick, title }) => {
  const inactive = disabled || loading
  return (
    <div className={classname('BallButton', { disabled, loading, noHoverRoll })}>
      <div className='BallButton__wrapper' onClick={inactive ? (e => e.preventDefault()) : onClick}>
        <div className='BallButton__ball' />
        <Header as='h1' inverted>
          <div className='BallButton__header'>{title}</div>
        </Header>
      </div>
    </div>
  )
}

BallButton.defaultProps = {
  onClick() {},

}

BallButton.propTypes = {
  noHoverRoll: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
}

export default BallButton
