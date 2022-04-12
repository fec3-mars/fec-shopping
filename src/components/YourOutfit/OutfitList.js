/* eslint-disable */
import React, { useState } from 'react';
import App from '../App.js';
import './OutfitList.css';
//the outfitList should gather all componenet/element in the "Your Outfit" comoponent of the website
//onClick, it should go to the detailed page of clicked target product

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // curProduct: this.props.curProduct.data,
      allOutfits: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  handleClick(e, data) {
    // console.log('fasdfas', this.state);
    var outfits = this.state.allOutfits;
    if (outfits.indexOf(this.props.curProduct.data) !== -1) {
      alert('Product already saved in Your Outfits');
    } else {
      outfits.unshift(this.props.curProduct.data)
      this.setState({
        allOutfits: outfits,
      })
    }
  }

  removeCard(e) {
    // console.log('cur state at removeCard', this.state);
    var curCollection = this.state.allOutfits;
    for (var i = 0; i < this.state.allOutfits.length; i++) {
      if (curCollection[i].id === e.element.id) {
        curCollection.splice(i, 1);
      }
    }
    this.setState({
      allOutfits: curCollection
    })
  }

  render() {
    if (this.state.allOutfits.length) {
      // console.log('outfit state to be rendered', this.state);
    }
    // console.log('outfit props to be rendered', this.props);
    // console.log('outfit state to be rendered', this.state);
    return (
      <div className="your-outfit">
        <h1>YOUR OUTFIT</h1>
        <button onClick={this.handleClick}>
          Add Current Product to Outfit List
        </button>
        <div>{this.state.allOutfits.map(element => {
          return (
            <div key={element.id} element={element} className='individualCard'>
              <h2 className='category'>{element.category}</h2>
              <div className='name'>{element.name}</div>
              <div className='price'>${element.default_price}</div>
              <div className='rating'>rating will go here</div>
              <button
                onClick={() => this.removeCard({ element })}
              >&times;</button>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

export default OutfitList;