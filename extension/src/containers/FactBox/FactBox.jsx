import React from 'react';

import './FactBox.css';

const FactBox = (props) => {
  return (
    <div className="FactBox" style={{ gridArea: props.gridArea }}>
      {props.children}
    </div>
  );
};

export default FactBox;
