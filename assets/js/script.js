//#######################Game Draw: ############################
//Game Area:
let canvas = document.getElementById('game-area');
let ctx = canvas.getContext('2d');
//ctx is an Object in the Game Area. getContext(2d) allows us to drwaw in 2d in the cavas(game-area)

//Things inside the Canvas
let snake = [{
    x: 25,
    y: 2
}];
//an array of jsons is 1 element/value
let img;
let food;
/* let elephant;
let lion; */
let gotFood = false;
let gotImg = false;

//Start conditions
let direction = false;
let oldScore = parseInt(document.getElementById('score').innerText);
let newRecord = [];
let largest = 0;
let speed = 180;
let gameOver = false;
let win = false;
let attention = false;

//this creates a raster with specific cells dimensions
let row = 30;
let col = 30;
let cellWidth = canvas.width / col;
let cellHight = canvas.height / row;

//this creates a random ID between 1-3 for the animal in the canvas
let rId = Math.floor(Math.random() * 3) + 1;

//sounds:
let soundStop = false;
let soundL3 = true;
let attentionSound = true;
let finalSound = new Audio('assets/sounds/last-round.mp4');
let mute = false;

/**
 * Sound out of playlist number s (depends on occurrence) is played or muted if sound button is clicked.
 */
function sounds(s) {
    let playlist = ['assets/sounds/bite.mp3', 'assets/sounds/goodresult-82807.mp3',
        'assets/sounds/success.mp3', 'assets/sounds/game-over.mp3', 'assets/sounds/alarm.mp3', 'assets/sounds/yeah.mp3'
    ];
    let sound = new Audio(playlist[s]);
    sound.play(sound);

    if (mute) {
        sound.pause(sound);
    }
}
//---------------Sound-Buttons-----------
/**
 * Both functions are called if sound button is clicked. If clicked sound button calls the other function.
 * * This is achieved by changing classes.
 */
function playAudio() {
    mute = false;
    soundL3 = true;
    document.getElementById('audio-button').setAttribute('onclick', 'pauseAudio()');
    document.getElementById('soundOff').setAttribute('class', 'fas fa-volume-mute soundOff');
    document.getElementById('soundOn').setAttribute('class', 'fas fa-volume-down');
}

function pauseAudio() {
    mute = true;
    soundL3 = false;
    finalSound.pause();
    document.getElementById('audio-button').setAttribute('onclick', 'playAudio()');
    document.getElementById('soundOff').setAttribute('class', 'fas fa-volume-mute');
    document.getElementById('soundOn').setAttribute('class', 'fas fa-volume-down soundOn');
}


placeFood();
placeImg();
setInterval(placeImg, 8000);
//placeImg is called every 8000ms (the higher the nummer the slowlier)

/**
 * adds a Cube on a cavas cell with exact cell dimensions-1 
 * * -1 for the gab between snake parts.
 */
function addCube(x, y) {
    ctx.fillRect(x * cellWidth, y * cellHight, cellWidth - 1, cellHight - 1);
    if (snake.length > 1) {
        ctx.fillStyle = 'blue';
    } else {
        ctx.fillStyle = 'yellow';
    }
}

/**
 * adds a Image (animal) on a cavas cell with exact cell dimensions+1 (looks nicer) 
 * * wich animal is random by random ID createt at the global var part of this script.
 */
function addImage(x, y) {
    ctx.drawImage(document.getElementById(rId), x * cellWidth, y * cellHight, cellWidth + 1, cellHight + 1);
}

/**
 * Game Area
 * *draws everything inside the canvas 
 * * fillstyle for color, fillRect for x, y and dimensions.
 */
