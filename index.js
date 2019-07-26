import { colors } from './color.js'
console.log(colors);
const w = 30;
const h = 50;
//let farbs = new Array();
const farbs = Object.keys(colors);
//const farbs = ['red', 'blue'];
/*for (let i = 0; i < colors.length; i = i + 2){
farbs[i/2] = colors[i];
};*/
console.log(farbs);
let clBrush = farbs[0];
const fld = document.getElementsByClassName('fld');

for (let i = 0; i < w; i++) {
  const str = document.createElement('div');

  str.classList.add('str');
  for (let j = 0; j < h; j++) {
    const pxl = document.createElement('div');

    pxl.classList.add('pxl');
    str.appendChild(pxl);
  }
  fld[0].appendChild(str);
}
const palitra = document.createElement('div');

palitra.classList.add('palitra');
for (const farb of farbs) {
  const farba = document.createElement('div');
  console.log(farb);
  farba.classList.add('farba');
  farba.style.backgroundColor = farb;
  palitra.appendChild(farba);
}
fld[0].appendChild(palitra);

const farbItems = document.getElementsByClassName('farba');

for (const farbItem of farbItems) {
  farbItem.addEventListener('click', function () { clBrush = this.style.backgroundColor; });
}
const divItems = document.getElementsByClassName('pxl');

for (const divItem of divItems) {
  divItem.addEventListener('click',
    function () { this.style.backgroundColor = clBrush; });
}
