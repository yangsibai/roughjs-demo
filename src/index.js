import rough from 'roughjs'

function draw(el) {
  let rc = rough.canvas(el);
  rc.rectangle(10, 10, 300, 400); // x, y, width, height
}

const canvasElement = document.getElementById('canvas');
draw(canvasElement);