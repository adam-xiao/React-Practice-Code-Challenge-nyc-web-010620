import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiState.sushiList.slice(0, 4).map((sushi, index) => {
            return(
                <Sushi key={`${sushi.name} - ${index}`} sushi={sushi} handleClick={props.buySushi} sushiState={props.sushiState}/>
            )
          })
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer