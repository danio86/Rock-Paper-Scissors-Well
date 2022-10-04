let canvas = document.getElementById('game-area');
let ctx = canvas.getContext('2d');
//ctx is the snake. getContext(2d) allows us to drwaw in 2d in the cavas(game-area)
let snake = [
    {x: 2, y:2},
    {x: 3, y:2}, 
    {x: 4, y:2}
];
//an array of jsons is 1 element/value
let food = {x: 60, y:60}; 
//{x:..,y:..}this is 1 value called json! withs this a var can have "2" values!
let direction = 'LEFT';
let row = 10;
let col = 10;
let cellWidth = canvas.width/col;
let cellHight = canvas.height/row;


function addCube(x ,y) {
    ctx.fillRect(x, y, 9, 9);
};

function draw() {
    ctx.fillStyle = 'yellow';
    addCube(10, 20);
    addCube(20, 20);
    addCube(30, 20);
    addCube(40, 20);

    ctx.fillStyle = 'red';
    addCube(50, 50);
}

draw();          