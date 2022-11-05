function rotar() {
    let firstTime = vecesHover == 0;
    vecesHover++;
    pausa = !pausa;
  let circulos = document.getElementsByClassName("circulo");
  const width = parseInt(
    document.defaultView.getComputedStyle(
      document.getElementById("container"),
      ""
    ).width
  );
  const width_circ = parseInt(
    document.defaultView.getComputedStyle(
      document.getElementsByClassName("circulo")[0],
      ""
    ).width
  );
  const radio = width / 2;
  const radio_circ = width_circ / 2;
  const anguloInicial = (2 * Math.PI) / circulos.length;
  var angulo = Math.PI / 2;

  function calcLeft(angulo) {
    return radio - radio_circ - Math.cos(angulo) * radio;
  }

  function calcTop(angulo) {
    return radio - radio_circ - Math.sin(angulo) * radio;
  }
  for (circulo of circulos) {
    circulo.style.transform = "none";
  }

  setInterval(function () {
    if (!pausa && firstTime) {
      angulo += 0.0025;
      for (elemento of circulos) {
        elemento.style.top = calcTop(angulo) + "px";
        elemento.style.left = calcLeft(angulo) + "px";
        angulo += anguloInicial;
      }
    }
  });
}

function parar(){
    pausa = !pausa;
    let circulos = document.getElementsByClassName("circulo");
    for(circulo of circulos){
        circulo.style.top = "50%";
        circulo.style.left = "50%";
        circulo.style.transform = "translate(-50%, -50%) scale(0)";
    }
    for(let segundos; segundos == 2; segundos += 0.2){
        crecimiento = 2/0.2;
    }
}

let pausa = true;
var vecesHover = 0;
document.getElementById("activador").addEventListener("mouseover", rotar);
document.getElementById("activador").addEventListener("mouseout", parar);
