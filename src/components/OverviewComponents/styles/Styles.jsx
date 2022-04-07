import React from 'react';
import './Styles.css';
import SingleStyle from './SingleStyle.jsx';

const Styles = ({ styles, selectedStyle, styleChangeHandler }) => {

  return (
    <div className="styles-container">
      <div className="style-title-container">
        <h4 className="style-title">STYLE > </h4>
        <p className="selected-style">{selectedStyle.name}</p>
      </div>
      <div className="styles">
        {styles.map(style => {
          return <SingleStyle key={style.style_id} style={style} selectedStyle={style.name === selectedStyle.name} styleChangeHandler={styleChangeHandler} />
        })}
      </div>
    </div>
  );
};

export default Styles;
