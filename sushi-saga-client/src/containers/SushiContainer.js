import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiList.map((sushi, index) => {
            return(
                <Sushi key={`${sushi.name} - ${index}`} sushi={sushi} handleClick={props.buySushi}/>
            )
          })
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer