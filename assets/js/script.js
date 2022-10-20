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
/* let img = document.getElementById('spider'); */
let img;
let food;
let elephant;
let lion;
let gotFood = false;
let gotElephant = false;
let gotLion = false;
let gotImg = false;
/* let direction = 'LEFT'; */
let direction;
let oldScore = parseInt(document.getElementById('score').innerText);
let newRecord = []
let largest = 0;
let speed = 200;
let gameOver = false;
let win = false;

//sounds:
let soundStop = false;
let soundL3 = true;
let finalSound = new Audio('assets/sounds/last-round.mp3')
function sounds(s) {
    let playlist = ['assets/sounds/bite.mp3', 'assets/sounds/goodresult-82807.mp3', 
            'assets/sounds/success.mp3']
    let sound = new Audio(playlist[s]);
    sound.play(sound);
};

/* function soundsStop(s) {
    let playlist = ['assets/sounds/bite.mp3', 'assets/sounds/goodresult-82807.mp3', 
            'assets/sounds/success.mp3', 'assets/sounds/last-round.mp3']
    let sound = new Audio(playlist[s]);
    sound.pause(sound);
} */

/* const gulpSound = new Audio("gulp.mp3"); */

/* while (speed) {
    let actualLevel = parseInt(document.getElementById('level').innerText);
    if (actualLevel === 1) {
        speed = 200;
    } else if (actualLevel === 2) {
        speed = 150;
    } else if (actualLevel === 3) {
        speed = 100;
        break
    };
};
console.log(speed, 'how?') */
/* function speed() {
    let speed = parseInt(document.getElementById('level').innerText);
    console.log(speed, 'start0')
    if (speed === 1) {
        speed = 200;
    } else if (speed === 2) {
        speed = 150;
    } else if (speed === 3) {
        speed = 100;
    };
};
speed(); */
/* console.log(speed, 'start1') */

let row = 30;
let col = 30;
let cellWidth = canvas.width / col;
let cellHight = canvas.height / row;
//this creates a raster with cells

let rId = Math.floor(Math.random() * 3) + 1;
/* console.log(rId, 'random2') */

placeFood();
placeElephant();
placeLion();
placeImg();

setInterval(placeImg, 8000);
//gameLoop function is called every 800ms (the higher the nummer the slowlier)

function addCube(x, y) {
    ctx.fillRect(x * cellWidth, y * cellHight, cellWidth - 1, cellHight - 1);
    if (snake.length > 1) {
        ctx.fillStyle = 'blue';
    /* } else {ctx.drawImage(img, 20, 20, 15, 10);} */
    } else { ctx.fillStyle = 'yellow'; }
    //...(x-pos, y-pos, width, height) of painted object
};

function addImage(x, y) {
    ctx.drawImage(document.getElementById(rId), x * cellWidth, y * cellHight, cellWidth+1, cellHight+1);
};

