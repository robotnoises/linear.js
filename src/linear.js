function Linear(canvasId) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(20.5, 20); // This would be the first click
  // here's the moving of the mouse
  ctx.lineTo(250.5, 250); // This would be after they release
  ctx.stroke();
}

window.Linear = Linear;