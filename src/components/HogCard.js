import React, {Component} from 'react'


class HogCard extends Component{

  state = {
    clicked: false
  }

  clickHandler = (event) =>{
   // this.state.clicked = !this.state.clicked
   this.setState({
     clicked:!this.state.clicked
   })
 }

  getHogImage = hogName => {
  let editedHogName = hogName.split(" ").join("_").toLowerCase();
  let pigPics = require(`../hog-imgs/${editedHogName}.jpg`);
  return pigPics;
  };

  render(){
    // console.log(this.props.hogDetails)
    return(
      <div className="pigTile ui four wide column" id={this.props.hogDetails.name} onClick={this.clickHandler}>
        <h1>{this.props.hogDetails.name}</h1>
        <img alt="" src={this.getHogImage(this.props.hogDetails.name)}/>
        {this.state.clicked === true ? (
          <h4>Specialty: {this.props.hogDetails.specialty}<br/>
          Greased: {this.props.hogDetails.greased.toString()}<br/>
          Weight: {this.props.hogDetails['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}<br/>
          Highest Medal Achieved: {this.props.hogDetails['highest medal achieved']} </h4>): (<h4></h4>)}
      </div>
    )
  }
}

export default HogCard
