function encodeAndDecodeMessages() {
  //take input value from the first textarea
  //clear the first input area
  //after click event encrypt the value and show it
  //  on the second textarea
  //show the decrypt input on the second textarea after click event

  const [firstTextArea, secondTextArea] =
    document.getElementsByTagName("textarea");
  const [encodeBtn, decodeBtn] = document.getElementsByTagName("button");

  let decodedMessage, encodedMessage;

  encodeBtn.addEventListener("click", function () {
    decodedMessage = firstTextArea.value;
    encodedMessage = encodeMessage(decodedMessage);
    secondTextArea.value = encodedMessage;
    firstTextArea.value = "";
  });

  decodeBtn.addEventListener("click", function () {
    secondTextArea.value = decodedMessage;
  });

  function encodeMessage(message) {
    let encodedMessage = "";

    for (const char of message) {
      encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
    }

    return encodedMessage;
  }
}
