//#######################Game Draw: ############################
//Game Area:
let canvas = document.getElementById('game-area');
let ctx = canvas.getContext('2d');
//ctx is an Object in the Game Area. getContext(2d) allows us to drwaw in 2d in the cavas(game-area)

let snake = [
    {x: 25, y:2}
];
//an array of jsons is 1 element/value
let food;
let gotFood = false;
let direction = 'LEFT';

let row = 30;
let col = 30;
let cellWidth = canvas.width/col;
let cellHight = canvas.height/row;
//this creates a raster with cells


placeFood();


function addCube(x ,y) {
    ctx.fillRect(x*cellWidth, y*cellHight, cellWidth-1, cellHight-1);
    //...(x-pos, y-pos, width, height) of painted object
};




function draw() {
    ctx.fillStyle = 'aqua';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Food
    ctx.fillStyle = 'red';
    addCube(food.x, food.y);
    

    //Snake
    ctx.fillStyle = 'yellow';
    // we need to place every part of the snake(array) > for "each"-loop!
    snake.forEach(part => addCube(part.x, part.y));
    //we need part => because the items are jsons.

    requestAnimationFrame(draw);
    //repeats draw function permanently  
}

draw();

function placeFood() {
    let foodY = Math.floor(Math.random()*row);
    let foodX = Math.floor(Math.random()*col);

    food = {x: foodX, y: foodY}
//{x:..,y:..} this is 1 value called json! withs this a var can have "2" values!
}// places the food object randomly in Game Area

function snakeGrowth() {
    for (let i = snake.length-1; i > 0; i--) {
        let piece = snake[i];
        let frontPiece = snake[i-1];
        piece.x = frontPiece.x;
        piece.y = frontPiece.y ; 
    }
}//if the number of pieces is >0 the funktion is executed.
//the last piece is targeted and the position gets changed to 
// the position of it's frontpiece.


//#######################Game Loop: ############################
function gameLoop() {
    snakeGrowth(); 
    if(direction == 'LEFT') {
        snake[0].x--; //-1 does not work!
    } else if(direction == 'RIGHT') {
        snake[0].x++;
    } else if(direction == 'DOWN') {
        snake[0].y++;
    } else/* if(direction == 'UP') */ {
        snake[0].y--;
    } 
    
    if (snake[0].x == food.x && snake[0].y == food.y){
        placeFood();
        gotFood = true;
        if (gotFood) {
            snake = [
                {x: snake[0].x, y:snake[0].y}, 
                ...snake 
            ];//...snake instead od {x: snake[0].x, y:snake[0].y}
            //works like a loop which adds {x: snake[0].x, y:snake[0].y}
            //if condition is true.
        }  
    }// if snake-head is at the same pos like food > food get placed on an other pos.
    // and skake growth and counter grows.
};

setInterval(gameLoop, 200);
//gameLoop function is called every 100ms (the higher the nummer the slowlier)
document.addEventListener('keydown', keyPress);
//if a key is pressed ('keydown') the keyPress function is called



function keyPress(e) {
    if(e.keyCode == 37) {
        direction = 'LEFT';
    }
    if(e.keyCode == 38) {
        direction = 'UP';
    }
    if(e.keyCode == 39) {
        direction = 'RIGHT';
    }
    if(e.keyCode == 40) {
        direction = 'DOWN';
    }
};

