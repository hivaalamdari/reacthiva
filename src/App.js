import React , {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handlerSub = this.handlerSub.bind(this)
  }
  state = { 
    sum : 0
   }
  handlerAdd=()=>{
    let num = this.state.sum + 1
    this.setState({sum : num})
  }
  handlerSub(){
    let num = this.state.sum - 1
    this.setState({sum : num})
  }
  render() { 
    return ( 
    <div className="App">
       <button onClick={this.handlerAdd}>+</button>
       <h3>HIvA first app</h3>
       <p>{this.state.sum}</p>
       <button onClick={this.handlerSub}>-</button>
    </div>
     );
  }
}


export default App;