function draw() {
    ctx.fillStyle = 'lawngreen';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Food
    ctx.fillStyle = 'red';
    addCube(food.x, food.y);

    //Animals
    addImage(img.x, img.y);

    //Wall
    if (document.getElementById('level').innerText == 3) {
        /* ctx.fillStyle = linear-gradient(to bottom right, brown, red, yellow);
        ctx.fillRect(canvas.width / 2, 0, cellWidth, canvas.height);
        ctx.fillRect(0, canvas.height / 2, canvas.width, cellHight); */
        ctx.drawImage(document.getElementById('fire'), canvas.width / 2, 0, cellWidth, canvas.height);
        ctx.drawImage(document.getElementById('fire'), 0, canvas.height / 2, canvas.width, cellHight);
    }

    //Attention - Wall
    if (attention == true) {
        ctx.fillStyle = 'rgb(255, 255, 255 , 0.2)';
        ctx.fillRect(canvas.width / 2, 0, cellWidth, canvas.height);
        ctx.fillStyle = 'rgb(255, 255, 255 , 0.2)';
        ctx.fillRect(0, canvas.height / 2, canvas.width, cellHight);
    }

    //Text
    if (gameOver) {
        ctx.fillStyle = 'red';
        ctx.font = "30px Courier";
        ctx.fillText("Game Over!", canvas.width / 4, canvas.height / 2);
    }

    if (win) {
        ctx.drawImage(document.getElementById('win'), canvas.width / 33.3, canvas.height / 8, 300, 100);
        gameEnd();
    }

    //Snake
    ctx.fillStyle = 'rgb(253, 190, 0)';
    // we need to place every part of the snake(array) > for 'each'-loop!
    snake.forEach(part => addCube(part.x, part.y));
    //we need part => because the items are jsons.

    requestAnimationFrame(draw);
    //repeats draw function permanently  
}

draw();

/**
 * Functions place Food inside the canvas
 * * randomly exactly on a canvas cell by creating random x and y coordinates.
 */
function placeFood() {
    let foodY = Math.floor(Math.random() * row);
    let foodX = Math.floor(Math.random() * col);

    food = {
        x: foodX,
        y: foodY
    };
    //{x:..,y:..} this is 1 value called json! withs this a var can have '2' values!
} // places the food object randomly in Game Area

/**
 * Function places Images inside the canvas
 * * randomly exactly on a canvas cell by creating random x and y coordinates.
 */
function placeImg() {
    let imgY = Math.floor(Math.random() * row);
    let imgX = Math.floor(Math.random() * col);
    img = {
        x: imgX,
        y: imgY
    };
}

/**
 * Function counts scroe, record, increases the level and speed and ends the game in case of success.
 */
function scoreCounter(n) {
    let oldScore = parseInt(document.getElementById('score').innerText);
    //gets first score (0) from html
    let oR = 0;
    //defines old Record (at the beginning)
    document.getElementById('score').innerText = oldScore + n;
    let oldRecord = oldScore + n;
    //defines that current Record is old Record + n (depends on which animal has been eaten)
    newRecord.push(oldRecord);
    //calculated record gets pushed in a list (newRecord was defined at the global var part of this script)

    if (oldScore >= 90 && oldScore <= 240) {
        document.getElementById('level').innerText = 2;
        speed = 150;
    } else if (oldScore >= 240) {
        console.log(soundL3, 's3');
        document.getElementById('level').innerText = 3;
        speed = 100;
        if (soundL3 == true) {
            finalSound.play();
        }
    }

    if (oldScore > 200 && oldScore <= 240 && attentionSound) {
        sounds(4);
        attentionSound = false;
        attention = true;
    }

    //game ends positivly! User is Winner!
    if (oldScore >= 500) {
        win = true;
        soundStop = false;
        attention = false;
        attentionSound = true;
        finalSound.pause();
        direction = false;
        placeFood();
        placeImg();
        sounds(2);
        snake = [{
            x: 25,
            y: 2
        }];
        oldScore = 0;
        document.getElementById('score').innerText = oldScore;
        document.getElementById('level').innerText = 1;
        document.getElementById('startKey').setAttribute('class', '');
        document.getElementById('startKey').innerText = 'Press "here" or Space to start!';
        speed = 180;

        //all values in newRecord list are checked, the largest value is current record.
        for (let i = 0; i < newRecord.length; i++) {
            if (newRecord[i] > largest) {
                largest = newRecord[i];
            }
            //current record is given back to html
            document.getElementById('record').innerText = largest;
        }
    }
    if (oldScore >= 90 && soundStop == false) {
        sounds(1);
        soundStop = true;
    }

    if (newRecord[0] > oR) {
        return oR + newRecord[0];
    }
}

