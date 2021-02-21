import { printLine } from './modules/print';
import scrape from '../../scrape/gmail.js';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('recieved');
  console.log(
    sender.tab
      ? 'from a content script:' + sender.tab.url
      : 'from the extension'
  );
  if (request.command == 'searchEmail') {
    const email = scrape();
    sendResponse({ email: email });
  }
});
