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
    function() { this.style.backgroundColor = clBrush; });
}
