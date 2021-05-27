import React, { useEffect, useState } from "react";
import axios from "axios";

function Search() {

  const[data, setData] = useState([]);
  const[searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://api.openbrewerydb.org/breweries"
      ).then((response) => response.json());
      setData(result);
    };
    fetchData();
  },[]);

  return (
    <div>
      <input type="text" placeholder="Search" onChange={(event) =>{setSearchTerm(event.target.value)}} />
      {
          data.filter((val)=>{
              if(searchTerm === ""){
                  return val
              }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
              }
          }).map((val,id)=>(
              <div key={id}>
                  <h2>{val.name}</h2>
              </div>
          ))
      }
    </div>
  );
}

export default Search;
