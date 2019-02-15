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
		progressBar: {
			default: null,
			type: cc.ProgressBar
		},

		progressTips: {
			default: null,
			type: cc.Label
		},

		loadBg: {
			default: null,
			type: cc.Node
		}



	},

	// LIFE-CYCLE CALLBACKS:

	onLoad() {
		this._urls = [
			'http://tools.itharbors.com/christmas/res/sounds/ss.mp3',
			'http://111.230.5.165:6060/T_Farm.bmp',
			cc.url.raw("resources/audio/ding.wav"),
			cc.url.raw("resources/audio/cheering.wav"),
			cc.url.raw("resources/audio/music_logo.mp3"),
			cc.url.raw("resources/test_assets/audio.mp3"),
			cc.url.raw("resources/loadingBar/font.png"),
			cc.url.raw("resources/loadingBar/mikado_outline_shadow.png"),
			cc.url.raw("resources/loadingBar/enligsh-chinese.png")
		];
		this.resource = null;
		this.progressBar.progress = 0;
		this._clearAll();

		this.node.on(cc.Node.EventType.TOUCH_START, () => {
			if (this.resource) return;
			cc.loader.load(this._urls, this._progressCallback.bind(this), this._completeCallback.bind(this), this);
		})

	},

	_clearAll() {
		for (let i = 0; i < this._urls.length; i++) {
			let url = this._urls[i];
			cc.loader.release(url);
		}
	},

	_progressCallback(completedCount, totalCount, res) {
		//cc.log(completedCount, totalCount, res);
		this.progress = completedCount / totalCount;
		this.resource = res;
		this.completedCount = completedCount;
		this.totalCount = totalCount;
	},

	_completeCallback(error, res) {

	},

	start() {

	},

	update(dt) {
		if (!this.resource) {
			return;
		}
		let progress = this.progressBar.progress;
		if (progress >= 1) {
			this.progressTips.string = "加载完成";
			this.loadBg.active = false;
			this.progressBar.node.active = false;
			this.enabled = false;
			return;
		}
		if (progress < this.progress) {
			progress += dt;
		}
		this.progressBar.progress = progress;
		this.progressTips.string = this.resource.id + " (" + this.completedCount + "/" + this.totalCount + ")";
	},
});
