import { colors } from './color.js'
const w = 30;
const h = 50;
const farbs = Object.keys(colors);
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
const palitra = document.getElementsByClassName('palitra');
/*let k = 0;
const palitraStr = document.createElement('div');
  palitraStr.classList.add('palitraStr');
for (const farb of farbs) {
 if (k = 0) {
  const palitraStr = document.createElement('div');
  palitraStr.classList.add('palitraStr');
}
  if (k < 37) {
   const farba = document.createElement('div');
   farba.classList.add('farba');
   farba.style.backgroundColor = farb;
   palitraStr.appendChild(farba);
   k++;
}
   else {k = 0};
if (k = 0) {palitra[0].appendChild(palitraStr)
};
};*/
let k = 0;
for (let i = 0; i < 4; i++) {
  const palitraStr = document.createElement('div');
  palitraStr.classList.add('palitraStr');
for (var j = 0; j < 37; j++) {
   const farba = document.createElement('div');
   farba.classList.add('farba');
   farba.style.backgroundColor = farbs[k + j];
   palitraStr.appendChild(farba);
   };
   k = k + j;
   palitra[0].appendChild(palitraStr)
};




const farbItems = document.getElementsByClassName('farba');

for (const farbItem of farbItems) {
  farbItem.addEventListener('click', function () { clBrush = this.style.backgroundColor; });
}
const divItems = document.getElementsByClassName('pxl');

for (const divItem of divItems) {
  divItem.addEventListener('click',
    function () { this.style.backgroundColor = clBrush; });
}
