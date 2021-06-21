import React from 'react';
import JSONPretty from 'react-json-pretty';
import './result.scss';
class Results extends React.Component {
  render() {
    return (
      <React.Fragment>


        <div className='result'>
          <p>count:  {this.props.count}</p>
          <p>Headers : <JSONPretty id="json-pretty" data={this.props.headers}></JSONPretty></p>
          <p>Results : <JSONPretty id="json-pretty" data={this.props.results}></JSONPretty> </p>
        </div>
      </React.Fragment>

    )
  }
}

export default Results;



