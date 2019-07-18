drawField(2,2);
function drawField(h, w) 
{
	let field = document.getElementById('field');
	for (let i = 0; i < h; i++) {
		let line = document.createElement('div');
		line.classList.add('line');
		for (let j = 0; j < w; j++) {
             let block = document.createElement('div');
             block.classList.add('block');
             block.classList.add(j > w ? 'filled' : 'space');
             line.appendChild(block);	
		};
		field.appendChild(line);
	}
	//let dl = document.getElementById('construction');
	//pyramid.removeChild(dl);
}
