// Слушаем сообщения от background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "clickLink") {
    const link = document.querySelector('a.clickme'); // Ищем ссылку по селектору
    if (link) {
      link.click(); // Кликаем на ссылку, если она найдена
    }
  }
});
