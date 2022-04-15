/* eslint-disable */
import React, { useState } from 'react';
import App from '../App.js';
import IndividualOutfit from './IndividualOutfit';
import {
  axios, makeRequest, getRelatedProducts, getRelatedDetail, getRelatedImage, makeReviewRequest
} from '../axios.js';
import './OutfitList.css';
import {
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//the outfitList should gather all componenet/element in the "Your Outfit" comoponent of the website
//onClick, it should go to the detailed page of clicked target product

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allOutfits: [],
      // avgRating: 0,
      // totalReviews: 0,
      // curProductReview: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.toupdatestate = this.toupdatestate.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.curProduct.data?.id !== prevProps.curProduct.data?.id) {
      getRelatedImage.call(this, [this.props.curProduct.data.id]);
    }
  }

  toupdatestate() {
    this.setState({
      curProduct: curCard,
    })
  }


  handleClick(e, data) {
    // console.log('fasdfas', this.state);
    var outfits = this.state.allOutfits;
    if (outfits.indexOf(this.state.allInfo) !== -1) {
      alert('Product already saved in Your Outfits');
    } else {
      outfits.unshift(this.state.allInfo)
      this.setState({
        allOutfits: outfits,
      })
    }
  }

  removeCard(e) {
    // console.log('eeee', e);
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
      <div className="main-outfit-container" >
        <h1>YOUR OUTFIT</h1>
        <div className='outfitcontainer'>
          <div className='addbutton'>
            <FontAwesomeIcon
              icon={faPlus}
              onClick={this.handleClick}
              className="theactualaddbutton"
            />
            <div className="addbuttonmessage">Add Current Product to Outfit List</div>
            {/* <button onClick={this.handleClick}>
              Add Current Product to Outfit List
            </button> */}
          </div>

          {this.state.allOutfits.map(element => {
            return (
              <div key={element.id} element={element} className='individualOutfitCard'>
                <IndividualOutfit
                  element={element}

                />
                {/* <img src={element.imageUrl} className='image'></img>
                <div className='contents'>
                <h2 className='category'>{element.category}</h2>
                <div className='name'>{element.name}</div>
                <div className='price'>${element.default_price}</div>
                <div className='rating'>rating will go here</div>
                </div> */}

                <button className='closeButton'
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