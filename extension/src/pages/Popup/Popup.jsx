import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

import FactBox from '../../containers/FactBox';
import FactContainer from '../../containers/FactContainer';

import ComparisonPlot from '../../datavis/ComparisonPlot';

import { getData } from './Dataload.js';
import { fullData } from '../../data/csvload.js';

const Popup = () => {
  const [univData, setUnivData] = useState({
    name: '...',
    admitrate: '...',
    sfratio: '...',
    state: 'US',
    act: '...',
    price: '...',
    percaid: '...',
  });

  useEffect(() => {
    getData((emailInfo) => {
      var univName = '';
      switch (emailInfo.email) {
        case 'collegeadmissions@uchicago.edu':
          univName = 'University of Chicago';
          break;
        case 'admission@case.edu':
          univName = 'Case Western Reserve University';
          break;
        case 'admissions@mit.edu':
          univName = 'Massachusetts Institute of Technology';
          break;
      }
      console.log(univName);

      fullData((data) => {
        console.log(data);
        let univData = data[univName];
        univData['name'] = univName;
        setUnivData(univData);
      });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <FactContainer>
          <h3 className="University-title">{univData.name}</h3>
          <FactBox gridArea={'info11'}>
            {univData.admitrate}% admit rate
          </FactBox>
          <FactBox gridArea={'info12'}>
            {univData.sfratio} student-to-faculty
          </FactBox>
          <FactBox gridArea={'info13'}>{univData.state}</FactBox>
          <FactBox gridArea={'info21'}>{univData.act} ACT</FactBox>
          <FactBox gridArea={'info22'}>&#36;{univData.price}</FactBox>
          <FactBox gridArea={'info23'}>{univData.percaid}%</FactBox>
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
