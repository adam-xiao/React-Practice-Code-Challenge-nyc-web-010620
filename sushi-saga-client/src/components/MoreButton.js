import React from 'react'

const MoreButton = (props) => {
    return <button onClick={ ()=>{props.addInc(props.inc+1)} }>
            More sushi!
          </button>
}

export default MoreButton