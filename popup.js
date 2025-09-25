document.getElementById("summarizeBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.scripting.executeScript(
      {
        target: { tabId: activeTab.id },
        func: () => document.body.innerText, // grab page text
      },
      (results) => {
        const text = results[0].result;
        document.getElementById("output").innerText =
          "Page text length: " + text.length;
      }
    );
  });
});
