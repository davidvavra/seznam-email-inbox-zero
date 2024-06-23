
const moveButton = document.querySelector('button.popup.move')
if (moveButton) {

  async function archive() {
    moveButton.click()
    const popup = document.querySelector('div.popup.move.select')
    archiveItem = popup.children[4]
    archiveItem.click()
  }

  const archiveButton = document.createElement('button')
  archiveButton.addEventListener("click", () => archive(), false)

  // const icon = document.createElement('svg')
  // icon.setAttribute("viewBox", "0 0 16 16")
  // icon.setAttribute("class", "icon icon-delete")
  // archiveButton.append(icon)
  // const path = document.createElement('path')
  // path.setAttribute("d", "M8 1c.813 0 1.53.397 1.987 1H6.013C6.47 1.397 7.187 1 8 1m3.5 1h-.351A3.495 3.495 0 0 0 8 0a3.495 3.495 0 0 0-3.149 2H4.5a2 2 0 0 0-2 2h11a2 2 0 0 0-2-2M4.002 15.55A.5.5 0 0 0 4.5 16h7a.5.5 0 0 0 .497-.45L13 5H3l1.002 10.55z")
  // icon.append(path)

  const text = document.createElement('span')
  text.textContent = "Archivovat"
  archiveButton.append(text)

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
  moveButton.insertAdjacentElement('beforebegin', archiveButton)
}