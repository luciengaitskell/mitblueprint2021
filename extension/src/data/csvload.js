import * as d3 from 'd3';

export const acceptanceRates = (callback) => {
  let universitySeries = {};
  let years = [];
  d3.csv(
    'https://raw.githubusercontent.com/WilliamKopans/UniVisData/main/CollegeTimeSeries.csv',
    function (data) {
      years.push(data['Year']);

      for (const [key, value] of Object.entries(data)) {
        if (key === 'Year' || key === '') {
          continue;
        }

        if (universitySeries[key] === undefined) {
          universitySeries[key] = [value];
        } else {
          universitySeries[key].push(value);
        }
      }
      //console.log(data);
    }
  ).then(() => {
    console.log('Done loading data');
    callback(years, universitySeries);
  });
};

export default () => {
  acceptanceRates((years, series) => {
    console.log(years);
    console.log(series);
  });
};
