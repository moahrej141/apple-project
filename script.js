function change1() {
  //document.getElementById("p22").style.color = "red";
  //document.getElementById("p22").style.fontSize = "30px";
  //document.querySelector("h3").style.color = "red";
  //var a = +prompt("entre a Number 1:");
  //var b = +prompt("entre a Number 2:");
  // alert("la somme est N°1 : " + (a + b));
  //  alert("la somme est N°2 : " + a * b);
  //  alert("la somme est N°3 : " + a / b);
  // alert("la somme est  N°4 : " + (a - b));
}

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('li');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// SIDE

function open5() {
  document.querySelector('aside').style.visibility = "visible";
}
function close5() {
  document.querySelector('aside').style.visibility = "hidden";
}
// end side

function bac(){
  var note = +prompt("entrer la note :");

} 


function vert(){
  document.getElementById("colorPP").setAttribute("fill","green");
  var elementsV = document.getElementsByClassName("colorP");

  for (let i = 0; i < elementsV.length; i++) {
    elementsV[i].style.color ="green";
    
  }
}
function Blue(){
  document.getElementById("colorPP").setAttribute("fill","green");
  var elementsV = document.getElementsByClassName("colorP");

  for (let i = 0; i < elementsV.length; i++) {
    elementsV[i].style.color ="Blue";
    
  }
}
function Red(){
  document.getElementById("colorPP").setAttribute("fill","green");
  var elementsV = document.getElementsByClassName("colorP");

  for (let i = 0; i < elementsV.length; i++) {
    elementsV[i].style.color ="Red";
    
  }
}
function Orange(){
  document.getElementById("colorPP").setAttribute("fill","green");
  var elementsV = document.getElementsByClassName("colorP");

  for (let i = 0; i < elementsV.length; i++) {
    elementsV[i].style.color ="Orange";
    
  }
}

