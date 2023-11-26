chrome.action.onClicked.addListener((tab) => {
  // Посылаем сообщение в content.js на активной вкладке, чтобы кликнуть на ссылку
  chrome.tabs.sendMessage(tab.id, {action: "clickLink"});
});
