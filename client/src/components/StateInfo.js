import React from 'react'

function StateInfo(props) {
  return (
    <div className="state-info">
      <h3 className="state-info-title">State:{props.state}</h3>
      <h4 className="state-info">Positive Cases:{props.positive}</h4>
      <h4 className="state-info">Deaths:{props.death}</h4>
      <h4 className="state-info">Recovered:{props.recovered}</h4>
      <h4 className="state-info">Updated:{props.updated}</h4>

    </div>
  )
}

export default StateInfo