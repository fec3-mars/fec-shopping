import React from 'react';
import './Feature.css';

function Feature({ item }) {
  const { feature, value } = item;

  return (
    <div className="feature">
      <p className="key">
        <strong>{feature}:</strong>
      </p>
      <p className="value">
        {value}
      </p>
    </div>
  );
}

export default Feature;
