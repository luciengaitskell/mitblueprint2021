import React from 'react';
import './FactContainer.css';

const FactContainer = (props) => {
  return <div className="FactContainer">{props.children}</div>;
};

export default FactContainer;
