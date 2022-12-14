let count=0, enter=0, left=0;

const cntEnter=document.getElementById("count-enter");
const cntLeft=document.getElementById("count-left");

function increment() {
	enter+=1;
	cntEnter.textContent=enter;
}
function decrement () {
	left+=1;
	cntLeft.textContent=left;
}

function save () {
	document.getElementById('prev-entry').textContent+=enter+" - ";
	document.getElementById('prev-left').textContent+=left+" - ";


	count+=(enter-left);
	document.getElementById('total').textContent=count;


	// resetting value of enter and left
	cntEnter.textContent=0;
	cntLeft.textContent=0;
	enter=0, left=0;
}

