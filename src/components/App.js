import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCard from './HogCard'

class App extends Component {
  state ={
    nameFilter: false,
    weightFilter: false,
    greaseFilter: false,
    allHogs: hogs
  }

  toggleGreased = () => {
    this.setState ({
      greaseFilter: !this.state.greaseFilter
    })
    // console.log("greaseFilter",this.state.greaseFilter)
  }
  toggleName = () => {
    this.setState ({
      nameFilter: !this.state.nameFilter
    })
    // console.log("nameFilter", this.state.nameFilter)
  }
  toggleWeight = () => {
    this.setState ({
      weightFilter: !this.state.weightFilter
    })
    // console.log("weightfilter", this.state.weightFilter)
  }

  filterGreasedHogs = () =>{
    if (this.state.greaseFilter){
      console.log("filtered by grease")
      let greasedHogList = hogs.filter(hog => hog.greased)
      return greasedHogList
    }
    else{
      return hogs
    }
  }

  sortHogsByName = () =>{
    let filteredHogs = [...this.filterGreasedHogs()]
    if(this.state.nameFilter){
      console.log("filtered by name")
        return filteredHogs.sort((a, b) => {
          return a.name.localeCompare(b.name);
      });
    }
    else{
      return filteredHogs
    }
  }

  sortHogsByWeight = () =>{
    let filteredHogs = [...this.sortHogsByName()]
    if(this.state.weightFilter){
      console.log("filtered by weight")
        return filteredHogs.sort((a, b) => {
          const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
          return a[weight] - b[weight];
      });
    }
    // else if(!this.state.greaseFilter && !this.state.nameFilter && !this.state.weightFilter){
    //   console.log("no filters")
    //   return hogs
    // }
    else{
      return filteredHogs
    }
  }

  render() {
    console.log(this.sortHogsByWeight())
    let parsedHogs=this.sortHogsByWeight().map((oneHog)=><HogCard key={oneHog.name} hogDetails={oneHog}/>)
    return (
      <div className="App">
          < Nav toggleGreased={this.toggleGreased} toggleWeight={this.toggleWeight} toggleName={this.toggleName}/>
          {parsedHogs}
      </div>
    )
  }
}

export default App;
