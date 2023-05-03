class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/assets_blip_select12.wav');
        this.load.audio('sfx_explosion1', './assets/assets_explosion38.wav');
        this.load.audio('sfx_explosion2', './assets/assets_explosion.wav');
        this.load.audio('sfx_explosion3', './assets/assets_explosion1.wav');
        this.load.audio('sfx_explosion4', './assets/assets_explosion2.wav');
        this.load.audio('sfx_explosion5', './assets/assets_explosion3.wav');
        this.load.audio('sfx_rocket', './assets/assets_rocket_shot.wav');
        this.load.audio('background_music', './assets/rocketpatrolsong.wav');
        this.load.image('background', './assets/Background.png');
      }
    create() {
        this.background = this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.background.displayWidth = this.sys.canvas.width;
        this.background.displayHeight = this.sys.canvas.height;
        let menuConfig = {
            fontFamily: 'Impact',
            fontSize: '96px',
            backgroundColor: '#cf7bed',
            color: '#501bab',
            align: 'right',
            padding: {
                top: 15,
                bottom: 15,
                right: 15,
                left: 15
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding - 90, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '42px';
        menuConfig.fontFamily = 'Arial';
        this.add.text(game.config.width/2, game.config.height/2, 'Keyboard: Arrow Keys to move + (F) to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 75, 'Mouse: Drag to move + Click to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#f56e64';
        menuConfig.color = "#911910";
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 120, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60,
                highScore: 0,
                audioPlaying: false
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45,
            highScore: 0,
            audioPlaying: false
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
      }
}