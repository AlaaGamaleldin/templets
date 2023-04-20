

var buttonEl = document.querySelector(".btn");
var divEl = document.querySelector(".mydiv");

var colors = ["red", "green", "blue", "black", "gray"];
var i = 0;
buttonEl.onclick = function () {
divEl.style.backgroundColor = colors[i];
i++;
if(i == colors.length) {
    i = 0;
}
}