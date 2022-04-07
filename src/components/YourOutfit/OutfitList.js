import React, { useState } from 'react';

//the outfitList should gather all componenet/element in the "Your Outfit" comoponent of the website
//onClick, it should go to the detailed page of clicked target product

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allOutfits: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, data) {
    // console.log('state at handleClick', this.props.curProduct.data);
    var outfitList = [];
    // for (var i=0; i<outfitList.length; i++) {
    //   if (outfitList[i].id !== this.props.curProduct.data.id){
    outfitList.push(this.props.curProduct.data)
    this.setState({
      allOutfits: outfitList,
    })
    console.log('outfitlist at handleclick', outfitList);
    // console.log('state at handleclick', this.state);
  }

  render() {
    if (this.state.allOutfits.length) {
      // console.log('outfit state to be rendered', this.state);
    }
    // console.log('outfit props to be rendered', this.props);
    // console.log('outfit state to be rendered', this.state);
    return (
      <div>
        <h1>YOUR OUTFIT</h1>
        <button onClick={this.handleClick}>Add Current Product to Outfit List</button>
        <div>{this.state.allOutfits.map(element => {
          return (
            <div key={element.id} element={element} className='individualCard'>
              {/* <img className='image' src={this.state.relatedProductImage[index]}></img> */}
              <h2 className='category'>{element.category}</h2>
              <div className='name'>{element.name}</div>
              <div className='price'>${element.default_price}</div>
              <div className='rating'>rating will go here</div>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

export default OutfitList;