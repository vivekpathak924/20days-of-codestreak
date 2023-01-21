var pattern = "";
for (var i = 1; i <= 7; i++) {
  for (var j = 1; j <= i; j++) {
    pattern += "*";
  }
  pattern += "<br>";
}
document.getElementById("pattern").innerHTML = pattern;