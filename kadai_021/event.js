const newText = document.getElementById('text');
const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
  setTimeout(() => {
    newText.textContent = 'ボタンをクリックしました';
},2000);
});