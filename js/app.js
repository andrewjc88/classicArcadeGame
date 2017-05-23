// Enemies our player must avoid
var Enemy = function(x, y, Speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = Math.ceil(Math.random()*500);
    this.y = y;
    if (y > )
    this.speed = Math.ceil(Math.random()*200);;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //this.x + Math.floor(Math.random()) * dt;
    this.x = this.x + this.speed * dt;

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 370;
}

Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Keeps player inside of game board and controls player movement size.
Player.prototype.handleInput = function(inputKeyCode) {
    if (inputKeyCode === 'left' && this.x >= 101) {
        this.x -= 101;
    }
    else if (inputKeyCode === 'up' && this.y >= 0) {
        this.y -= 83;
    }
    else if (inputKeyCode === 'right' && this.x <= 304) {
        this.x += 101;
    }
    else if (inputKeyCode === 'down' && this.y <= 287) {
        this.y += 83;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var bugOne = new Enemy(-110, 83, 20);
var bugTwo = new Enemy(-110, 166, 200);
var bugThree = new Enemy(-110, 249, 50);
var allEnemies = [bugOne, bugTwo, bugThree];

// Place the player object in a variable called player

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
