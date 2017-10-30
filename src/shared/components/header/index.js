import React from 'react'
import PropTypes from 'prop-types'
import { Container, Header as Heading } from 'semantic-ui-react'

import './index.css'

const Header = ({ title }) => {
  return (
    <header className='Header'>
      <Container>
        <div className='Header__wrap'>
          <Heading as='h3' className='Header__title' inverted>{title}</Heading>
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
