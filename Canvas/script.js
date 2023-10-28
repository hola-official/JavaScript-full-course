const myCanva = document.getElementById("myCanvas");
const context = myCanva.getContext("2d");
const ctx = myCanva.getContext("2d");

// context.lineWidth = 20
// context.strokeStyle = "red"
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke();

//********************To create Triangle******************//
// context.lineWidth = 10;
// context.fillStyle = "red";
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.fill();

//*******To create Rectangle*******//
// context.fillStyle = "yellow";
// context.fillRect(0, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 250, 250, 250);

//****************Text********************//
ctx.font = "50px MV Boli";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("GAME OVER", myCanva.width / 2, myCanva.height / 2);
