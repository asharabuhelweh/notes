import './App.scss';

import React from 'react';
import Header from './header';
import Form from './form';
import Footer from './footer';
import Results from './results';



// function App() {
//   return (
//     <React.Fragment>
//       <Header />
//       <Form />
//       <Footer />
//     </React.Fragment>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      count: 0,
      headers:''
    }
    this.handleForm = this.handleForm.bind(this);
  }
    handleForm(results,count,headers){
      this.setState({ results, count,headers });
    }
    render(){
      return (
        <React.Fragment>
          <Header />
          <Form handler={this.handleForm} />
          <Results results={this.state.results} count={this.state.count} headers={this.state.headers} />
          <Footer />
        </React.Fragment>
      );
    }

  }

  export default App;