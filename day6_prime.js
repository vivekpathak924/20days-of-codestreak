function PrimeNumber() 
{
    var inVar = document.getElementById("input").value;
    var outVar = document.getElementById("PAGE_OUTPUT");
    var prime = "";
    for (var i = 2; i <= inVar; i++) 
    {
      var isPrime = true;
      for (var j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        prime += i + " ";
      }
    }
    outVar.innerHTML = "LIST OF PRIME NUMBER TILL " + inVar + " = " + prime;
  }