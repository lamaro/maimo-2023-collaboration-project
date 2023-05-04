window.addEventListener("scroll", function() {
  var scrollPosition = window.scrollY;
  var heroHeight = document.getElementById("hero").offsetHeight;
  var nav = document.querySelector("nav");
  if (scrollPosition > heroHeight) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});



/*Se muestra y se deja de mostrar la segunda parte de la grilla de cartas.
A futuro deberia optimizarlo sacando los id row1 y row2 y diciendo que
a partir del 3er article de la card-grid no tiene que verse el resto de la grid
y que al clickear el ver mas se vea todo el resto de la card grid oculto y asi*/
const verMas = document.getElementById('toggle-grid');
const verMenos = document.getElementById('toggle-grid2');
const secondRow = document.getElementById('row2');

verMas.addEventListener('click', () => {

  verMas.classList.add('hidden');
  verMenos.classList.remove('hidden');
  secondRow.classList.remove('hidden');
});

verMenos.addEventListener('click', () => {

  verMas.classList.remove('hidden');
  verMenos.classList.add('hidden');
  secondRow.classList.add('hidden');
});

