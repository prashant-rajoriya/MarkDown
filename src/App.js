import React, { Component } from 'react';
import './App.css';

import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer'

class App extends Component {

  render() {
    return (
          <div className="App">
              <h1 className="Main-header">Markdown webApp</h1>
            <div className='Container'>
              <div>
                <Editor />
              </div>
              <div>
                <Previewer />
              </div>
              </div>
          </div>
    );
  }
}

export default App;
