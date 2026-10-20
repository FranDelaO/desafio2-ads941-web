// Resalta la tarjeta seleccionada por el usuario
document.querySelectorAll('.tarjeta').forEach(function (tarjeta) {
  tarjeta.addEventListener('click', function () {
    tarjeta.classList.toggle('activa');
  });
});
