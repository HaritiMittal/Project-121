var i = 0;
function change() {
  var doc = document.getElementById("body");
  var color = ["pink", "aqua", "rgb(132, 0, 255)", "rgb(235, 223, 255)"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);