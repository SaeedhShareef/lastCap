import React, { Component } from 'react';
import axios from 'axios';

class LocationsList extends Component {
  state = { 
    name: ' ',
    indoors:  Boolean,
    website: '', 
    location: Object,
    category: ' ',
    familyFriendly: Boolean,
    description: ' ',
    imageUrl: ' ',
    locations: [] 
  }

componentDidMount(){
  this.getLocationPost();
}

getLocationPost() {
    axios.get('http://localhost:5000/all-locations')
   .then((res) => {
     const data = res.data;
      console.log(res.data)

     this.setState({locations: data})
     console.log('data dun did got');
  })
    .catch((err) => {
      alert('error ABANDON SHIP!!!')
    });
  }

  displayLocationPosts = (locations) => {
    if (!locations.length) return null;
    return locations.map((destination, index) => {
        return(

// possibly add options to sort by family friendly, category, indoors



      <div key={index} className="theLocations">
         <div className="yellowEdge"></div>
         
         <div className= "innerContents">
           <div className="scroll">
    <div>   <h2>{destination.name} </h2> </div>
      <div>
        <hr /> </div>
        {/* <h6>CATEGORY [ {destination.category} ] </h6>
        <h5>CATEGORY {destination.category} </h5>
        <h6>FAMILY FRIENDLY?: {destination.familyFriendly} </h6>
        <h6>INDOORS?: {destination.indoors} </h6> */}
        <br />
        <p>{destination.description}</p>
          <a href= "[[[{destination.website}" target="_blank"> visit website</a>
        </div>
</div>
<div className="imageDiv"> <img src=  {destination.imageUrl} alt="location"  /> </div>
      </div>

      
        )
    });
  };

  render() { 
    
    return (  
      <div > 
        {this.displayLocationPosts(this.state.locations)}
         </div>
    );
  }
}

export default LocationsList;