let items = document.querySelectorAll('.s');

let pos = 0;

function order(){
	if(pos == 1) pos = -items.length + 1;
	else if(pos == -items.length) pos = 0;

	for (var i = 0; i < items.length; i++) {
        let c = (pos + i) * 100;
        items[i].style.transform = `translate3d(${c}%, 0, 0)`;
    }
}

function derecha(){
	pos--;
	order();
}

function izquierda(){
	pos++;
	order();
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") izquierda();
    else if (event.key === "ArrowRight") derecha();
});

order();