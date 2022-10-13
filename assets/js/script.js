//#######################Game Draw: ############################
//Game Area:
let canvas = document.getElementById('game-area');
let ctx = canvas.getContext('2d');
//ctx is an Object in the Game Area. getContext(2d) allows us to drwaw in 2d in the cavas(game-area)
/* img = document.getElementById('spider'); */
/* var pat = ctx.createPattern(img, 'no-repeat'); */




let snake = [
    { x: 25, y: 2 }
];
//an array of jsons is 1 element/value
let img = document.getElementById('spider');
let food;
let animal;
let spider;
let gotFood = false;
let gotAnimal = false;
let gotSpider = false;
let gotImg = false;
let direction = 'LEFT';
let oldScore = parseInt(document.getElementById('score').innerText);
/* let record = parseInt(document.getElementById('record').innerText); */
let newRecord = []
let largest = 0;

let row = 30;
let col = 30;
let cellWidth = canvas.width / col;
let cellHight = canvas.height / row;
//this creates a raster with cells


placeFood();
placeAnimal();
placeSpider();


function addCube(x, y) {
    ctx.fillRect(x * cellWidth, y * cellHight, cellWidth - 1, cellHight - 1);
    if (snake.length > 1) {
        ctx.fillStyle = 'blue';
    /* } else {ctx.drawImage(img, 20, 20, 15, 10);} */
    } else { ctx.fillStyle = 'yellow'; }
    //...(x-pos, y-pos, width, height) of painted object
};




function draw() {
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Food
    ctx.fillStyle = 'red';
    addCube(food.x, food.y);

    //Animal
    ctx.fillStyle = 'black';
    addCube(animal.x, animal.y);

    //Spider
    ctx.fillStyle = 'pink';
    ctx.fillRect(spider.x * cellWidth + 3, spider.y * cellWidth + 1, cellWidth/2, cellHight/2);
    ctx.fillRect(spider.x * cellWidth + 1, spider.y * cellWidth + 3, cellWidth/2, cellHight/2);
    ctx.fillRect(spider.x * cellWidth + 5, spider.y * cellWidth + 3, cellWidth/2, cellHight/2);
    ctx.fillRect(spider.x * cellWidth + 3, spider.y * cellWidth + 5, cellWidth/2, cellHight/2)
    /* ctx.drawImage(img, spider.x, spider.y, cellWidth, cellHight); */
    /* ctx.fillStyle = ctx.drawImage(img, 50, 100, 15, 10);
    ctx.drawImage(img, spider.x, spider.y, cellWidth, cellHight); */
    /* ctx.rect(0, 0, 50, 50); */
    /* ctx.fillStyle = pat; */
    /* ctx.fill(); */
    ctx.fillStyle = ctx.drawImage(img, img.x, img.y, cellWidth, cellHight);
    /* addCube(img.x, img.y); */
    /* addCube(img, spider.x, spider.y); */


    //Snake
    ctx.fillStyle = 'yellow';
    // we need to place every part of the snake(array) > for 'each'-loop!
    snake.forEach(part => addCube(part.x, part.y));
    //we need part => because the items are jsons.


    requestAnimationFrame(draw);
    //repeats draw function permanently  
}

draw();

function placeFood() {
    let foodY = Math.floor(Math.random() * row);
    let foodX = Math.floor(Math.random() * col);

    food = {x: foodX, y: foodY}
    //{x:..,y:..} this is 1 value called json! withs this a var can have '2' values!
}// places the food object randomly in Game Area

function placeAnimal() {
    let animalY = Math.floor(Math.random() * row);
    let animalX = Math.floor(Math.random() * col);

    animal = {x: animalX, y: animalY}
}

function placeSpider() {
    let spiderY = Math.floor(Math.random() * row);
    let spiderX = Math.floor(Math.random() * col);

    spider = {x: spiderX, y: spiderY}
}

function placeImg() {
    let imgY = Math.floor(Math.random() * row);
    let imgX = Math.floor(Math.random() * col);

    img = {x: imgX, y: imgY}
}

function scoreCounter() {
    /* console.log('caled!') */
    let oldScore = parseInt(document.getElementById('score').innerText);
    
    let oR = 0
    /* console.log(record, 'test'); */
    document.getElementById('score').innerText = oldScore + 10;
    let oldRecord = oldScore + 10;
    console.log(oldRecord, 'test');
    newRecord.push(oldRecord)
    console.log(newRecord, 'check')
    if (newRecord[0] > oR) {
        oR + newRecord[0];
    };
    console.log(oR, 'DB');
}

function snakeGrowth() {
    for (let i = snake.length - 1; i > 0; i--) {
        let piece = snake[i];
        let frontPiece = snake[i - 1];
        piece.x = frontPiece.x;
        piece.y = frontPiece.y;
    }
}//if the number of pieces is >0 the funktion is executed.
//the last piece is targeted and the position gets changed to 
// the position of it's frontpiece.

