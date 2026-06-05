var obs = new MutationObserver(function (mutations, observer) {
  injectArchiveButton()
});
obs.observe(document.body, { childList: true, subtree: true, attributes: false, characterData: false });

function injectArchiveButton() {
  const buttonGroup = document.querySelector('span.button-group')
  if (buttonGroup) {
    const firstButton = buttonGroup.childNodes[0]
    if (firstButton.classList.contains('popup')) {
      // archive button is not there yet, create it
      function archive() {
        firstButton.click()
        const popup = document.querySelector('wm-select[role="menu"]')
        archiveItem = popup.children[4]
        archiveItem.click()
      }

      const archiveButton = document.createElement('button')
      archiveButton.addEventListener("click", () => archive(), false)

      const text = document.createElement('span')
      text.textContent = "Archivovat"
      archiveButton.append(text)

      firstButton.insertAdjacentElement('beforebegin', archiveButton)
    }
    if (!firstButton.classList.contains('popup')) {
      // disable archive button if move button is also disabled
      firstButton.disabled = buttonGroup.childNodes[1].disabled
    }
  }
}