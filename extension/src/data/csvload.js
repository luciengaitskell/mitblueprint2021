import * as d3 from 'd3';

export const acceptanceRates = (callback) => {
  let universitySeries = {}; //empty object - value corresponding cell of year
  let years = []; //empty array then append
  d3.csv(
    'https://raw.githubusercontent.com/WilliamKopans/UniVisData/main/CollegeTimeSeries.csv',
    function (data) {
      years.push(data['Year']);

      for (const [key, value] of Object.entries(data)) {
        if (key === 'Year' || key === '') { //header as key - value as value 
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

export const fullData = (callback) => {
  let unviersities = {}; //empty object - value corresponding cell of year
  
  d3.csv(
    'https://raw.githubusercontent.com/WilliamKopans/UniVisData/main/CollegeTimeSeries.csv',
    function (data) {
      let univData = {}

      univData['price'] = data['Total.price.for.out.of.state.students.living.on.campus.2019.20..DRVIC2019.']
      univData['state'] = data['State.abbreviation..HD2019.']
      univData['ACT'] = data['ACT.Composite.75th.percentile.score..ADM2019.']
      univData['sfratio'] = data['Student.to.faculty.ratio..EF2018D_RV.']
      univData['admitrate'] = data['Percent.admitted...total..DRVADM2017_RV.']
      univData['percaid'] = data['Percent.of.undergraduate.students.awarded.federal..state..local..institutional.or.other.sources.of.grant.aid..SFA1819.']

        universities[data['instnm']] = univData
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
