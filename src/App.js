import React, { Component } from 'react'
import {
  Route,
  Link
} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import Intro from './shared/screens/intro'
import Players from './shared/screens/players'
import Play from './shared/screens/play'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Intro} />
        <Route path='/players' title='Players' component={Players} />
        <Route path='/play' title='Play' component={Play} />
      </div>
    );
  }
}

export default App
