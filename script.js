var colors = ["red", "green", "blue"];
var colorBoxes = [];

function box(backgroundColor) {
  var that = this;
  this.color = backgroundColor;
  this.number = 0;
  this.ele = document.createElement("div");
  this.ele.style.backgroundColor = this.color;
  this.ele.style.height = "100px";
  this.ele.style.width = "200px";
  this.ele.style.borderRadius = "10px";
  this.ele.style.fontSize = "18px";
  this.ele.style.display = "flex";
  this.ele.style.alignItems = "center";
  this.ele.style.justifyContent = "center";
  this.ele.style.textAlign = "center";
  
  this.ele.innerHTML = this.number;
  this.ele.addEventListener("click", function() {
    that.increaseNumber();
  });
  
  document.body.appendChild(this.ele);
};

box.prototype.increaseNumber = function() {
  this.number = this.number + 1;
  this.ele.innerHTML = this.number;
};

for (var i = 0; i < colors.length; i++) {
  colorBoxes.push(new box(colors[i]));
};