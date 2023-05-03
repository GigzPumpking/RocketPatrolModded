//rocket prefab

class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;
        this.sfxRocket = scene.sound.add('sfx_rocket');
        this.rotation = 0;

    }

    update() {
        this.rotation = 0;
        const pointer = game.input.activePointer;

        //left && right movement

        if (!this.isFiring) {
            
            if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            } else {
                this.setPosition(game.input.mousePointer.x, 656);
            }
        }
        else {
            if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed*2;
                this.rotation = 3*Math.PI/2;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed*2;
                this.rotation = Math.PI/2;
            }
        }

        //fire button

        if ((Phaser.Input.Keyboard.JustDown(keyF) || pointer.isDown) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }

        //if fired, move up

        if (this.isFiring && this.y >= borderUISize + borderPadding) {
            this.y -= this.moveSpeed;
        }

        //if miss, reset

        if (this.isFiring && this.y <= borderUISize + borderPadding) {
            this.reset();
        }
    }

    //reset rocket to ground

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}