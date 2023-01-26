function weightResults(ValueNumber){

  document.getElementById("output").innerHTML = ValueNumber / 2.204;
  if (inputEl.value <= 0 || isNaN(inputEl.value)){
    errorEl.innerText = "Not Possible,please enter a correct number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      inputEl.value = "";
    }, 2000);
  } 
  else{
    resultEl.innerText = (+inputEl.value / 2.2).toFixed(2);

  }
}

inputEl.addEventListener("input", updateResults);
