import React from 'react';
import './form.scss'
import IF from "./if";
import Loader from "./Loader";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'GET',
      results: [],
      body: {},
      flag: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this)
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
    setTimeout(async () => {
      let raw;
      let method2;
      let url2;
      let body2;
      if (this.props.methodH && this.props.urlH) {
        method2 = this.props.methodH;
        url2 = this.props.urlH;
        if (this.props.bodyH) {
          body2 = await JSON.stringify(this.props.bodyH)

        } else {
          body2 = e.target.body.value
        }


      } else {
        method2 = this.state.method
        url2 = this.state.url
        body2 = e.target.body.value

      }
      if ((method2 === 'Put' || method2 === 'Post')) {
        raw = await fetch(url2, {
          method: method2, body: body2, mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else if (method2 === 'Get' || method2 === 'Delete') {

        raw = await fetch(url2, { method: method2 });
      }

      this.setState({ body: body2, flag: !this.state.flag })
      let header = await fetch(url2).then((response) => {
        for (let pair of response.headers.entries()) {
          let n = pair.length
          let string = '';
          for (let i = 0; i < n; i++) {
            if (i % 2 === 0) {
              string = string + pair[i] + ': ' + pair[i + 1]
            }
          }
          return string;
        }
      });


      let data = await raw.json()
      let array = [];
      if (data) {
        this.setState({ results: data, body: body2, flag: !this.state.flag });
        let str = `${this.state.method},${this.state.url},${body2}`
        let oldResult = JSON.parse(localStorage.getItem('request'))
        if (oldResult) {
          Object.values(oldResult).map((item) => {
            if (!array.includes(item)) {
              array.push(item)
            }
          });
        }
        if (!array.includes(str)) {
          array.push(str)
          localStorage.setItem('request', JSON.stringify(array));
        }

      }

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
      let flag = this.state.flag
      this.props.handler(results, count, header, array, flag);

    }, 2000);
  }


  toggle = () => {
    this.setState({ flag: !this.state.flag })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          <label htmlFor="">URL:</label>
          <input id='input' onChange={this.handleUrl} />
          <h4>{this.props.methodH || this.state.method}  :  {this.props.urlH || this.state.url} </h4>

          <button type='submit' onClick={this.handleClick} >GO!</button>
          <textarea rows="4" cols="40" id="textarea" name="body" placeholder="JSON body"></textarea>

        </form>
        <IF condition={this.state.flag}>
          <Loader></Loader>
        </IF>
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