import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

export default function Cases() {
    const [incidents, setIncidents] = useState([]);
    const [cases, setCases] = useState([]);
    const [state, setState] = React.useState({ version: "16.8" })

    useEffect(() => {
      api
        .get("/api/countries/")
        .then(response => {
          //console.log(response.data.countries);
          setIncidents(response.data.countries);
        });
    }, []);

    function handleChange(evt) {
      console.log("new value", evt.target.value)
      api
      .get("/api/countries/"+evt.target.value + "/confirmed")
      .then(response => {
        console.log(response.data);
        setCases(response.data);
      })
    }

    return (
        <div className="profile-container">
            <header>
            <span>Welcome</span>
            </header>
                        
            <h1>Verified cases</h1>

            <select onChange={handleChange}>
            <option>Select option</option>
            {incidents.map((incident) => <  option key={incident.name} value={incident.iso2}>{incident.name}</option>)}
            
            </select>

              <ul>
                {cases.map(cases => (
                  <li key={cases.deaths}>
                    <strong>Confirmed:</strong>
                    <p>{cases.confirmed}</p>

                    <strong>Recovered:</strong>
                    <p>{cases.recovered}</p>

                    <strong>Deaths:</strong>
                    <p>{cases.deaths}</p>
                  </li>
                ))}
              </ul>
        </div>
    );
}
