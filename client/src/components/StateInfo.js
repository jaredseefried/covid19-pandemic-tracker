import React from 'react'

function StateInfo(props) {
  return (
    <div className="state-info">
      <table>
        <tr>
          <th></th>
        </tr>
        <tr>
          <td className="info">State:</td>
          <td className="info">{props.state}</td>
        </tr>
        <tr>
          <td className="info">Cases:</td>
          <td className="info">{props.positive}</td>
        </tr>
        <tr>
          <td className="info">Deaths:</td>
          <td className="info">{props.death}</td>
        </tr>
        <tr>
          <td className="info">Recoveries:</td>
          <td className="info">{props.recovered}</td>
        </tr>
        <tr>
          <td className="info">Updated:</td>
          <td className="info info-updated">{props.updated}</td>
        </tr>
        <tr>
          <td><p className="api-link"><a href="https://covidtracking.com/data/api" target="_blank" rel="noreffer">API</a> </p></td>
          
        </tr>
      </table>
  
    </div>
  )
}

export default StateInfo