const w = 30; 
const h = 50;
const farbs = ['red', 'blue'];
let clBrush = farbs[0];
let fld = document.getElementsByClassName('fld');
    for (let i = 0; i < w; i++) {
		let str = document.createElement('div');
		str.classList.add('str');
		for (let j = 0; j < h; j++) {
             let xx = document.createElement('div');
             xx.classList.add('xx');
             str.appendChild(xx);	
		};
		fld[0].appendChild(str);
};
let palitra = document.createElement('div');
		palitra.classList.add('palitra');
		for (let i = 0; i < farbs.length; i++) {
             let farba = document.createElement('div');
             farba.classList.add('farba');
             farba.style.backgroundColor = farbs[i];
             palitra.appendChild(farba);	
		};
		fld[0].appendChild(palitra);

const farbItems = document.getElementsByClassName('farba');

for (let i = 0; i < farbItems.length; i++) {
  farbItems[i].addEventListener('click', function() { clBrush = this.style.backgroundColor; });
}
const divItems = document.getElementsByClassName('xx');

for (let i = 0; i < divItems.length; i++) {
  divItems[i].addEventListener('click',
    function(){this.style.backgroundColor = clBrush;});
}
