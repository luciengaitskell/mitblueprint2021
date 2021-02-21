import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

import FactBox from '../../containers/FactBox';
import FactContainer from '../../containers/FactContainer';

import ComparisonPlot from '../../datavis/ComparisonPlot';

const Popup = () => {
  let admitrate = "..."
  let sfratio = "..."
  let state = "US"
  let act = "..."
  let price = "..."
  let percaid = "..."


  return (
    <div className="App">
      <header className="App-header">
        <FactContainer>
          <h3 className="University-title">Some selected college</h3>
          <FactBox gridArea={'info11'}>{admitrate}&percnt;</FactBox>
          <FactBox gridArea={'info12'}>{sfratio} student-to-faculty</FactBox>
          <FactBox gridArea={'info13'}>{state}</FactBox>
          <FactBox gridArea={'info21'}>{act} ACT</FactBox>
          <FactBox gridArea={'info22'}>&#36;{price}</FactBox>
          <FactBox gridArea={'info23'}>&#36;{percaid}</FactBox>
          <button
            className="Info-expand"
            onClick={() => {
              chrome.tabs.create({
                url: chrome.runtime.getURL('dashboard.html'),
              });
            }}
          >
            Gimme info bro
          </button>
          <ComparisonPlot
            width={460}
            height={180}
            className="Comparison-plot"
          />
        </FactContainer>
      </header>
    </div>
  );
};

export default Popup;
