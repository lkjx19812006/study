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
		animation: {
			type: cc.Animation,
			default: null
		},

		root: {
			type: cc.Node,
			default: null
		},

		tips: {
			type: cc.Node,
			default: null
		}
	},

	// LIFE-CYCLE CALLBACKS:
	getPositionInView(item) { // get item position in scrollview's node space
		let worldPos = item.convertToWorldSpaceAR(item.position);
		let viewPos = item.convertToNodeSpaceAR(worldPos);
		return viewPos;
	},


	onLoad() {
		let animation = this.animation;
	

		cc.loader.loadRes("test_assets/atlas", cc.SpriteAtlas, (err, atlas) => {
			let spriteFrames = atlas.getSpriteFrames();
			let clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 10);
			clip.name = 'run';
			clip.wrapMode = cc.WrapMode.Loop;

			animation.addClip(clip);
			animation.play('run');


		})
	},

	start() {
		let scene = cc.director.getScene();
		let spacex = 0;
		let spacey = 0;
		for (let i = 0; i < 10; i++) {
			let pos = this.getPositionInView(this.tips);
			let rootTemp = cc.instantiate(this.tips);
			spacey += 40;
			rootTemp.setPosition(pos.x, pos.y + spacey);
			this.root.parent.addChild(rootTemp);
		}
	
	},

	// update (dt) {},
});
