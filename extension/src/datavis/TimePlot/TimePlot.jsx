import React, { useState, useEffect } from 'react';
import { acceptanceRates } from '../../data/csvload.js';
const Plot = React.lazy(() => import('react-plotly.js'));

const TimePlot = (props) => {
  const [plotData, setPlotData] = useState([]);

  const margins = 16;
  const axesColor = '#fff';

  useEffect(() => {
    acceptanceRates((years, universities) => {
      const data = [];
      for (const [university, series] of Object.entries(universities)) {
        data.push({
          x: years,
          y: series,
          mode: 'lines',
          name: university,
        });
      }
      setPlotData(data);
    });
  }, []);

  return (
    <React.Suspense
      fallback={<div className={props.className}>Loading...</div>}
    >
      <Plot
        className={props.className}
        data={plotData}
        layout={{
          autosize: true,
          title: {
            text: 'Comparison',
            font: {
              color: axesColor,
            },
          },
          margin: {
            l: margins + 50,
            r: margins,
            t: margins + 52,
            b: margins + 52,
          },
          yaxis: {
            title: 'Acceptance Rate',
            fixedrange: true,
            range: [0, 100],
            tickmode: 'linear',
            dtick: 400,
            color: axesColor,
          },
          xaxis: {
            title: 'Year',
            fixedrange: true,
            range: [2012, 2020],
            color: axesColor,
          },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
        }}
        config={{ responsive: true }}
        style={{ width: '100%', height: '100%' }}
      />
    </React.Suspense>
  );
};

export default TimePlot;
