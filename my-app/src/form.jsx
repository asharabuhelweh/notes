import React from 'react';
import './form.scss'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'GET'
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


  handleSubmit = async e => {
    e.preventDefault();
    let textBox = e.target.body.value;
    let url = this.state.url;
    let raw;
    if ((this.state.method === 'Put' || this.state.method === 'Post')) {
      raw = await fetch(url, {
        method: this.state.method, body: textBox, mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

    } else if (this.state.method === 'Get' || this.state.method === 'Delete') {

      raw = await fetch(url, { method: this.state.method });
    }
    // let raw = await fetch(`${url}`,{method:this.state.method});
    let data = await raw.json();
    let allResult = [];
    if (data) {
      let request = `${this.state.method},${this.state.url},${textBox}`;
      let savedUrl = JSON.parse(localStorage.getItem('request'));
      if (savedUrl) {
        Object.values(savedUrl).map((element) => {
          if (!allResult.includes(element)) {
            allResult.push(element)
          }
        });
      }
      if (!allResult.includes(request)) {
        allResult.push(request)
        allResult.filter((element, index) => allResult.indexOf(element) === index)
        localStorage.setItem('request', JSON.stringify(allResult));
      }

    }
    console.log(await data);
    let results;
    if (data.results) {
      results = data.results;
    } else {
      results = data
    }
    let count;
    if (data.count) {
      count = data.count;
    } else {
      count = data.length
    }



    let headers = await fetch(url).then((response) => {
      for (let header of response.headers.entries()) {
        return `"${header[0]}" : "${header[1]}"`;
      }
    });
    this.props.handler(results, count, headers);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          <label htmlFor="">URL:</label>
          <input id='input' onChange={this.handleUrl} />
          <button type='submit' onClick={this.handleClick} >GO!</button>
          <textarea rows="4" cols="40" id="textarea" name="body" placeholder="JSON body"></textarea>

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