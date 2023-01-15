var up = document.getElementById("nemo");

var safeSet = [
  "It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform. ― Roy T. Bennett",
  "Start each day with a positive thought and a grateful heart. ― Roy T. Bennett, The Light in the Heart",
  "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain. ― Frank Herbert, Dune",
  "If you've got nothing to dance about, find a reason to sing. ― Melody Carstairs",
  "Ever Tried. Ever Failed. No matter. Try again. Fail again. Fail better. ― Samuel Beckett",
];


function random(mn, mx) {
  return Math.random() * (mx - mn) + mn;
}

myFunction = () =>{
    document.getElementById("nemo").innerHTML = safeSet[Math.floor(Math.random() * (5))];
}


