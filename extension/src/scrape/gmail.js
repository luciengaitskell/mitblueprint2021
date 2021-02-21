console.log('street sweeps');

export default () => {
  var elements = document.getElementsByClassName('gD');
  console.log(elements);
  return elements.item(0)['dataset']['hovercardId'];
};
