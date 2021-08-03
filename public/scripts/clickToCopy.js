const clickToCopy = () => {
  const copyText = document.querySelector('#URL')

  // Select the text
  window.getSelection().selectAllChildren(copyText)

  // Copy the text inside the text field
  document.execCommand('copy')

  // Remove select
  window.getSelection().removeAllRanges()

  window.alert(`Copied the  ${copyText.innerText}`)
}
