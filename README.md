# Snake 2001

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


## Features 

- __Body__

    - The body contains the Snake 2001 background image. Fern plants are shown, which are supposed to symbolize a rain forest. The image is available for free use on Pixabay.
        - [pixabay](https://pixabay.com/images/search/jungle/?manual_search=1)
    - The body also contains the "Game-Program-Field". This is in turn divided into different areas.


    - __Game Program Field__

     - The Game Field contains a background image. The background image shows an old vintage push button cell phone from the early 2000s. All other features are laid out over the background in a way that makes it look like you are operating this phone.

        - __Header__

            - The header contains the Snake 2001 logo which shows a snake. 
            - The header also includes the headline and score area.
             - The score area shows the current score, the current record score and the current level.
            - The header has a fixed position inside the Game-Program-Field-Window.

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

        - Playing Field Image:<br>
            <img src="assets/images/screenshot-canvas.png" alt="Playing Field">


        - __The Control Area__

            - The control panel contains the start button and the control buttons of the snake for mobile devices (phones, tablets).Users on devices with a keyboard will be more likely to use the keyboard. The start button contains instructions on how to start the game. 
            - It serves as a user manual and as an intermediate step between the "Game Over Status" and the start of the game. This prevents the end screen ("Game Over" or "You Win") from being clicked away immediately by intuitively continuing to play (a direction key is pressed).
            - The start button changes color by mouse over and by clicking.
            - The control button change color by mouse over.
            - The Control Area idea and basic code is taken form the **Code-Institute Love-Maths-Project** but has been modified.

        - Control Area Image:<br>
            <img src="assets/images/screenshot-control-area.png" alt="Control Area">


        - __The Footer__ 

        - The footer includes links to the relevant social media sites for the Game-Developer Company. The links will open to a new tab to allow easy navigation for the user. 
        - The footer is valuable to the user as it allows them to get Information via social media.
        - The footer idea and basic code is taken form the **Code-Institute Love-Running-Project** but has been slightly modified.

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

  - Accessibility
      - I confirm that the colors and fonts selected are easy to read and accessible. This was discovered using lighthouse in devtools.
      - All web pages have been tested for desktop and mobil devices.

- HTML Validation
<img src="assets/images/screenshot-html-validator.png" alt="HTML Validation">

- CSS Validation
<img src="assets/images/screenshot-css-validator.png" alt="CSS Validation">

- JavaScipt Validation
<img src="assets/images/screenshot-js-validator.png" alt="CSS JavaScipt">

- Lighthouse-Desktop

<img src="assets/images/screenshot-lighthouse.png" alt="Lighthouse Desktop">

- Lighthouse-Mobil

<img src="assets/images/screenshot-lighthouse-mobil.png" alt="Lighthouse Mobil">


- user story besed test cases (screenshots):

  - As a visiting user, I can easily understand the main purpose of the game. 
      - Heading, Start Button, Animals
      <img src="assets/images/screenshot-userstory-whats-the-goal.png" alt="Canvas and Start Button">

  - As a visiting user, I can navigate the snake without any problems.
      - Start Butten (after klicking) keybord, arrow/number buttons
      <img src="assets/images/screenshot-userstory-what-to-do.png" alt="Control-Area">

  - As a visiting user, I can learn to navigate the snake more efficiently to earn more points.
      - User experience. Users get more points.
      <img src="assets/images/screenshot-userstory-performance.png" alt="Score">

  - As a visiting user, I can easily get information about the company through their social media links.
      - Footer with social media links.
      <img src="assets/images/screenshot-footer.png" alt="Footer">



### Unfixed Bugs

 - No Bugs are unfixed.

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

- Instructions on how to implement form validation on the Login, Sign Up and Sign Up Mistake page was taken from [Code Institute - Love Running Project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/4d85cd1a2c57485abbd8ccec8c00732c/)
- All icons were taken from [Font Awesome](https://fontawesome.com/)
- Font styles were taken from [Google Fonts](https://fonts.googleapis.com)
- The basic code of the header dropdown menu is taken from the following website, but has been changed. [w3schools](https://www.w3schools.com/howto/howto_css_dropdown.asp)
- The basic code of the clickable burger button menu is taken from the following website, but has been changed. [Álvaro Trigo](https://alvarotrigo.com/blog/hamburger-menu-css/)
- The basic code of the slide show is taken from the following website, but has been modified. [Specific YouTube Tutorial](https://www.youtube.com/watch?v=0wvrlOyGlq0)
- Instructions on how to implement a google map into a website was taken from [Code Institute - Coders Coffeehouse Project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+HE101+2020/courseware/fcc67a894619420399970ae84fc4802f/13db720675f94dbca6b0fe79467628ca/)
- Instructions on how to implement links into the footer was taken from [Code Institute - Love Running Project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/e6d4cda2bc08458ba94d2092be9bad3a/)
- Instructions on how to implement Textblocks into Images or maps was taken from [Code Institute - Coders Coffeehouse Project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+HE101+2020/courseware/fcc67a894619420399970ae84fc4802f/13db720675f94dbca6b0fe79467628ca/)
- Instructions on how to center content vertically and horizontally was taken from [w3schools](https://www.w3schools.com/howto/howto_css_center-vertical.asp)
- The code for the password	confirmation is taken from [Codepen](https://codepen.io/diegoleme/pen/qBpyvr)

- Color-Scheme
  <img src="assets/images/color-scheme.png" alt="Color Scheme">

### Media

- The Images used, except the animal-pixel-images (including the favivon-image) are from this Open Source site [Pixabay](https://pixabay.com/de/)
- The Pixel-Animal images were taken from: [vectorstock](https://www.vectorstock.com/royalty-free-vector/pixel-art-animals-set-vector-17900732) and [depositphotos](https://de.depositphotos.com/101755934/stock-illustration-animal-cartoon-pixel.html)
Because these images have not been purchased, they are not legally commercially usable. Due to a lack of artistic skills, these images can only be seen in this practice project.

- All Sounds are from Open Source sites [pixabay](https://pixabay.com/de/sound-effects/), [mixkit](https://mixkit.co/free-sound-effects/)






### Personal Advice

  - Thank You!
    - Jubril Akolade
    - All people from my Slack Group!
    - Code-Institute Tutors