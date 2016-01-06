import app from 'ampersand-app';

export default {
  create() {
    this.fadeMusic();
    this.showNicole();
    this.showLogo();
    this.showInfo();
  },

  fadeMusic() {
    app.music.fadeOut(14000);
  },

  showNicole() {
    this.nicole = this.game.add.sprite(-500, 55, 'nicole');
    this.game.add.tween(this.nicole).to({ x: 30 }, 1000, Phaser.Easing.Quadratic.InOut, true);
    this.saber = this.game.add.audio('saber');
    this.saber.play();
  },

  showLogo() {
    this.logoText = this.game.add.text(410, 60, 'Star Wars', {
      font: '75px sf_distant_galaxyregular',
      fill: 'rgb(0,0,0)',
      stroke: '#ff6',
      strokeThickness: 6,
      align: 'center'
    });

    this.logoTween = this.game.add.tween(this.logoText).from({ alpha: 0 }, 3000,  Phaser.Easing.Quadratic.Out, true );
  },

  showInfo() {
    this.infoText = this.game.add.text(410, 250, 'Your Secret Santa Gift Nicole.\nMay the Diverse Force be with you!\n\n\nFrom Jen.', {
      font: `20px "${ app.fontFamily }"`,
      fill: '#fff',
      wordWrap: true,
      wordWrapWidth: 510,
      align: 'center'
    });

    this.infoTextTween = this.game.add.tween(this.infoText).from({ alpha: 0 }, 3000,  Phaser.Easing.Quadratic.Out, true );
  },
};
