import React, { Fragment, useState } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {
  const [inc, changeInc] = useState(0)
  const {sushiList} = props.sushiState;
  return (
    <Fragment>
      <div className="belt">
        {
          sushiList.slice(0+inc, 4+inc).map((sushi, index) => {
            return(
                <Sushi key={`${sushi.name} - ${index}`} sushi={sushi} handleClick={props.buySushi} sushiState={props.sushiState}/>
            )
          })
        }
        <MoreButton addInc={changeInc} inc={inc}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer