import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

export default class SushiContainer extends Component {

  state={
    startIndex: 0
  }

  scrollSushi =()=>{
    this.setState(prevState => {
      return ({ startIndex: prevState.startIndex + 4})
    })
  }

  render(){
  return (
    // <Fragment>
      <div className="belt">
        {
          this.props.sushiState.sushiList.slice(this.state.startIndex, this.state.startIndex + 4).map((sushi, index) => {
            return(
                <Sushi key={`${sushi.name} - ${index}`} sushi={sushi} handleClick={this.props.buySushi} sushiState={this.props.sushiState}/>
            )
          })
        }
        <MoreButton scrollSushi={this.scrollSushi} />
      </div>
    // </Fragment>
  )}
}