/**
 * If the number of pieces is >0 the funktion is executed
 * * The last piece is targeted and the position gets changed to the position of it's frontpiece.
 */
function snakeGrowth() {
    for (let i = snake.length - 1; i > 0; i--) {
        let piece = snake[i];
        let frontPiece = snake[i - 1];
        piece.x = frontPiece.x;
        piece.y = frontPiece.y;
    }
}

/**
 * All conditions of snake Game Over (Snake hits wall or it self)
 * * All conditions and carnvas (speed, sound, walls) are turnd back to level 1.
 */
function gameEnd() {
    let snakeHead = snake[0];
    let snakeBody = snake.slice(2);
    let sameCoordinares = snakeBody.find(part => part.x == snakeHead.x && part.y == snakeHead.y);
    //array.find(or forEach)(part =>) works like a loop: For each part do(in this case find) something
    // and check if there are same parts.

    if (document.getElementById('level').innerText == 3 && snake[0].x == col / 2 ||
        document.getElementById('level').innerText == 3 && snake[0].x == col / 2 - 1 && direction == 'RIGHT' ||
        document.getElementById('level').innerText == 3 && snake[0].y == row / 2 - 1 && direction == 'DOWN' ||
        document.getElementById('level').innerText == 3 && snake[0].y == row / 2) {
        direction = false;
        gameOver = true;
        sounds(3);
        soundStop = false;
        soundL3 = true;
        attention = false;
        attentionSound = true;
        finalSound.pause();
        placeFood();
        placeImg();
        snake = [{
            x: 25,
            y: 2
        }];
        document.getElementById('score').innerText = oldScore;
        document.getElementById('level').innerText = 1;
        document.getElementById('startKey').setAttribute('class', '');
        document.getElementById('startKey').innerText = 'Press "here" or Space to start!';
        console.log(document.getElementById('level').innerText);
        speed = 180;
        document.getElementById('game-area').setAttribute('class', 'game-area-start');
        for (let i = 0; i < newRecord.length; i++) {
            if (newRecord[i] > largest) {
                largest = newRecord[i];
            }
            document.getElementById('record').innerText = largest;
        }
    } // if snake touches the inner wall in level3.

    if (snake[0].x > col - 1 ||
        snake[0].x < 0 ||
        snake[0].y > row - 1 ||
        snake[0].y < 0
        //sameCoordinares > this would ask if the variable has a value of true
    ) {
        direction = false;
        gameOver = true;
        sounds(3);
        soundStop = false;
        attention = false;
        attentionSound = true;
        finalSound.pause();
        placeFood();
        placeImg();
        snake = [{
            x: 25,
            y: 2
        }];
        document.getElementById('score').innerText = oldScore;
        document.getElementById('level').innerText = 1;
        document.getElementById('startKey').setAttribute('class', '');
        document.getElementById('startKey').innerText = 'Press "here" or Space to start!';
        console.log(document.getElementById('level').innerText);
        speed = 180;

        for (let i = 0; i < newRecord.length; i++) {
            if (newRecord[i] > largest) {
                largest = newRecord[i];
            }
            document.getElementById('record').innerText = largest;
        }
    } // if snake touches a wall

    if (sameCoordinares) {
        direction = false;
        gameOver = true;
        sounds(3);
        soundStop = false;
        attention = false;
        attentionSound = true;
        finalSound.pause();
        placeFood();
        placeImg();
        snake = [{
            x: 25,
            y: 2
        }];
        document.getElementById('level').innerText = 1;
        document.getElementById('startKey').setAttribute('class', '');
        document.getElementById('startKey').innerText = 'Press "here" or Space to start!';
        speed = 180;
        console.log(speed, 'end2');
        document.getElementById('score').innerText = oldScore;
        for (let i = 0; i < newRecord.length; i++) {
            if (newRecord[i] > largest) {
                largest = newRecord[i];
            }
            document.getElementById('record').innerText = largest;
        }
    } // if snake bites itself
}


