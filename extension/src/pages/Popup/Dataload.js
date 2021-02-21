export const getData = (callback) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log('full send');
    chrome.tabs.sendMessage(
      tabs[0].id,
      { command: 'searchEmail' },
      function (response) {
        callback(response);
        console.log(response);
      }
    );
  });
};
