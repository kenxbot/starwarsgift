import app from 'ampersand-app';

export default {
  create() {
    this.playMusic();
    this.showLogo();
    this.game.time.events.add(9250, this.showStory, this );
    this.game.time.events.add(11500, this.translateCanvas, this );
    this.game.time.events.add(70000, this.showInfo, this );
  },

  playMusic() {
    app.music = this.game.add.audio('music');
    app.music.play();

    this.game.onPause.add(this.pauseMusic, this);
    this.game.onResume.add(this.resumeMusic, this);
  },

  pauseMusic() {
    app.music.pause();
  },

  resumeMusic() {
    app.music.resume();
  },

  showLogo() {
    document.body.classList.add('body-stars');

    this.logoText = this.game.add.text(this.game.width * 0.5, this.game.height * 0.5, 'SMASH\nStanford', {
      font: '140px sf_distant_galaxyregular',
      fill: 'rgb(0,0,0)',
      stroke: '#ff6',
      strokeThickness: 10,
      align: 'center'
    });

    this.logoText.anchor.setTo(0.5, 0.5);
    this.logoText.scale.setTo(1.5, 1.5);
    this.positionTween = this.game.add.tween(this.logoText).to({ y: '-50' }, 14000, Phaser.Easing.Linear.Out, true);
    this.logoTween = this.game.add.tween(this.logoText.scale).to({ x: 0, y: 0 }, 12000, Phaser.Easing.Linear.Out, true);
    this.alphaTween = this.game.add.tween(this.logoText).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.In, true, 10500);
  },

  showStory() {
    this.storyGroup = this.game.add.group();

    this.storyText1 = this.game.add.text(this.game.width * 0.5, this.game.height * 1.3, 'Year 2016\nThe Summer to Remember\n', {
      font: `700 60px "${ app.fontFamily }"`,
      fill: '#ff6',
      wordWrap: true,
      wordWrapWidth: this.game.width - 50,
      align: 'center'
    });

    this.storyText1.anchor.setTo(0.5, 1);

    this.storyGroup.add(this.storyText1);

    this.storyText2 = this.game.add.text(this.game.width * 0.5, this.storyText1.y + this.storyText1.height + 50, "It is the final summer for the SMASH 2017 cohort. They have lasted two summers being the underdogs of SMASH but now, they finally have the credit they deserve as 3rd years.", {
      font: `700 44px "${ app.fontFamily }"`,
      fill: '#ff6',
      wordWrap: true,
      wordWrapWidth: this.game.width
    });

    this.storyText2.anchor.setTo(0.5, 1);

    this.storyGroup.add(this.storyText2);

   this.storyText3 = this.game.add.text(this.game.width * 0.5, this.storyText2.y + this.storyText2.height + 2, "With a plan to have the most fun, the 3rd years will stop at nothing to fulfill their bucket list full of pranks, sleepovers, and bonding activities.", {
      font: `700 44px "${ app.fontFamily }"`,
      fill: '#ff6',
      wordWrap: true,
      wordWrapWidth: this.game.width
    });

    this.storyText3.anchor.setTo(0.5, 1);

    this.storyGroup.add(this.storyText3);

    this.storyText4 = this.game.add.text(this.game.width * 0.5, this.storyText3.y + this.storyText3.height + 320, "As RAs try to stop the 3rd years from fulfilling their bucket list, they continue to make this summer memorable. Now it is the final week, the 3rd years are getting ready to gather for one last bonding night at SMASH. They hope that this night is a night full of laughter, tears, and memories..." , {
      font: `700 44px "${ app.fontFamily }"`,
      fill: '#ff6',
      wordWrap: true,
      wordWrapWidth: this.game.width
    });

    this.storyText4.anchor.setTo(0.5, 1);

    this.storyGroup.add(this.storyText4);

    this.storyTween = this.game.add.tween(this.storyGroup).to({ y: -(this.game.height * 3) }, 71000, Phaser.Easing.Linear.InOut, true);
  },

  translateCanvas() {
    document.getElementById('game').classList.add('container-story');
  },

  showInfo() {
    document.body.classList.remove('body-stars');
    document.getElementById('game').classList.remove('container-story');
    this.game.state.start('Info');
  }
};