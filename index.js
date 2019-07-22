const w=30; h=50;
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
const farbs = ['red', 'blue'];
let clBrush = farbs[0];
const divFarb = document.getElementsByClassName('farba');

for (let i = 0; i < divFarb.length; i++) {
  divFarb[i].style.backgroundColor = farbs[i];
}
const farbItems = document.getElementsByClassName('farba');

for (let i = 0; i < farbItems.length; i++) {
  farbItems[i].addEventListener('click', function() { clBrush = this.style.backgroundColor; });
}
const divItems = document.getElementsByClassName('xx');

for (let i = 0; i < divItems.length; i++) {
  divItems[i].addEventListener('click',
    function(){this.style.backgroundColor = clBrush;});
}
