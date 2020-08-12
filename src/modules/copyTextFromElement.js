//If you want to copyText from Element
export function copyTextFromElement(elementID) {
  let element = document.getElementById(elementID); //select the element

  let elementText = element.innerText; //get the text content from the element

  if (element.tagName == 'INPUT' ) {
    elementText = element.value;
  }

  
  elementText = elementText.trim();

  if (elementText != '') {
    copyText(elementText); //use the copyText function below
    alert('Copied: \n' + elementText);
  }else {
    alert('Nothing to copy.');
  }
  
}

//If you only want to put some Text in the Clipboard just use this function
// and pass the string to copied as the argument.
function copyText(text) {
  navigator.clipboard.writeText(text);
}

