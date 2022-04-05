import React from 'react';
import './Styles.css';
import SingleStyle from './SingleStyle.js';

const Styles = ({ styles, selectedStyle, styleChangeHandler }) => {
  console.log(styles)


  return (
    <div className="styles-container">
      <div className="style-title-container">
        <h4 className="style-title">STYLE > </h4>
        <p className="selected-style">{selectedStyle.name}</p>
      </div>
      <div className="styles">
        {styles.map(style => {
          return <SingleStyle style={style} selectedStyle={style.name === selectedStyle.name} styleChangeHandler={styleChangeHandler} />
        })}
      </div>
    </div>
  )
}

export default Styles;