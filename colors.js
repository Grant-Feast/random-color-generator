const heading = document.querySelector('#heading');
const btn = document.querySelector('.btn');

// A function which changes the background color when the button is clicked.
btn.addEventListener('click', function () {
  const newColor = randColor()
  document.body.style.backgroundColor = newColor;
  heading.innerText = newColor;
})

const randColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  if (r < 110 && g < 110 && b < 110){
    heading.style.color = 'white';
  } else {
    heading.style.color = 'black';
  }
  return `rgb(${r}, ${g}, ${b})`;
}