/*

Hung Nguyen
Rocket Patrol: A New Starfield

about 5-6 hours, I wish I put more time so I could be among the favorites, but for now this is just a generic assignment.

Mods:

5 pt: High Score Tracker across rounds, resets upon going to main menu
5 pt: Background Music: Obtained from https://freesound.org/people/hmmm101/sounds/335699/
5 pt: 50% speed increase to enemy spaceships after halftime
5 pt: Spaceship direction randomization: also randomizes after being destroyed
5 pt: New scrolling background sprite I made in photoshop
5 pt: Allow player to control rocket after being fired: All I did was remove the isFiring lock, but I did increase the speed of horizontal movement after being fired. And the rocket rotates to match.

10 pt: 4 new explosion sound effects, made using jsfxr. The sfx are randomized.
10 pt: Time displayed in seconds, counts down
10 pt: New title screen displaying pixel art I made. Uses Impact and Arial fonts, and discusses both mouse and keyboard controls.
10 pt: Parallax Scrolling: I did this by adding a 2nd background art also made by me, and adding it as a 2nd tilesprite that just moves slower than the 1st background.

15 pt: A new spaceship created by myself via photoshop. It's smaller, moves faster, and is worth 50 points
15 pt: The rocket now follows the horizontal position of the cursor. 
       It can also be fired by clicking. Exists simultaneously with keyboard controls: 
       if you start moving with arrow keys, the rocket will not move to your cursor until after you let go of the arrow key.



*/

let config = {
    type: Phaser.CANVAS,
    width: 960,
    height: 720,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars

let keyF, keyR, keyLEFT, keyRIGHT;

