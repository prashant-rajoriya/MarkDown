import React, { Component } from 'react';
import './Editor.css';
import { connect } from 'react-redux';
class Editor extends Component {

  render() {
    return (
      <div className='Editor'>
        <div className="Header">
          Editor
        </div>
        <textarea
        className='Textarea'
          id='editor'
          row='8' 
          cols='80' 
          typeof='text'
          value={this.props.markdown}
          onChange={(event) => this.props.onChange(event.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    markdown : state.markdown
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange : (value) => dispatch({
      type: "CHANGE_MARKDOWN",
      value: value
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Editor);