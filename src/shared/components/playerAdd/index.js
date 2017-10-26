import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form as FormWrap, Label, Button, Input } from 'semantic-ui-react'
import Form from '../../../modules/form'

import './index.css'

class PlayerAdd extends Component {

  constructor(props){
    super(props)

    this.state = {
      inputValue: '',
      inputError: ''
    }

    this.addPlayer = this.addPlayer.bind(this)
    this.setInputValue = this.setInputValue.bind(this)
  }

  addPlayer(event){
    const
      { addPlayer } = this.props,
      { inputValue } = this.state,
      error = (
        Form.validations.isEmpty(inputValue) ||
        Form.validations.isTooSmall(inputValue)
      )

    if(error){
      this.setState({ inputError: error })
    } else {
      this.setState({ inputValue: '' })
      addPlayer(inputValue)
    }

    event.preventDefault()
  }

  setInputValue(event){
    this.setState({
      inputValue: event.target.value,
      inputError: ''
    })
  }

  render(){
    const
      { inputValue, inputError } = this.state

    return (
      <div className='PlayerAdd'>
        <form onSubmit={this.addPlayer}>
          <Input
            fluid
            placeholder={`Player's name`}
            action={{
              labelPosition: 'right',
              icon: 'plus',
              content: 'Add new player',
            }}
            value={inputValue}
            error={!!inputError}
            onChange={this.setInputValue}
          />
          {inputError &&
            <div>
              <Label basic color='red' pointing>{inputError}</Label>
            </div>
          }
        </form>
      </div>
    )
  }
}

PlayerAdd.propTypes = {
  addPlayer: PropTypes.func,
}

export default PlayerAdd
