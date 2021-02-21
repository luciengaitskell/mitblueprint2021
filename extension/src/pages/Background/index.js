import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

console.log('This is the background page.');
console.log('Put the background scripts here.');

// Listen for the popup.js connection
chrome.extension.onConnect.addListener(function (port) {
  console.log('Connected .....');
  port.postMessage('Hi Popup.js'); // send example response on connection

  // Listen for messages from the client (popup.js)
  port.onMessage.addListener(function (msg) {
    console.log('message recieved' + msg);

    // Defined execute action by command from popup.js
    if (msg === 'dashboard') {
      chrome.tabs.create({ url: chrome.runtime.getURL('popup.html') });
    }
  });
});
chrome.browserAction.onClicked.addListener(function (tab) {});
