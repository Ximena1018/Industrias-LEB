document.getElementById("facturaForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  var fecha = document.getElementById("fecha").value;
  var documento = document.getElementById("documento").value;
  var nombre = document.getElementById("nombre").value;
  var valorTotal = parseFloat(document.getElementById("valorTotal").value);
  var numAbonos = parseInt(document.getElementById("numAbonos").value);
  var valorAbono = parseFloat(document.getElementById("valorAbono").value);

  // Validar que el valor del abono no sea mayor que el valor total
  if (valorAbono > valorTotal) {
    alert("El valor del abono no puede ser mayor que el valor total.");
    return;
  }

  // Calcular nuevo saldo
  var nuevoSaldo = valorTotal - valorAbono;

  // Actualizar valor total en el formulario
  document.getElementById("valorTotal").value = nuevoSaldo.toFixed(2);

  // Aquí puedes agregar la lógica para guardar la información (enviar a servidor, guardar en localStorage, etc.)
  alert("Información guardada correctamente.");

  // Puedes resetear el formulario si es necesario
  // this.reset();
});

function listar() {
  alert("Funcionalidad de listar");
}

function mostrar() {
  alert("Funcionalidad de mostrar");
}

function modificar() {
  alert("Funcionalidad de modificar");
}