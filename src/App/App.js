import React, { Component } from 'react';
import Head from '../Head/Head'
import Foot from '../Foot/Foot'

class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <h1>Con-A-Thon</h1>
        <h4>No, this isn't for conning people. （•‿•）</h4>
        <p>This is a convention trip planning website.
            We have a list of 30 popular anime, comic, and gaming conventions of 2018 around the USA if you don't know where to start.</p>
        <p>Otherwise, you can signup and start planning your trips! </p>
        <Foot />
      </div>
    );
  }
}

export default App;
