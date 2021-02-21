import React from 'react';
const Plot = React.lazy(() => import('react-plotly.js'));

const TimePlot = (props) => {
  const margins = 16;
  const axesColor = '#fff';

  return (
    <React.Suspense
      fallback={<div className={props.className}>Loading...</div>}
    >
      <Plot
        className={props.className}
        data={[
          {
            x: props.otherxs,
            y: props.otherys,
            type: 'scatter',
            mode: 'markers',
            marker: { color: 'blue' },
          },
          {
            x: [props.x],
            y: [props.y],
            type: 'scatter',
            mode: 'markers',
            marker: { color: 'red' },
          },
        ]}
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
            title: 'SAT Scores',
            fixedrange: true,
            range: [0, 1600],
            tickmode: 'linear',
            dtick: 400,
            color: axesColor,
          },
          xaxis: {
            title: 'Acceptance Rate',
            fixedrange: true,
            range: [0, 100],
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
