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
		speed: 100,

		progressBar: {
			type: cc.Node,
			default: null
		},

		ground: {
			type: cc.Node,
			default: null
		}


	},

	// LIFE-CYCLE CALLBACKS:

	// onLoad () {},

	start() {

	},

	update (dt) {
		this._updateWidth(this.progressBar, 500, dt);
		this._updateWidth(this.ground, 1000, dt);
	},

	_updateWidth(node, range, dt){
		let width = node.width;
		width = width < range ? width += (this.speed * dt) : 0;
		node.width = width;
	}


});
