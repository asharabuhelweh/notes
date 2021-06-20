import React from 'react';
import './form.scss'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: ''
    }
  }

  handleUrl = e => {
    let url = e.target.value;
    this.setState({ url });
  }

  handleClick = e => {
    let url = this.state.url

    this.setState({ url });
  }

  handleMethod = e => {
    let method = e.target.value;

    this.setState({ method });




  }

  render() {
    return (
      <div>
        <form className='form'>
          <label htmlFor="">URL:</label>
          <input id='input' onChange={this.handleUrl} />
          <button type='submit' onClick={this.handleClick} >GO!</button>
        </form>

        <div className="buttons">
          <button onClick={this.handleMethod} id="get" value="Get">Get</button>
          <button onClick={this.handleMethod} id="post" value="Post">Post</button>
          <button onClick={this.handleMethod} id="put" value="Put">Put</button>
          <button onClick={this.handleMethod} id="get" value="Delete">Delete</button>



        </div>
        <div className="text">
          <h3>{this.state.method} {this.state.url}</h3>

        </div>
      </div>
    );
  }
}

export default Form;