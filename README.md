# Snake 2001

The site will be targeted toward people who like JavaScript and playing. Snake 2001 is a fully responsive JavaScript game. 
Snake 2001 is a recreation of the Snake mobile game that was still played on button phones in the late 90's and 2000's. 
A snake is guided by the player through a playing field and has to collect as much food as possible. The player receives points for this. The more dangerous the food is, the more points the player gets.
This variant contains 3 levels. From level 1 to 2 only the speed changes. In both levels the snake dies if it hits the wall or if it bites itself. In level 3, a wall of fire appears in the middle of the playing field. The outer walls are permeable to it.
As a demonstration, the player already wins when he has reached 500 points.

- Responsice Mockup<br>
    <img src="assets/images/screenshot-mq.png" alt="Responsice Mockup">


## User Stories

- As a visiting user, I can easily understand the main purpose of the game. 
- As a visiting user, I can navigate the snake without any problems.
- As a visiting user, I can learn to navigate the snake more efficiently to earn more points.
- As a visiting user, I can easily get information about the company through their social media links.


## Existing Features 

- __Body__

    - The body contains the Snake 2001 background image. Fern plants are shown, which are supposed to symbolize a rain forest. The image is available for free use on Pixabay.
        - [pixabay](https://pixabay.com/images/search/jungle/?manual_search=1)
    - The body also contains the "Game-Program-Field". This is in turn divided into different areas.
    - The user will feel reminded of the rainforest.
    - Du to performance reasons, the background image is converted to a color gradient on mobil level.
    - Body Image:<br>
            <img src="assets/images/rainforest.webp" alt="Rainforest">
    - Body Background-Mobil:<br>
            <img src="assets/images/screenshot-mobil-background.png" alt="Color Gradient">


    - __Game Program Field__

     - The Game Field contains a background image. The background image shows an old vintage push button cell phone from the early 2000s. All other features are laid out over the background in a way that makes it look like you are operating this phone.
     - The user will feel reminded of an old mobilphone.
     - Game Background Image:<br>
            <img src="assets/images/cellphone-gf7d2ec28d_1920.webp" alt="Mobilphone">

        - __Header__

            - The header contains the Snake 2001 logo which shows a snake. 
            - The header also includes the headline and score area.
            - The score area shows the current score, the current record score and the current level.
            - The header has a fixed position inside the Game-Program-Field-Window.
            - This area will allow the user to see how many poits she/he has and what the current record is.

        - Header Image:<br>
            <img src="assets/images/screenshot-header.png" alt="Header">
                    


        - __Playing Field__

            - The actual playing field was created with javascript canvas and is the area where the snake is navigated and the food is placed.
                - The basic code of the Canvas and how to draw and place things inside a Canvas is taken from the following website.
                    - [w3schools](https://www.w3schools.com/graphics/canvas_drawing.asp)
                - Basic functions inside the Canvas (how the snake moves, grows) is taken from the following website.
                    - [Specific YouTube Tutorial] (https://www.youtube.com/watch?v=niD3gx4BI9A&t=4505s)
                - Basic functions inside the Canvas (how moving and drawing functions are constantly repeat) is taken from the following website.
                    - [Specific YouTube Tutorial] (https://www.youtube.com/watch?v=7Azlj0f9vas)
                - This area will allow the user to play the game.

        - Playing Field Image:<br>
            <img src="assets/images/screenshot-canvas.png" alt="Playing Field">


        - __The Control Area__

            - The control panel contains the start button, the sound button and the control buttons of the snake for mobile devices (phones, tablets).Users on devices with a keyboard will be more likely to use the keyboard. 
                - The start button contains instructions on how to start the game and how mute the sound.
                 - It serves as a user manual and as an intermediate step between the "Game Over Status" and the start of the game. This prevents the end screen ("Game Over" or "You Win") from being clicked away immediately by intuitively continuing to play (a direction key is pressed).
                 - The start button changes color by mouse over and by clicking.
                - The sound button allows the user to mute or reactivate all sounds by clicking the play/pause button on the screen or the shift or the caps lock key on the keybord.
                - The control button change color by mouse over.
                - The Control Area idea and basic code is taken form the **Code-Institute Love-Maths-Project** but has been modified.
                - This area will allow the user to control the sound to start the game and to control the snake direction.

        - Control Area Image:<br>
            <img src="assets/images/screenshot-control-area.png" alt="Control Area">


        - __The Footer__ 

        - The footer includes links to the relevant social media sites for the Game-Developer Company. The links will open to a new tab to allow easy navigation for the user. 
        - The footer is valuable to the user as it allows them to get Information via social media.
        - The footer idea and basic code is taken form the **Code-Institute Love-Running-Project** but has been slightly modified.
        - This area will allow the user to follow the company on social media.

        - The Footer Image:<br>
            <img src="assets/images/screenshot-footer.png" alt="Footer">


### Features Left to Implement

  - Planned features: 
    - There will be more levels in the future. The snake should get a face and there should be more animal and vegetable food. Besides that, enemies will come that the snake cannot eat but will harm it. From a later level, the snake should also get out of its box into a 2D world open to the right. In the distant future, the snake could also transition into a 3D world and get more movement options.



## Testing 

- I have tested that the website works in different browsers (Chrome and Firefox).
- I confirm that the website works and looks good on all standard screen sizes. This was tested with the devtools divice toolbar.
- I certify that all the text is easy to read and understand.
- I confirm that the all keys are working.
- I confirm that the all soundeffect are working. All sound effects appear at the right time.

### Validator Testing

  - HTML
      - No errors were returned when passing through the official W3C validator.
      - All web pages have been tested.

  - CSS
      - No errors were found when passing through the official (Jigsaw) validator.

  - JavaScipt 
      - No errors were found when passing through the JSHint validator.
        - Metrics:
            - There are 25 functions in this file.
            - Function with the largest signature take 2 arguments, while the median is 0.
            - Largest function has 68 statements in it, while the median is 3.
            - The most complex function has a cyclomatic complexity value of 31 while the median is 1.

  - Accessibility
      - I confirm that the colors and fonts selected are easy to read and accessible. This was discovered using lighthouse in devtools.
      - The program has been tested for desktop and mobil devices.

- HTML Validation<br>
    <img src="assets/images/screenshot-html-validator.png" alt="HTML Validation">

- CSS Validation<br>
    <img src="assets/images/screenshot-css-validator.png" alt="CSS Validation">

- JavaScipt Validation<br>
    <img src="assets/images/screenshot-js-validator.png" alt="CSS JavaScipt">

- Lighthouse<br>
    <img src="assets/images/screenshot-lighthouse.png" alt="Lighthouse">

- Lighthouse Mobil<br>
    <img src="assets/images/screenshot-lighthouse-mobil.png" alt="Lighthouse Mobil">


- User story besed test cases (screenshots):

  - As a visiting user, I can easily understand the main purpose of the game. 
      - Heading, Start Button, Animals<br>
        <img src="assets/images/screenshot-userstory-whats-the-goal.png" alt="Canvas and Start Button">

  - As a visiting user, I can navigate the snake without any problems.
      - Start Butten (after klicking) keybord, arrow/number buttons<br>
        <img src="assets/images/screenshot-userstory-what-to-do.png" alt="Control-Area">

  - As a visiting user, I can learn to navigate the snake more efficiently to earn more points.
      - User experience. Users get more points.<br>
        <img src="assets/images/screenshot-userstory-performance.png" alt="Score">

  - As a visiting user, I can easily get information about the company through their social media links.
      - Footer with social media links.<br>
        <img src="assets/images/screenshot-footer.png" alt="Footer">



### Unfixed Bugs

 - There were a a lot of bugs at the beginning. Some have taken hours to resolve. 
  - For example, I could quickly create a new snake part. But I couldn't make it to follow the snake head.
  <img src="assets/images/bug-following-snakepart.png" alt="Bug-Following-Snakepart">
  The solution is a "for-loop": Ff there is more than one snake part (the snake parts are in a list), the last part gets the position of the previous part. The loop then repeats itself with the penultimate part. Until the loop gets to the head, then it breaks. The function is called whenever the snake encounters food.
    - function snakeGrowth() {
        for (let i = snake.length - 1; i > 0; i--) {
            let piece = snake[i];
            let frontPiece = snake[i - 1];
            piece.x = frontPiece.x;
            piece.y = frontPiece.y;
        }

 - Another difficulty was that the snake was not allowed to run back and that it was not allowed to eat itself.
 <img src="assets/images/bug-snake-backwarts-bite-itself.png" alt="Bug-Snake-Backwarts-Bite-itself">
 The solution is a "for-loop": Ff there is more than one snake part (the snake parts are in a list), the last part gets the position of the previous part. The loop then repeats itself with the penultimate part. Until the loop gets to the head, then it breaks. The function is called whenever the snake encounters food.

  - function snakeGrowth() {
        for (let i = snake.length - 1; i > 0; i--) {
            let piece = snake[i];
            let frontPiece = snake[i - 1];
            piece.x = frontPiece.x;
            piece.y = frontPiece.y;

 - To prevent the snake from being able to walk backwards, I simply banned it:
    - if (direction && e.keyCode == 37 && direction != 'RIGHT') {
        direction = 'LEFT';

 - The most difficult bug was that the snake eats the animals (images). For this, the images had to behave exactly like canvas pixels. A tutor session lasting several hours was necessary to solve this problem. In the end they helped me to help myself. "Follow the javascript logic": The previously undefined image variable was placed in the canvas drawing function. This placement then called a function. Here an image is drawn with canvas pixel dimensions and in canvas coordinates. The coordinates are chosen randomly in the game loop.
  - function draw() {
    //Animals
    addImage(img.x, img.y);}
     - function addImage(x, y) {
     ctx.drawImage(document.getElementById(rId), x * cellWidth, y * cellHight, cellWidth+1, cellHight+1);}

 - It was difficult to prevent the snake from turning 180 degrees on the same line. For example, if you press up and right very quickly after going left in advance, the snake will turn on the same line. This happens especially in level 1 (slightly in level 2) when the snake moves slowly. Unfortunately nobody could help me with this problem. Nevertheless, I have practically fixed it by making changes of direction in level 1 only possible with a time delay (many other things have also been tried). The snake reacts with a slight time delay when changing direction. The problem almost never occurs anymore. However, if you force it strongly, you can still cause the bug.
  - if (direction && e.keyCode == 37 && direction != 'RIGHT') {
            if (document.getElementById('level').innerText == 1) {
                setTimeout(() => {direction = 'LEFT';}, 120)
            } if (document.getElementById('level').innerText == 2) {
                setTimeout(() => {direction = 'LEFT';}, 80)
            }

 - An unfixed bug is that the animals can be placed inside the inner wall in level 3. This is on purpose. The images change position anyway and for the user it is slidly more difficult to win. Since it is not moving, This is prevented with red food.
   

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - In menu on the left side, select pages
  - Scrool down to Branch and select main
  - push the Save button
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found [here](https://danio86.github.io/Snake-2001/)


## Credits 

### Content

- Instructions on how to implement clickable buttons and keyboard shortcuts and how to connect between HTML, CSS and Javascript were taken from Code Institute - Love Maths project. [Code Institute - Love Running Project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/234519d86b76411aa181e76a55dabe70/)

- The basic code of the canvas playingfield and how to implement images into canvas is taken from the following website, but has been changed. [w3schools](https://www.w3schools.com/html/html5_canvas.asp)
- Basic functions inside the Canvas (how the snake moves, grows) were taken from the following website.[Specific YouTube Tutorial](https://www.youtube.com/watch?v=niD3gx4BI9A&t=4505s)
- Basic functions inside the Canvas (how moving and drawing functions are constantly repeat or how they are called in specific time frames) is taken from the following websit.[Specific YouTube Tutorial](https://www.youtube.com/watch?v=7Azlj0f9vas)
- Instructions needed for the score counter (for loops, if statements)  were taken from were taken from [Code Institute - Javascript - Lectures](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+2021_T1/courseware/73e9c0413ead4a21b389e33c77706102/82c33b8076b04831ab06d60299e57d8d/)
- Instructions on how to implement links into the footer were taken from [Code Institute - Love Running Project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/e6d4cda2bc08458ba94d2092be9bad3a/)
- Instructions on how to implement sound and soundeffects were taken from [Go Make Things ](https://gomakethings.com/how-to-play-a-sound-with-javascript/)
- Instructions on how to implement sound mute functions were taken from [w3schools](https://www.w3schools.com/jsref/prop_audio_paused.asp)
- Instructions on how to prevent scrolling by clicking arrow key are taken from [stackoverflow](https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser)
- Images were edited (scaled (only favicon) and transparencies)  with a free software [GIMP](https://www.gimp.org/)
- Images were edited (scaled)  with a free software [Microsoft Paint](https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H?hl=en-us&gl=us)
- Sounds were converted to mp3 with free online converter [123apps](https://online-audio-converter.com/de/)

- Color-Scheme
  <img src="assets/images/color-scheme.png" alt="Color Scheme">

### Media

- The Images used, except the animal-pixel-images (including the favivon-image) are from this Open Source site [Pixabay](https://pixabay.com/de/)
- The Pixel-Animal images were taken from: [vectorstock](https://www.vectorstock.com/royalty-free-vector/pixel-art-animals-set-vector-17900732) and [depositphotos](https://de.depositphotos.com/101755934/stock-illustration-animal-cartoon-pixel.html)
Because these images have not been purchased, they are not legally commercially usable. Due to a lack of artistic skills, these images can only be seen in this practice project.

- All Sounds are from Open Source sites [pixabay](https://pixabay.com/de/sound-effects/), [mixkit](https://mixkit.co/free-sound-effects/)

- All icons were taken from [Font Awesome](https://fontawesome.com/)

- Font styles were taken from [Google Fonts](https://fonts.google.com/)



### Personal Advice

  - Thank You!
    - Jubril Akolade
    - All people from my Slack Group!
    - Code-Institute Tutors