function draw() {
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Food
    ctx.fillStyle = 'red';
    addCube(food.x, food.y);

    //Animals
    addImage(img.x, img.y);

    //Wall
    if (document.getElementById('level').innerText == 3) {
        ctx.fillStyle = 'brown';
        ctx.fillRect(canvas.width/2, 0, cellWidth, canvas.height);
        ctx.fillStyle = 'brown';
        ctx.fillRect(0, canvas.height/2, canvas.width, cellHight);
    };

    //Text
    if (gameOver) {
        ctx.fillStyle = 'red'
        ctx.font = "30px Courier";
        ctx.fillText("Game Over!", canvas.width/4, canvas.height/2);
    }

    if (win){
        ctx.drawImage(document.getElementById('win'), canvas.width/33.3, canvas.height/8, 300, 100)
        gameEnd();
    } 
    
    /* {
        console.log(oldScore, 'wie viel?')
        ctx.fillStyle = 'gold'
        ctx.font = "40px Courier";
        ctx.fillText("Congratulations! You win!", canvas.width/4, canvas.height/2);
    } */
    /* console.log(oldScore, 'wie viel?') */
    

    

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

function placeElephant() {
    let elephantY = Math.floor(Math.random() * row);
    let elephantX = Math.floor(Math.random() * col);

    elephant = {x: elephantX, y: elephantY}
}

function placeLion() {
    let lionY = Math.floor(Math.random() * row);
    let lionX = Math.floor(Math.random() * col);

    lion = {x: lionX, y: lionY}
}

function placeImg() {
    let imgY = Math.floor(Math.random() * row);
    let imgX = Math.floor(Math.random() * col);

    img = {x: imgX, y: imgY}
}

function scoreCounter(n) {
    /* console.log('caled!') */
    let oldScore = parseInt(document.getElementById('score').innerText);
    /* let level = parseInt(document.getElementById('level').innerText); */
    let oR = 0;
    /* console.log(record, 'test'); */
    document.getElementById('score').innerText = oldScore + n;
    let oldRecord = oldScore + n;
    /* console.log(oldRecord, 'test'); */
    newRecord.push(oldRecord)
    /* console.log(newRecord, 'check') */
    if (newRecord[0] > oR) {
        oR + newRecord[0];
    };
    if (oldScore >= 90 && oldScore <= 240) {
        /* console.log(oR, 'DB'); */
        document.getElementById('level').innerText = 2;
        speed = 150;
        /* setInterval(gameLoop, 150); */
        console.log(speed, 'l2')
    } else if (oldScore >= 240) {
        document.getElementById('level').innerText = 3;
        speed = 100;
        console.log(speed, 'l3')
        finalSound.play();

        /* let levThreeSpeed = 75;
        setInterval(gameLoop, levThreeSpeed); */
    }
    //game ends positivly! User is Winner!
    if (oldScore >= 1000) {
        /* console.log(oldScore, 'wie viel?'); */
        win = true;
        soundStop = false
        direction = 0;
        placeFood();
        placeElephant();
        placeLion();
        placeImg();
        sounds(2);
        snake = [{ x: 25, y: 2 }];
        oldScore = 0;
        document.getElementById('score').innerText = oldScore;
        document.getElementById('level').innerText = 1;
        console.log(document.getElementById('level').innerText)
        speed = 200;
        for (i=0; i<newRecord.length; i++){
            if (newRecord[i]>largest) {
                largest=newRecord[i];
                /* console.log(largest, 'please') */
            }
            document.getElementById('record').innerText = largest
        };
    }
    if (oldScore >= 90 && soundStop == false) {
        sounds(1);
        soundStop = true;
    } 
    
    /* if (oldScore >= 40 && soundL3 == true) {
        sounds(3);
        soundL3 = false;
    } */
    /* if (oldScore >= 40) {
        finalSound.play();
    } */

    
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
    
    if (document.getElementById('level').innerText == 3 && snake[0].x == col/2 - 1 || 
    document.getElementById('level').innerText == 3 && snake[0].x == row/2 - 1 ||
    document.getElementById('level').innerText == 3 && snake[0].y == row/2 - 1 /* || 
    document.getElementById('level').innerText == 3 && snake[0].y > col/2 - 1 */) {
        direction = 0;
        gameOver = true;
        soundStop = false;
        soundL3 = true;
        finalSound.pause();
        /* sounds(); */
        placeFood();
        placeElephant();
        placeLion();
        placeImg();
        snake = [{ x: 25, y: 2 }];
        document.getElementById('score').innerText = oldScore;
        document.getElementById('level').innerText = 1;
        console.log(document.getElementById('level').innerText)
        speed = 200;
        document.getElementById('game-area').setAttribute('class', 'game-area-start');
        for (i=0; i<newRecord.length; i++){
            if (newRecord[i]>largest) {
                largest=newRecord[i];
            }
            document.getElementById('record').innerText = largest
        };
    }; // if snake touches the inner wall in level3.

    if (snake[0].x > col - 1 ||
        snake[0].x < 0 ||
        snake[0].y > row - 1 ||
        snake[0].y < 0 /* ||
        sameCoordinares */  //this would ask if the variable has a value of true
    ) {
        /* direction = 'LEFT' */
        direction = 0;
        gameOver = true;
        soundStop = false;
        /* soundL3 = true; */
        finalSound.pause();
        placeFood();
        placeElephant();
        placeLion();
        placeImg();
        snake = [{ x: 25, y: 2 }];
        document.getElementById('score').innerText = oldScore;
        document.getElementById('level').innerText = 1;
        console.log(document.getElementById('level').innerText)
        speed = 200;
        /* console.log(speed, 'end1') */
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
        /* direction = 'LEFT' */
        direction = 0;
        gameOver = true;
        soundStop = false;
        finalSound.pause();
        placeFood();
        placeElephant();
        placeLion();
        placeImg();
        snake = [{ x: 25, y: 2 }];
        document.getElementById('level').innerText = 1;
        speed = 200;
        console.log(speed, 'end2')
        document.getElementById('score').innerText = oldScore;
        for (i=0; i<newRecord.length; i++){
            if (newRecord[i]>largest) {
                largest=newRecord[i];
            }
            document.getElementById('record').innerText = largest
        };
        /* alert('Game Over!') */
    }// if snake bites itself

      
};


//#######################Game Loop: ############################
function gameLoop() {
    gameEnd();
    snakeGrowth();
    if (direction == 'LEFT') {
        snake[0].x--; //-1 does not work!
        gameOver = false;
        win = false;
    } else if (direction == 'RIGHT') {
        snake[0].x++;
        gameOver = false;
        win = false;
    } else if (direction == 'DOWN') {
        snake[0].y++;
        gameOver = false;
        win = false;
    } else if(direction == 'UP') {
        snake[0].y--;
        gameOver = false;
        win = false;
    }

    if (snake[0].x == food.x && snake[0].y == food.y) {
        scoreCounter(10);
        placeFood();
        sounds(0);
        /* gulpSound.play; */
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

    if (snake[0].x == img.x && snake[0].y == img.y) {
        placeImg();
        sounds(0);
        gotImg = true;
        if (gotImg) {
            snake = [
                {x: snake[0].x, y: snake[0].y},
                ...snake
            ];
        }
        if (rId === 1) {
            scoreCounter(20);
            rId = Math.floor(Math.random() * 3) + 1
        } else if (rId === 2) {
            scoreCounter(50);
            rId = Math.floor(Math.random() * 3) + 1
        } else if (rId === 3) {
            scoreCounter(80);
            rId = Math.floor(Math.random() * 3) + 1
        }
    };
    
    if (document.getElementById('level').innerText == 2) {
        speed = 100;
    } else if (document.getElementById('level').innerText == 3) {
        speed = 50;
    };

    if (document.getElementById('level').innerText == 3) {
        document.getElementById('game-area').setAttribute('class', 'game-area-start game-area-L3'); 
        // this adds a second class to canvas(Game Area)
    }

    //level3: Snake can go through wall
    if (document.getElementById('level').innerText == 3 && snake[0].x > col - 1) {
            snake[0] = {x: 0, y: snake[0].y};
    };
    if (document.getElementById('level').innerText == 3 && snake[0].x < 0) {
        snake[0] = {x: 29, y: snake[0].y};
    };
    if (document.getElementById('level').innerText == 3 && snake[0].y > row - 1) {
    snake[0] = { x: snake[0].x, y: 0};
    };
    if (document.getElementById('level').innerText == 3 && snake[0].y < 0) {
    snake[0] = { x: snake[0].x, y: 29 };
    };
    
    setTimeout(gameLoop, speed);
    //the gameLoop runns all 200ms at the beginning
};

gameLoop();
/* setInterval(gameLoop, 200) */

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

