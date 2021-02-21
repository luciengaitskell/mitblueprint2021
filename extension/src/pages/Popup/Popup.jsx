import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

import FactBox from '../../containers/FactBox';
import FactContainer from '../../containers/FactContainer';

import ComparisonPlot from '../../datavis/ComparisonPlot';

import { getData } from './Dataload.js';

const Popup = () => {
  const [univName, setUnivName] = useState(null);

  useEffect(() => {
    getData((emailInfo) => {
      switch (emailInfo.email) {
        case 'collegeadmissions@uchicago.edu':
          setUnivName('University of Chicago');
          break;
        case 'admission@case.edu':
          setUnivName('Case Western Reserve University');
          break;
        case 'admissions@mit.edu':
          setUnivName('Massachusetts Institute of Technology');
          break;
      }
    });
  }, []);

  console.log(univName);

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