//#######################Game Loop: ############################
/**
 * The loop repeats freaklently
 * * calls gameEnd, snakeGrowth, makes snake move in klicked direction
 * * makes snake eat food, calles replace food if eaten
 * * calls draw wall in level3
 */
function gameLoop() {
    gameEnd();
    snakeGrowth();
    if (direction == 'LEFT') {
        snake[0].x--; //-1 does not work!
    } else if (direction == 'RIGHT') {
        snake[0].x++;
    } else if (direction == 'DOWN') {
        snake[0].y++;
    } else if (direction == 'UP') {
        snake[0].y--;
    }

    if (snake[0].x == food.x && snake[0].y == food.y) {
        scoreCounter(10);
        placeFood();
        sounds(0);
        gotFood = true;
        if (gotFood) {
            snake = [{
                    x: snake[0].x,
                    y: snake[0].y
                },
                ...snake
            ]; //...snake instead {x: snake[0].x, y:snake[0].y}
            //works like a loop which adds {x: snake[0].x, y:snake[0].y} to snake list
            //if condition is true.
        }
    } // if snake-head is at the same pos like food > food get placed on an other pos.
    // and skake growth and counter grows.

    if (snake[0].x == img.x && snake[0].y == img.y) {
        placeImg();
        sounds(0);
        gotImg = true;
        if (gotImg) {
            snake = [{
                    x: snake[0].x,
                    y: snake[0].y
                },
                ...snake
            ];
        }
        //if specific animal is eaten > user gets specific number of points.
        if (rId === 1) {
            scoreCounter(20);
            rId = Math.floor(Math.random() * 3) + 1;
        } else if (rId === 2) {
            scoreCounter(30);
            rId = Math.floor(Math.random() * 3) + 1;
        } else if (rId === 3) {
            scoreCounter(40);
            rId = Math.floor(Math.random() * 3) + 1;
        }
    }

    /* ----------------possible bugs:---------------------  */
    if (img.x == food.x && img.y == food.y) {
        placeImg();
    } // food and animals should not be on the same place

    if (document.getElementById('level').innerText == 3 && food.x == 15 ||
        document.getElementById('level').innerText == 3 && food.y == 15) {
        placeFood(); // In level 3 food should not be placed in the wall.
        // images can be placed inside the wall but images move anyway.
    }
    /* ----------------possible bugs end---------------------  */

    if (document.getElementById('level').innerText == 2) {
        speed = 100;
    } else if (document.getElementById('level').innerText == 3) {
        speed = 50;
    }

    if (document.getElementById('level').innerText == 3) {
        document.getElementById('game-area').setAttribute('class', 'game-area-start game-area-L3');
        // this adds a second class to canvas(Game Area)
    } else {
        document.getElementById('game-area').setAttribute('class', 'game-area-start');
    }

    //level3: Snake can go through outer wall
    if (document.getElementById('level').innerText == 3 && snake[0].x > col - 1) {
        snake[0] = {
            x: 0,
            y: snake[0].y
        };
    }
    if (document.getElementById('level').innerText == 3 && snake[0].x < 0) {
        snake[0] = {
            x: 29,
            y: snake[0].y
        };
    }
    if (document.getElementById('level').innerText == 3 && snake[0].y > row - 1) {
        snake[0] = {
            x: snake[0].x,
            y: 0
        };
    }
    if (document.getElementById('level').innerText == 3 && snake[0].y < 0) {
        snake[0] = {
            x: snake[0].x,
            y: 29
        };
    }

    setTimeout(gameLoop, speed);
    //the gameLoop runns all 180ms at the beginning
}

gameLoop();