function gameEnd() {
    let snakeHead = snake[0];
    let snakeBody = snake.slice(2);
    let sameCoordinares = snakeBody.find(part => part.x == snakeHead.x && part.y == snakeHead.y);
    //array.find(or forEach)(part =>) works like a loop: For each part do(in this case find) something

    if (snake[0].x > col - 1 ||
        snake[0].x < 0 ||
        snake[0].y > row - 1 ||
        snake[0].y < 0 /* ||
        sameCoordinares */  //this would ask if the variable has a value of true
    ) {
        direction = 'LEFT'
        placeFood();
        placeAnimal();
        placeSpider();
        placeImg();
        snake = [{ x: 25, y: 2 }];
        document.getElementById('score').innerText = oldScore;
        /* document.getElementById('record').innerText */
        
        for (i=0; i<newRecord.length; i++){
            if (newRecord[i]>largest) {
                largest=newRecord[i];
                /* console.log(largest, 'please') */
            }
            document.getElementById('record').innerText = largest
        };
        /* alert('Game Over!') */
    }// if snake touches a wall

    if (sameCoordinares) {
        direction = 'LEFT'
        placeFood();
        placeAnimal();
        placeSpider();
        placeImg();
        snake = [{ x: 25, y: 2 }];
        document.getElementById('score').innerText = oldScore;
        for (i=0; i<newRecord.length; i++){
            if (newRecord[i]>largest) {
                largest=newRecord[i];
            }
            document.getElementById('record').innerText = largest
        };
        alert('Game Over!')
    }// if snake bites itself

};


//#######################Game Loop: ############################
function gameLoop() {
    gameEnd();
    snakeGrowth();
    if (direction == 'LEFT') {
        snake[0].x--; //-1 does not work!
    } else if (direction == 'RIGHT') {
        snake[0].x++;
    } else if (direction == 'DOWN') {
        snake[0].y++;
    } else/* if(direction == 'UP') */ {
        snake[0].y--;
    }

    if (snake[0].x == food.x && snake[0].y == food.y) {
        scoreCounter();
        placeFood();
        gotFood = true;
        if (gotFood) {
            snake = [
                { x: snake[0].x, y: snake[0].y },
                ...snake
            ];//...snake instead od {x: snake[0].x, y:snake[0].y}
            //works like a loop which adds {x: snake[0].x, y:snake[0].y}
            //if condition is true.
        }
    }// if snake-head is at the same pos like food > food get placed on an other pos.
    // and skake growth and counter grows.
    if (snake[0].x == animal.x && snake[0].y == animal.y) {
        scoreCounter();
        placeAnimal();
        gotAnimal = true;
        if (gotAnimal) {
            snake = [
                { x: snake[0].x, y: snake[0].y },
                ...snake
            ];
        }
    }

    if (snake[0].x == spider.x && snake[0].y == spider.y) {
        console.log(spider.x, spider.y)
        console.log(snake[0].x, snake[0].y)
        scoreCounter();
        placeSpider();
        gotSpider = true;
        if (gotSpider) {
            snake = [
                { x: snake[0].x, y: snake[0].y },
                ...snake
            ];
        }
    }

    if (snake[0].x == img.x && snake[0].y == img.y) {
        console.log(img.x, img.y)
        console.log(snake[0].x, snake[0].y)
        scoreCounter();
        placeImg();
        gotImg = true;
        if (gotImg) {
            snake = [
                { x: snake[0].x, y: snake[0].y },
                ...snake
            ];
        }
    }
};

setInterval(gameLoop, 100);
//gameLoop function is called every 100ms (the higher the nummer the slowlier)
document.addEventListener('keydown', keyPress);
//if a key is pressed ('keydown') the keyPress function is called

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', clickDirection)
    }
    function clickDirection() {
        if (this.getAttribute('id') === 'left' && direction != 'RIGHT') {
            direction = 'LEFT';
        } else if (this.getAttribute('id') === 'right' && direction != 'LEFT') {
            direction = 'RIGHT';
        } else if (this.getAttribute('id') === 'up' && direction != 'DOWN') {
            direction = 'UP';
        } else if (this.getAttribute('id') === 'down' && direction != 'UP') {
            direction = 'DOWN';
        }


    }

});

function keyPress(e) {
    if (e.keyCode == 37 && direction != 'RIGHT') {
        direction = 'LEFT';
    }
    if (e.keyCode == 38 && direction != 'DOWN') {
        direction = 'UP';
    }
    if (e.keyCode == 39 && direction != 'LEFT') {
        direction = 'RIGHT';
    }
    if (e.keyCode == 40 && direction != 'UP') {
        direction = 'DOWN';
    }
};

