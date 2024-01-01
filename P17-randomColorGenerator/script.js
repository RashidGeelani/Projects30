const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i=0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};


let intervalID;


const startColorChange = function () {
  if (!intervalID) {
    intervalID = setInterval(changeBg, 700);
  }
 function changeBg(){
  document.body.style.backgroundColor = randomColor();
 }
};



const stopColorChange = function(){
  clearInterval(intervalID);
  intervalID = null;
};


document.getElementById('start').addEventListener('click', startColorChange);


document.getElementById('stop').addEventListener('click', stopColorChange);