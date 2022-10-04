//Game Area:
let canvas = document.getElementById('game-area');
let ctx = canvas.getContext('2d');
//ctx is the snake. getContext(2d) allows us to drwaw in 2d in the cavas(game-area)

let snake = [
    {x: 2, y:2},
    {x: 3, y:2}, 
    {x: 4, y:2}
];
//an array of jsons is 1 element/value
let food = {x: 5, y: 5}; 
//{x:..,y:..}this is 1 value called json! withs this a var can have "2" values!
let direction = 'LEFT';

let row = 30;
let col = 30;
let cellWidth = canvas.width/col;
let cellHight = canvas.height/row;
//this creates a raster with cells


function addCube(x ,y) {
    ctx.fillRect(x*cellWidth, y*cellHight, cellWidth-1, cellHight-1);
    //...(x-pos, y-pos, width, height) of painted object
};

function draw() {
    ctx.fillStyle = 'yellow';
    addCube(snake.x, snake.y)
    

    //food!
    ctx.fillStyle = 'red';
    addCube(food.x, food.y);
}

draw();          
