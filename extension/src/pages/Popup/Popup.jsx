import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

import FactBox from '../../containers/FactBox';
import FactContainer from '../../containers/FactContainer';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FactContainer>
          <h3 className="University-title">Some selected college</h3>
          <FactBox gridArea={'info11'}>10% litness</FactBox>
          <FactBox gridArea={'info12'}>10% litness</FactBox>
          <FactBox gridArea={'info13'}>10% litness</FactBox>
          <FactBox gridArea={'info21'}>10% litness</FactBox>
          <FactBox gridArea={'info22'}>10% litness</FactBox>
          <FactBox gridArea={'info23'}>10% litness</FactBox>

          <button
            className={'Info-expand'}
            onClick={() => {
              chrome.tabs.create({
                url: chrome.runtime.getURL('dashboard.html'),
              });
            }}
          >
            Gimme info bro
          </button>
        </FactContainer>
      </header>
    </div>
  );
};

export default Popup;
