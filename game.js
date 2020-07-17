var n = 3;
var key = 0;
var colors = [];
var boxes = document.querySelectorAll(".box");
var buttons = document.querySelectorAll("button");

function changeDiff(n) {
	for(var i = 0; i < n; i++) {
		var r = Math.floor(256*Math.random());
		var g = Math.floor(256*Math.random());
		var b = Math.floor(256*Math.random());
		colors[i] = "rgb(" + r + ", " + g + ", " + b + ")";
		boxes[i].style.backgroundColor = colors[i];
		boxes[i].addEventListener("click", check);
	}
	for (var i = n; i < 9; i++)
		boxes[i].style.backgroundColor = "#232323";

	key = Math.floor(n*Math.random());
	buttons[0].textContent = "New Colors";
	document.querySelector("#ask").textContent = colors[key];
	document.querySelector("h1").style.backgroundColor = "steelblue";
}

function check() {
	if (this.style.backgroundColor === colors[key]) {
		document.querySelector("#message").textContent = "Correct!";
		document.querySelector("h1").style.backgroundColor = colors[key];
		buttons[0].textContent = "Play Again";
		for (var j = 0; j < n; j++)
			boxes[j].style.backgroundColor = colors[key];
	}
	else {
		document.querySelector("#message").textContent = "Try Again";
		this.style.backgroundColor = "#232323";
	}
}
changeDiff(n);

for (var i = 0; i < 4; i++)
	buttons[i].addEventListener("click", function() {
		document.querySelector("#message").textContent = "";
		for (var j = 0; j < 9; j++)
			boxes[j].removeEventListener("click", check);
	});
buttons[0].addEventListener("click", function() { changeDiff(n); });
buttons[1].addEventListener("click", function() {
	n = 3;
	changeDiff(n);
	buttons[1].classList.add("selected");
	buttons[2].classList.remove("selected");
	buttons[3].classList.remove("selected");
});
buttons[2].addEventListener("click", function() {
	n = 6;
	changeDiff(n);
	buttons[1].classList.remove("selected");
	buttons[2].classList.add("selected");
	buttons[3].classList.remove("selected");
});
buttons[3].addEventListener("click", function() {
	n = 9;
	changeDiff(n);
	buttons[1].classList.remove("selected");
	buttons[2].classList.remove("selected");
	buttons[3].classList.add("selected");
});
