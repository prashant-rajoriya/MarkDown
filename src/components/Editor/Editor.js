import React, { Component } from 'react';
import './Editor.css';
class Editor extends Component {
  render() {
    return (
      <div className='Editor'>
        <div>
          Editor
        </div>
        <textarea
        className='Textarea'
          id='editor'
          row='8' 
          cols='80' 
        />
      </div>
    );
  }
}

export default Editor;