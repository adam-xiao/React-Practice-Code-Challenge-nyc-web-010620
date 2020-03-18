import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushiList: [],
    funds: 100,
    sushiOrdered: []
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(sushi => {
        this.setState({ 
          sushiList: sushi
        })
      })
  }

  buySushi =(sushi)=>{
    if (this.state.funds >= sushi.price && !(this.state.sushiOrdered.includes(sushi))){
      this.setState( prevState => {
        return ( { 
          sushiOrdered: [sushi, ...prevState.sushiOrdered],
          funds: (prevState.funds - sushi.price)
        } )
      })
    }else if (this.state.funds < sushi.price){
      alert("YOU BROKE BOI")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiState={this.state} buySushi={this.buySushi}/>
        <Table sushiOrdered={this.state.sushiOrdered} funds={this.state.funds}/>
      </div>
    );
  }
}

export default App;