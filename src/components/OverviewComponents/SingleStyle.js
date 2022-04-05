import React from 'react';
import './SingleStyle.css';

const SingleStyle = ({ style }) => {
  return (
    <div className="style-container">
      <img src={style.photos[0].url} className="style-img" />
    </div>
  )

}

export default SingleStyle;