import React from 'react';
import './history.scss';
class History extends React.Component {
    constructor (props){
        super (props)
        this.historyClickHandler =this.historyClickHandler.bind(this);
 
    }

    historyClickHandler = e =>{
        e.preventDefault ()
        let arr = [];
        let savedResult =JSON.parse(localStorage.getItem('request'));
        if (savedResult){
            Object.values(savedResult).map((element) => {
                if (!arr.includes (element)){
                    arr.push (element)
                }
            });
            let methodH = e.target.method.value;
            let urlH = e.target.url.value;
            let bodyH = e.target.body.value;
            this.props.after (methodH,urlH,bodyH);
    };
}
      render (){
          return (
            <React.Fragment>
        
              <ul>
                 {  
                     this.props.arr.map(element=>{
                      let string = element.split(',')
                      let method = string[0];
                      let url = string[1];
                      let body;
                      if (string[2]){

                       body = string[2] 
                      }
                      if (string.length > 3){
                          for (let i = 3; i < string.length ; i ++){
                              body = body + string[i]
                          }
                      }
                      return (
                          <React.Fragment>
                          <form id="historyForm" onSubmit={this.historyClickHandler}>
                          <input type="hidden" value={string[0]} name="method"/>
                          <input type="hidden" value={string[1]} name="url"/>
                          <input type="hidden" value={string[2] + string[3]} name="body"/>
                          <h4 className="his"><button type='submit'>{method}</button> {url} , body: {body}</h4>
                          </form>
                          </React.Fragment>

                      )
                     })
                  }
              </ul>
            
        </React.Fragment>
                   
         )          
  
    }
}



export default History