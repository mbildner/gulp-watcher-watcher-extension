/* global chrome, $ */

'use strict';

// var toggleDisplay = (function () {
//   var isShowing = false;
//   return function (tabId) {
//     (isShowing =! isShowing)
//       ? chrome.pageAction.hide(tabId)
//       : chrome.pageAction.show(tabId);
//   };
// })();


// chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
//   chrome.pageAction.show(tabId);
//   console.log(tabId);
// });


// console.log('working');


chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        hostEquals: 'www.google.com',
                        schemes: ['https']
                    }
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
