// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
	extends: cc.Component,

	properties: {
		// foo: {
		//     // ATTRIBUTES:
		//     default: null,        // The default value will be used only when the component attaching
		//                           // to a node for the first time
		//     type: cc.SpriteFrame, // optional, default is typeof default
		//     serializable: true,   // optional, default is true
		// },
		// bar: {
		//     get () {
		//         return this._bar;
		//     },
		//     set (value) {
		//         this._bar = value;
		//     }
		// },
		playLabel: {
			type: cc.Label,
			default: null
		},
		pauseLabel: {
			type: cc.Label,
			default: null
		},

		animation: {
			default: null,
			type: cc.Animation
		}


	},

	// LIFE-CYCLE CALLBACKS:

	// onLoad () {},

	start() {

	},

	onEnable() {
		let animation = this.animation;
		animation.on('play', this.onPlay);
		animation.on('stop', this.onStop);
		animation.on('lastframe', this.onLastframe);
		animation.on('finished', this.onFinished);
		animation.on('pause', this.onPause);
		animation.on('resume', this.onResume);
	},

	onDisable(){
		let animation = this.animation;
		animation.off('play', this.onPlay);
		animation.off('stop', this.onStop);
		animation.off('lastframe', this.onLastframe);
		animation.off('finished', this.onFinished);
		animation.off('pause', this.onPause);
		animation.off('resume', this.onResume);
	},

	onPlay() {
		cc.log('onPlay');
	},
	onStop() {
		cc.log('onStop');
	},
	onLastframe() {
		cc.log('onLastframe');
	},
	onFinished() {
		cc.log('onFinished');
	},
	onPause() {
		cc.log('onPause');
	},
	onResume() {
		cc.log('onResume');
	},

	playBtnClick() {
		if (this.playLabel.string === '开始') {
			this.playLabel.string = '结束';
			this.animation.play('02');
		} else {
			this.playLabel.string = '开始';
			this.animation.stop('02');
		}

	},
	pauseBtnClick() {
		if (this.pauseLabel.string === '暂停') {
			this.pauseLabel.string = '继续'
			this.animation.pause('02');
		} else {
			this.pauseLabel.string = '暂停'
			this.animation.resume('02');
		}

	}



	// update (dt) {},
});
