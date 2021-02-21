import React from 'react';
import './DashData.css';
import TimePlot from '../../../datavis/TimePlot';

const DashData = () => {
  const univName = 'Massachusetts Institute of Technology';
  const univInfo = `Massachusetts Institute of Technology (MIT) is a private land-grant
              research university in Cambridge, Massachusetts. The institute has an
              urban campus that extends more than a mile (1.6 km) alongside the
              Charles River. The institute also encompasses a number of major
              off-campus facilities such as the MIT Lincoln Laboratory, the Bates
              Center, and the Haystack Observatory, as well as affiliated laboratories
              such as the Broad and Whitehead Institutes. Founded in 1861 in response
              to the increasing industrialization of the United States, MIT adopted a
              European polytechnic university model and stressed laboratory
              instruction in applied science and engineering. It has since played a
              key role in the development of many aspects of modern science,
              engineering, mathematics, and technology, and is widely known for its
              innovation and academic strength. It is frequently regarded as one of
              the most prestigious universities in the world.[10][11][12][13]`;

  return (
    <div className="DashData">
      <div id="Univ-name">{univName}</div>
      <div id="Univ-text">{univInfo}</div>
      <TimePlot className="Univ-graph" />
    </div>
  );
};

export default DashData;
