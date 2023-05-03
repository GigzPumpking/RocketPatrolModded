//rocket prefab

class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, speed) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = speed;
        this.randDirec = Math.floor(Math.random()*2)+1;
        this.HalfTime = false;
        console.log(this.randDirec);
        
    }

    update() {

        //left && right movement
        if (this.randDirec == 1) {
            this.flipX = false;
            if (this.HalfTime == false) {
                this.x -= this.moveSpeed;
            }
            else {
                this.x -= this.moveSpeed*1.5;
            }
            if (this.x <= this.moveSpeed) {
                this.x = game.config.width;
            }
        }
        if (this.randDirec == 2) {
            this.flipX = true;
            if (this.HalfTime == false) {
                this.x += this.moveSpeed;
            }
            else {
                this.x += this.moveSpeed*1.5;
            }

            if (this.x >= game.config.width) {
                this.x = 0;
            }
        }
    }

    increaseSpeed() {
        this.HalfTime = true;
    }

    reset() {
        this.randDirec = Math.floor(Math.random()*2)+1;
        if (this.randDirec == 1) {
            this.x = game.config.width;
            this.flipX = false;
        }
        if (this.randDirec == 2) {
            this.x = 0;
            this.flipX = true;
        }
    }
}