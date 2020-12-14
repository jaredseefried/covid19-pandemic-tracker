import React from 'react'

function Info(props) {
  return (
    <div className="info-container">
      <h1 className="info-title">{props.country}</h1>
      <h3 className="info"><strong>Infected:</strong> {props.infected}</h3>
      <h3 className="info"><strong>Deaths:</strong> {props.deaths}</h3>
      <h3 className="info"><strong>Recoveries:</strong> {props.recoveries}</h3>
      <h3 className="info"><strong>Updated:</strong> {props.updated}</h3>
    </div>
  )
}

export default Info