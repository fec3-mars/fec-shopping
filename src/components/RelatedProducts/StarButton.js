import React from 'react';
import RelatedProductsList from './RelatedProductsList.js';

class StarButton extends React.Component{
  constructor(props){
    super(props);
    this.state={

    };
    this.comparisonModal = this.comparisonModal.bind(this);

  }
  comparisonModal(a) {
    console.log('hi from button', a);
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal_container = document.getElementById('modal_container');

    open.addEventListener('click', () => {
      modal_container.classList.add('show');
    });

    close.addEventListener('click', () => {
      modal_container.classList.remove('show');
    });
  }

  render(){
    console.log('hello from starbutton', this.props);
    <button id='open' >
      {/* <img src='http://imgur.com/I0EwG.png' /> */}
      HackReactorHackReactorHackReactorHackReactor
      </button>

    <div className='modal_container' id='modal_container'>

     <div className='modal'>
       <h1>Comparing</h1>
       <p>{element.data.category}</p>
     <button id='close'>Close me</button>

     </div>
   </div>
  }
}

export default StarButton;