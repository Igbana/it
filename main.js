console.log('Hello World!');

let portfolio = [
	"Igbana Israel",
	"a flutter developer",
	"a python wiz",
	"a backend developer",
	"a web scraper",
]

let writer = document.getElementById("writer");
let blinker = document.getElementById("blinker");

let count = 0;
let letter = 0
let delay = 0;
let doNothing = () => clearInterval(wr);

function write() {
	if (letter < portfolio[count].length) {
		writer.innerHTML += portfolio[count][letter];
		letter += 1;
	} else {
		if (delay == 6) {
			if (count == 4) {
				count = 0;
			} else {
				count += 1;
			}
			letter = 0;
			writer.innerHTML = "";
			delay = 0;
		}
		delay += 1;
	}
}

let blink = () => blinker.innerHTML = blinker.innerHTML == "_" ? "" : "_";
setInterval(blink, 100)
let wr = setInterval(write, 200);