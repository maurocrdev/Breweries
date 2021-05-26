import React from "react";

import axios from "axios";

import './BreweriesList.css'

export default class BreweriesList extends React.Component {
  state = {
    breweries: [],
  };

  componentDidMount() {
    axios.get(`https://api.openbrewerydb.org/breweries`).then((res) => {
      const breweries = res.data;
      this.setState({ breweries });
    });
  }

  render() {
    return (
      <div className="Breweries">
       
         <table id="customers">
             <tr>
                 <th>Brewery</th>
                 <th>Brewery Type</th>
                 <th>State</th>                
             </tr>
             {this.state.breweries.map((breweries) => (
                      <tr>
                          <td>{breweries.name}</td>
                          <td>{breweries.brewery_type}</td>
                          <td>{breweries.state}</td>
                      </tr>
                      ))}

         </table>
       
      </div>
    );
  }
}
