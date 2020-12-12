import React, { useState, useEffect } from 'react'
import CityInfo from './CityInfo'
import API from '../utils/API'

function Search() {

  // const [result, setResult] = useState({})
  // const [search, setSearch] = useState("")

  const [covidInfo, setCovidInfo] = useState({})

  useEffect(() => {
    loadData("co")
  }, [])

  function loadData(state) {
    API.getCovidData(state)
      .then((response) => {
        const data = response.data
        console.log(data);
        setCovidInfo(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }


  return (
    <div className="container-fluid search-container">
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button</button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li className="dropdown-item" value="AL">AL</li>
          <li className="dropdown-item" value="AK">AK</li>
          <li className="dropdown-item" value="AZ">AZ</li>
          <li className="dropdown-item" value="AR">AR</li>
          <li className="dropdown-item" value="CA">CA</li>
          <li className="dropdown-item" value="CO">CO</li>
          <li className="dropdown-item" value="CT">CT</li>
          <li className="dropdown-item" value="FL">FL</li>
          <li className="dropdown-item" value="GA">GA</li>
          <li className="dropdown-item" value="HI">HI</li>
          <li className="dropdown-item" value="ID">ID</li>
          <li className="dropdown-item" value="IL">IL</li>
          <li className="dropdown-item" value="IN">IN</li>
          <li className="dropdown-item" value="IA">IA</li>
          <li className="dropdown-item" value="KS">KS</li>
          <li className="dropdown-item" value="KY">KY</li>
          <li className="dropdown-item" value="LA">LA</li>
          <li className="dropdown-item" value="ME">ME</li>
          <li className="dropdown-item" value="MD">MD</li>
          <li className="dropdown-item" value="MA">MA</li>
          <li className="dropdown-item" value="MI">MI</li>
          <li className="dropdown-item" value="MN">MN</li>
          <li className="dropdown-item" value="MS">MS</li>
          <li className="dropdown-item" value="MO">MO</li>
          <li className="dropdown-item" value="MT">MT</li>
          <li className="dropdown-item" value="NE">NE</li>
          <li className="dropdown-item" value="NV">NV</li>
          <li className="dropdown-item" value="NH">NH</li>
          <li className="dropdown-item" value="NJ">NJ</li>
          <li className="dropdown-item" value="NM">NM</li>
          <li className="dropdown-item" value="NY">NY</li>
          <li className="dropdown-item" value="NC">NC</li>
          <li className="dropdown-item" value="ND">ND</li>
          <li className="dropdown-item" value="OH">OH</li>
          <li className="dropdown-item" value="OK">OK</li>
          <li className="dropdown-item" value="OR">OR</li>
          <li className="dropdown-item" value="PA">PA</li>
          <li className="dropdown-item" value="AZ">AZ</li>
          <li className="dropdown-item" value="RI">RI</li>
          <li className="dropdown-item" value="SC">SC</li>
          <li className="dropdown-item" value="SD">SD</li>
          <li className="dropdown-item" value="TN">TN</li>
          <li className="dropdown-item" value="TX">TX</li>
          <li className="dropdown-item" value="UT">UT</li>
          <li className="dropdown-item" value="VT">VT</li>
          <li className="dropdown-item" value="VA">VA</li>
          <li className="dropdown-item" value="WA">WA</li>
          <li className="dropdown-item" value="WV">WV</li>
          <li className="dropdown-item" value="WI">WI</li>
          <li className="dropdown-item" value="WY">WY</li>
        </ul>
      </div>
      <div className="city-info-container">
        <CityInfo 
        state={covidInfo.state}
        positive={covidInfo.positive}
        death={covidInfo.death}
        recovered={covidInfo.recovered}
        updated={covidInfo.lastUpdateEt}
        />
      </div>
    </div>
  )
}

export default Search