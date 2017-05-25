//-------------------- Enemies player class --------------------
var Enemy = function(x, y, Speed) {

    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Speed;
    this.width = 101;
    this.height = 67;

};

//-------------------- Updates enemy position --------------------
Enemy.prototype.update = function(dt) {

    // Multiplies any movement by the dt parameter which will
    // ensure the game runs at the same speed for all computers.
    this.x = this.x + this.speed * dt;

    // Resets new random y location and speed once enemy
    // reaches end of gameboard.
    if (this.x > 606) {
        this.x = -101;
        this.y = Math.floor(Math.random() * (280 - 0 + 1) + 0);
        this.speed = Math.floor(Math.random() * (600 - 400 + 1) + 400);
    }
};

//-------------------- Draws enemies on the screen --------------------
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//-------------------- Player Class --------------------
var Player = function(x, y, speed) {
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 370;
    this.speed = 100;
    this.width = 70;
    this.height = 75;
};

//-------------------- Update player prototype --------------------
Player.prototype.update = function(dt) {
    this.checkCollisionsBugs();
    if (this.y <= 0) {
        this.Win();
    };
};

//-------------------- render Player prototype --------------------
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//-------------------- Player control & limits --------------------
// Moves player on keypress and sets bounds for gameboard.
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

//-------------------- Player Win prototype --------------------
Player.prototype.Win = function() {
    this.x = 202;
    this.y = 370;
    alert("You won!");
};

//-------------------- Player lose prototype --------------------
Player.prototype.Lose = function() {
    this.x = 202;
    this.y = 370;
    alert("You Lose! Try again!");
};

//-------------------- Player Colision Prototype --------------------
Player.prototype.checkCollisionsBugs = function() {

    for (var i = 0; i < allEnemies.length; i++) {
        var enemy = allEnemies[i];
        // Checks that collision occur on each enemy for each state.
        if (enemy.x < (this.x + 8) + this.width &&
        enemy.x + enemy.width > (this.x + 8) &&
        (enemy.y + 76) < (this.y + 60) + this.height &&
        enemy.height + (enemy.y + 76) > (this.y + 60)) {
            this.Lose();
        }
    }
};

//-------------------- Enemy enstantiate --------------------
var bugOne = new Enemy(-101, -238, 300);
var bugTwo = new Enemy(-101, -300, 503);
var bugThree = new Enemy(-101, 98, 320);
var bugFour = new Enemy(-101, 171, 400);
var bugFive = new Enemy(-101, 200, 432);
var allEnemies = [bugOne, bugTwo, bugThree, bugFour, bugFive];

//-------------------- Player variable --------------------
var player = new Player();

//-------------------- Keypress listener --------------------
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
