var obs = new MutationObserver(function (mutations, observer) {
  injectArchiveButton()
});
obs.observe(document.body, { childList: true, subtree: true, attributes: false, characterData: false });

function injectArchiveButton() {
  const moveButton = document.querySelector('button.popup.move')
  if (moveButton) {
    const firstChild = moveButton.parentElement.childNodes[0]
    if (moveButton == firstChild) {
      function archive() {
        moveButton.click()
        const popup = document.querySelector('div.popup.move.select')
        archiveItem = popup.children[4]
        archiveItem.click()
      }

      const archiveButton = document.createElement('button')
      archiveButton.addEventListener("click", () => archive(), false)

      const text = document.createElement('span')
      text.textContent = "Archivovat"
      archiveButton.append(text)

      moveButton.insertAdjacentElement('beforebegin', archiveButton)
    }
    const archiveButton = moveButton.parentElement.childNodes[0]
    archiveButton.disabled = moveButton.disabled
  }
}