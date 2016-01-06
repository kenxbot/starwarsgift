import app from 'ampersand-app';

export default {
  background: null,
  preloadBar: null,
  ready: false,
  introShown: false,

  preload() {
    this.load.image('image', 'images/background.png');
    this.load.audio('music', ['audio/music.m4a', 'audio/music.ogg']);
    this.load.audio('saber', ['audio/saber.m4a', 'audio/saber.ogg']);
    this.load.image('nicole', 'images/nicole.png');

    this.showLoadingText();
  },

  showLoadingText() {
    this.loadingText = this.game.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Loading...', {
      font: `40px "${ app.fontFamily }"`,
      fill: 'rgb(75, 213, 238)'
    });

    this.loadingText.anchor.setTo(0.5, 0.5);

    this.loadingText.inputEnabled = true;
  },

  showTapInstruction() {
    this.loadingText.destroy();

    this.tapText = this.game.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Tap your screen to begin...', {
      font: `40px "${ app.fontFamily }"`,
      fill: 'rgb(75, 213, 238)'
    });

    this.tapText.anchor.setTo(0.5, 0.5);

    this.tapText.inputEnabled = true;

    this.game.input.onDown.addOnce(() => {
      this.tapText.destroy();
      this.showIntro();
    });
  },

  showIntro() {
    this.loadingText.destroy();

    this.introText = this.game.add.text(this.game.width * 0.5, this.game.height * 0.5, 'A long time ago, in a galaxy\nfar far away...', {
      font: `40px "${ app.fontFamily }"`,
      fill: 'rgb(75, 213, 238)'
    });

    this.introText.anchor.setTo(0.5, 0.5);
    this.introText.alpha = 0;
    this.introTweenIn = this.game.add.tween(this.introText).to({ alpha: 1 }, 1500, Phaser.Easing.Linear.Out);
    this.introTweenIn.onComplete.add(() => {
      this.hideIntro();
    });
    this.introTweenIn.start();
  },

  hideIntro() {
    this.introText.alpha = 1;
    this.introTweenOut = this.game.add.tween(this.introText).to({ alpha: 0 }, 1500, Phaser.Easing.Linear.Out).delay(5000);
    this.introTweenOut.onComplete.add(this.start, this);
    this.introTweenOut.start();
  },

  update() {
    if (this.cache.isSoundDecoded('music') && !this.ready) {
      this.ready = true;
      // iOS needs initial tap to play sound.
      if (this.game.device.iOS) {
        this.showTapInstruction();
      } else {
        this.showIntro();
      }
    }
  },

  start() {
    this.game.time.events.add(1000, () => {
      this.state.start('Opening');
    });
  }
};
