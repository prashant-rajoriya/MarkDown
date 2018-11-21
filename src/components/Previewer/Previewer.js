import React, { Component } from 'react';
import './Previewer.css';
import { connect } from 'react-redux';
import marked from 'marked';


marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

renderer.link = (href, title, text) => {
return `<a target="_blank" href="${href}" >${text}</a>` 
}

class Previewer extends Component {

    
  render() {
    return (
      <div className='Previewer'>
        <div className='Header'>
          Previewer
        </div>
        <div
          id='preview'
          dangerouslySetInnerHTML={{__html: marked(this.props.markdown, { renderer: renderer })}}
          
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
export default connect(mapStateToProps) (Previewer);