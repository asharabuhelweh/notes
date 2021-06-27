import React from 'react';
import JSONPretty from 'react-json-pretty';
import './result.scss';
class Results extends React.Component {
  render() {
    if(this.props.count>0){

      return (
        <React.Fragment>
  
  
          <div className='result'>
            <p>Count:  {this.props.count}</p>
            <p>Headers : <JSONPretty data={this.props.headers}></JSONPretty></p>
            <p>Results : <JSONPretty  data={this.props.results}></JSONPretty> </p>
          </div>
        </React.Fragment>
  
      )
    }else{
      return(<p></p>)
    }
  }
    }


export default Results;



