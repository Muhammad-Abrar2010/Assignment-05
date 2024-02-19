function changeBgColor(event) {
  const element = event.target;
  const getNumber = document.getElementById("number");
  element.classList.toggle("bg-green-400");

  if (element.classList.contains("bg-green-400")){
    getNumber.innerText = parseInt(getNumber.innerText)-1;
    
  } else {
    getNumber.innerText = parseInt(getNumber.innerText)+1;
  }

  if(parseInt(getNumber.innerText) < 4){
    alert("You can't book more than 4seats");
    getNumber.innerText = parseInt(getNumber.innerText)+1;

    element.classList.remove("bg-green-400");
  }


}

var elements = document.getElementsByClassName("Choice");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", changeBgColor);
}

