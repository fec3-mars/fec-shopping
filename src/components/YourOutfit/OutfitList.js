import React from 'react';

//the outfitList should gather all componenet/element in the "Your Outfit" comoponent of the website
//onClick, it should go to the detailed page of clicked target product

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>YOUR OUTFIT</h1>
        <button>Add Current Product to Outfit List</button>
      </div>
    )
  }
}

export default OutfitList;