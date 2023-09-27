// JavaScript

const color = document.querySelector('#colorText');
const text = document.querySelector('#colorPicker');

//背景色を変更する関数
//function構文を使う書き方
function changeColor(){
  document.body.style.backgroundColor = color.value;
  text.textContent = 'カラーコード : ${color.value}';
}

//アロー関数を使う書き方
// const changeColor = () => {
//   document.body.style.backgroundColor = color.value;
//   text.textContent = color.value;
// }

// カラーピッカーが変更されたときに、背景色を変える
color.addEventListener('input', changeColor);
