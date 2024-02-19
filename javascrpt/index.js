function main(event) {
  const element = event.target;
  const getNumber = document.getElementById("number");
  const getSeatNumber = document.getElementById("seat-number");
  const totalMoney = document.getElementById("totalMoney")
  const link = document.createElement("p");
  link.innerHTML = `<ul style="display: flex ;gap:24px; padding: 12px;" id="removeId">
  <li>Seat</li>
  <li>Economy</li>
  <li>550TK</li>
</ul>`;

  const appender = document.getElementById("box");
  const getDiv = document.getElementById("parentDiv");

  element.classList.toggle("bg-green-400");

  if (element.classList.contains("bg-green-400")) {
    getNumber.innerText = parseInt(getNumber.innerText) - 1;
    getSeatNumber.innerText = parseInt(getSeatNumber.innerText) + 1;
    totalMoney.innerText = parseInt(totalMoney.innerText)+550;

    appender.appendChild(link);
  } else {
    getNumber.innerText = parseInt(getNumber.innerText) + 1;
    getSeatNumber.innerText = parseInt(getSeatNumber.innerText) - 1;
    totalMoney.innerText = parseInt(totalMoney.innerText)-550;
    appender.removeChild(appender.lastElementChild);
  }

  if (parseInt(getNumber.innerText) < 4) {
    alert("You can't book more than 4 seats");
    getNumber.innerText = parseInt(getNumber.innerText) + 1;
    getSeatNumber.innerText = parseInt(getSeatNumber.innerText) - 1;
    totalMoney.innerText = parseInt(totalMoney.innerText)-550;
    element.classList.remove("bg-green-400");
    appender.removeChild(appender.lastElementChild);
  }

  return;
}

var elements = document.getElementsByClassName("Choice");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", main);
}
