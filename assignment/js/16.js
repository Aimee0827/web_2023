// js/script.js

function binaryToHex(binaryString) {
  // 이진수를 16진수로 변환하는 함수
  var decimalValue = parseInt(binaryString, 2);
  var hexValue = decimalValue.toString(16).toUpperCase();
  return hexValue;
}

function convertAndDisplay() {
  // HTML에서 입력값을 가져와 변환 후 결과를 화면에 출력하는 함수
  var binaryInput = document.getElementById("binaryInput").value;
  var hexOutput = binaryToHex(binaryInput);
  document.getElementById("hexOutput").innerText = hexOutput;
}
