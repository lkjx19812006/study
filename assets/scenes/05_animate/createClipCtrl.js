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

		rootTemp:{
			type:	cc.Prefab,
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
		let spacex = 0;	
		for(let j = 0; j < 40; j++){
			spacex += 30;
			let spacey = 0;
			for (let i = 0; i < 10; i++) {
					let rootTemp = cc.instantiate(this.rootTemp);
					rootTemp.scale = 0.2;
					let pos = this.getPositionInView(this.tips);
					pos.x = pos.x - 450;
					spacey += 30;

					rootTemp.x = pos.x + spacex;
					rootTemp.y = pos.y + spacey;
					
					let animation = rootTemp.getComponent(cc.Animation);
					//console.log(animation);
					animation.play('sheep_run');
					this.root.parent.addChild(rootTemp);
				}
		}
	
	
	},

	// update (dt) {},
});
