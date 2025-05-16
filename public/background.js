console.log("loaded background.js");


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggleReactApp') {
    // Find active YouTube tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab && activeTab.url.includes('youtube.com')) {
        chrome.tabs.sendMessage(activeTab.id, {
          action: 'toggleReactApp',
          show: message.show
        });
      }
    });
  }
});
