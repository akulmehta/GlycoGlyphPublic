//If you want to copyText from Element
export function copyTextFromElement(elementID) {
  let element = document.getElementById(elementID); //select the element

  let elementText = element.textContent; //get the text content from the element

  if (element.tagName == 'INPUT' ) {
    elementText = element.value;
  }

  copyText(elementText); //use the copyText function below
  alert('Copied');
}

//If you only want to put some Text in the Clipboard just use this function
// and pass the string to copied as the argument.
function copyText(text) {
  navigator.clipboard.writeText(text);
}