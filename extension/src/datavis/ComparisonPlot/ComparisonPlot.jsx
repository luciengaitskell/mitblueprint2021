import React, { useEffect, useState, Suspense } from 'react';

const ComparisonPlot = (props) => {
  const [graph, setGraph] = useState(<div></div>);
  const Plot = React.lazy(() => import('react-plotly.js'));

  const margins = 16;
  const axesColor = '#fff';

  useEffect(() => {
    setGraph(
      <Plot
        className="Comparison-plot"
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
          width: props.width,
          height: props.height,
          title: {
            text: 'Comparison',
            font: {
              color: axesColor,
            },
          },
          margin: {
            l: margins + 50,
            r: margins,
            t: margins + 20,
            b: margins + 16,
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
      />
    );
  }, []);

  return (
    <Suspense
      fallback={
        <div
          className="Comparison-plot"
          style={{
            height: props.height,
            width: props.width,
          }}
        >
          Loading...
        </div>
      }
    >
      {graph}
    </Suspense>
  );
};

export default ComparisonPlot;
