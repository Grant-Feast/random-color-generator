const heading = document.querySelector('#heading');
const btn = document.querySelector('.btn');

// A function which changes the background color when the button is clicked.
btn.addEventListener('click', function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const newColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = newColor;
  heading.innerText = newColor;
})