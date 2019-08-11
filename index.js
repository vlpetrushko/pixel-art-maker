import { colors } from './color.js'
const w = 30;
const h = 50;
const szPx = 15;
const farbs = Object.keys(colors);
let clBrush ;
//поле для рисования
const fld = document.createElement('div');
fld.classList.add('fld');
document.body.appendChild(fld);
for (let i = 0; i < w; i++) {
  const str = document.createElement('div');
  str.classList.add('str');
  for (let j = 0; j < h; j++) {
    const pxl = document.createElement('div');
    pxl.classList.add('pxl');
    str.appendChild(pxl);
  }
  fld.appendChild(str);
}


const pltr = document.createElement('div');
pltr.classList.add('pltr');
document.body.appendChild(pltr);

const palitra = document.createElement('div');
palitra.classList.add('palitra');
pltr.appendChild(palitra);


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
   palitra.appendChild(palitraStr)
};


const instr = document.createElement('div');
instr.classList.add('instr');
pltr.appendChild(instr);

const curBrush = document.createElement('div');
curBrush.classList.add('palitraStr');
instr.appendChild(curBrush);

const CrBr = document.createElement('div');
curBrush.appendChild(CrBr);
CrBr.innerHTML = 'Current Brush';

const CurBr = document.createElement('div');
CurBr.classList.add('curBr');
curBrush.appendChild(CurBr);

const input = document.createElement('input');
input.classList.add('input');
input.type = 'color';
input.backgroundColor = 'linear-gradient';
input.style.width = '120px';
input.style.height = '60px';
instr.appendChild(input);

const farbItems = document.getElementsByClassName('farba');

for (const farbItem of farbItems) {
  farbItem.addEventListener('click', function () { clBrush = this.style.backgroundColor; });
};

//const divCurBr = document.getElementsByClassName('curBr');
CurBr.style.backgroundColor = clBrush;

const divItems = document.getElementsByClassName('pxl');

for (const divItem of divItems) {
  divItem.addEventListener('click',
    function () { this.style.backgroundColor = clBrush; });
};