document.addEventListener('keydown', keyPress);
//if a key is pressed ('keydown') the keyPress function is called

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');
    //this creates a list of all buttons in html

    for (let button of buttons) {
        button.addEventListener('click', clickDirection);
    }

    /**
     * if button with specific ID is cklicked:
     * * direction changes, optical things change(Texts remove), sound changes 
     */
    function clickDirection() {
        if (this.getAttribute('id') === 'startKey' && direction == false) {
            direction = true;
            win = false;
            gameOver = false;
            sounds(5);
            document.getElementById('startKey').innerText = 'Press an arrow key!';
            document.getElementById('startKey').setAttribute('class', 'startBtnBefore');
        }

        if (direction && this.getAttribute('id') === 'left' && direction != 'RIGHT') {
            direction = 'LEFT';
            document.getElementById('startKey').setAttribute('class', 'startBtnBefore startbtnAfter');
        }
        if (direction && this.getAttribute('id') === 'right' && direction != 'LEFT') {
            direction = 'RIGHT';
            document.getElementById('startKey').setAttribute('class', 'startBtnBefore startbtnAfter');
        }
        if (direction && this.getAttribute('id') === 'up' && direction != 'DOWN') {
            direction = 'UP';
            document.getElementById('startKey').setAttribute('class', 'startBtnBefore startbtnAfter');
        }
        if (direction && this.getAttribute('id') === 'down' && direction != 'UP') {
            direction = 'DOWN';
            document.getElementById('startKey').setAttribute('class', 'startBtnBefore startbtnAfter');
        }
    }

});

/**
 * if keybord button with specific keyCode is cklicked:
 * * direction changes, optical things change(Texts remove), sound changes 
 */
function keyPress(e) {
    if (direction == false && e.keyCode == 32) {
        direction = true;
        win = false;
        gameOver = false;
        sounds(5);
        document.getElementById('startKey').innerText = 'Press an arrow key!';
        document.getElementById('startKey').setAttribute('class', 'startBtnBefore');
    }

    if (e.keyCode == 16) {
        playAudio();
    }

    if (e.keyCode == 20) {
        pauseAudio();
    }

    if (direction && e.keyCode == 37 && direction != 'RIGHT') {
        if (document.getElementById('level').innerText == 1) {
            setTimeout(() => {
                direction = 'LEFT';
            }, 140);
            //slowes down the reaction after clicking to prevent snake of 180 degrees direction change on the same line
        }
        if (document.getElementById('level').innerText == 2) {
            setTimeout(() => {
                direction = 'LEFT';
            }, 80);
        } else {
            direction = 'LEFT';
        }
        document.getElementById('startKey').setAttribute('class', 'startBtnBefore startbtnAfter');
    }

    if (direction && e.keyCode == 38 && direction != 'DOWN') {
        if (document.getElementById('level').innerText == 1) {
            setTimeout(() => {
                direction = 'UP';
            }, 140);
        }
        if (document.getElementById('level').innerText == 2) {
            setTimeout(() => {
                direction = 'UP';
            }, 80);
        } else {
            direction = 'UP';
        }
        document.getElementById('startKey').setAttribute('class', 'startBtnBefore startbtnAfter');
    }

    if (direction && e.keyCode == 39 && direction != 'LEFT') {
        if (document.getElementById('level').innerText == 1) {
            setTimeout(() => {
                direction = 'RIGHT';
            }, 140);
        }
        if (document.getElementById('level').innerText == 2) {
            setTimeout(() => {
                direction = 'RIGHT';
            }, 80);
        } else {
            direction = 'RIGHT';
        }
        document.getElementById('startKey').setAttribute('class', 'startBtnBefore startbtnAfter');
    }

    if (direction && e.keyCode == 40 && direction != 'UP') {
        if (document.getElementById('level').innerText == 1) {
            setTimeout(() => {
                direction = 'DOWN';
            }, 140);
        }
        if (document.getElementById('level').innerText == 2) {
            setTimeout(() => {
                direction = 'DOWN';
            }, 80);
        } else {
            direction = 'DOWN';
        }
        document.getElementById('startKey').setAttribute('class', 'startBtnBefore startbtnAfter');
    }
}