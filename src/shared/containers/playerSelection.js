import React, { Component } from 'react'

import PlayerList from '../components/playerList'
import PlayerAdd from '../components/playerAdd'

class PlayerSelection extends Component {
  render() {
    return (
      <div>
        <PlayerList />
        <PlayerAdd />
      </div>
    );
  }
}

export default PlayerSelection
