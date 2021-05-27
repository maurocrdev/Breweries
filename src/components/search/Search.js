import React, { useEffect, useState } from "react";

import MoreInfo from '../moreinfo/index';

import './Search.css'

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
      <div className="search">
      <input className="search" type="text" placeholder="Search" onChange={(event) =>{setSearchTerm(event.target.value)}} />
      </div>
      <div>
      {
          // eslint-disable-next-line array-callback-return
          data.filter((val)=>{
              if(searchTerm === ""){
                  return val
              }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
              }
          }).map((val,id)=>(

            <MoreInfo key={id} data={val}/>
            
          ))
      }
      </div>
    </div>
  );
}

export default Search;
