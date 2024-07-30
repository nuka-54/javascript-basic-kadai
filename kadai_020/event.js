const newText = document.getElementById('text');

const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
  newText.textContent = 'ボタンをクリックしました';

  console.log(newText)
});
