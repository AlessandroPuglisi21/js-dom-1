const lampadina = document.getElementById("lampadina");
const bottone = document.getElementById("lampadinabtn");

// bottone.addEventListener('click', function() {
//     lampadina.src = './img/img/yellow_lamp.png'
// }
// );
// bottone.addEventListener('click', function() {
//     this.textContent = 'Spegni'
// }
// );

bottone.addEventListener("click", function () {
    console.log(lampadina.src)
 if (lampadina.src.includes("white_lamp.png")) {
    lampadina.src = "./img/img/yellow_lamp.png";
    bottone.textContent = "Accendi";
  } else {
    lampadina.src = "./img/img/white_lamp.png";
    bottone.textContent = "Spegni";
  }
});
