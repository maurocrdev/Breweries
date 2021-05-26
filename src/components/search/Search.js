import React, { Component,useState } from 'react'
import axios from 'axios';

const api = axios.create({
    baseURL:`https://api.openbrewerydb.org/breweries`
});


export class Search extends Component {
    state={
        breweries:[]
    }

    constructor(){
        super();
        api.get('/').then(res=>{
            console.log(res.data)
            this.setState({breweries:res.data})
        })
    }

    render() {

        

        return (
            <div>
                <input type="text" placeholder="Search" />
                {
                    this.state.breweries.map(breweries=> <h2 key={breweries.id}>{breweries.name}</h2>)}
            </div>
        )
    }
}


export default Search
