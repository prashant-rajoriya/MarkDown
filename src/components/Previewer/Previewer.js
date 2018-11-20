import React, { Component } from 'react';
import './Previewer.css';
class Previewer extends Component {
  render() {
    return (
      <div className='Previewer'>
        <div>
          Previewer
        </div>
        <div
          id='preview'/>
      </div>
    );
  }
}

export default Previewer;