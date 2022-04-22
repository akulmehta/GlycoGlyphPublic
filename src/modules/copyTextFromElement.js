//If you want to copyText from Element
export function copyTextFromElement(elementID) {
  let element = document.getElementById(elementID); //select the element

  let elementText = element.innerText; //get the text content from the element

  if (element.tagName == 'INPUT' ) {
    elementText = element.value;
  }

  
  elementText = elementText.trim();

  if (elementText != '') {
    copyText(elementText).then(() => {
      alert('Copied: \n' + elementText);
    })
    .catch(() => {
      alert('Could not copy text. Please try copying manually');
    }); //use the copyText function below
  }else {
    alert('Nothing to copy.');
  }
  
}

//If you only want to put some Text in the Clipboard just use this function
// and pass the string to copied as the argument.
function copyText(text) {
  return navigator.clipboard.writeText(text);
}

