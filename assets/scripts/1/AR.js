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

		posAR: {
			type: cc.Label,
			default: null
		},
		pos: {
			type: cc.Label,
			default: null
		},
		goldAR: {
			type: cc.Node,
			default: null
		},
		gold: {
			type: cc.Node,
			default: null
		}


	},

	// LIFE-CYCLE CALLBACKS:

	onLoad () {
		let sheep = this.goldAR.parent;
		let posAR = sheep.convertToWorldSpaceAR(cc.v2(this.goldAR.x, this.goldAR.y));
		this.posAR.string = `(${parseInt(posAR.x)},${parseInt(posAR.y)})`;
		
		let posy = this.goldAR.getPosition(cc.v2(this.goldAR.x, this.goldAR.y));
		// let pos1 = this.goldAR.convertToNodeSpace(cc.v2(this.goldAR.x, this.goldAR.y));
		// let pos2 = this.goldAR.convertToWorldSpace(cc.v2(this.goldAR.x, this.goldAR.y));
		// let pos3 = this.goldAR.convertToNodeSpaceAR(cc.v2(this.goldAR.x, this.goldAR.y));
		// let pos4 = this.goldAR.convertToWorldSpaceAR(cc.v2(this.goldAR.x, this.goldAR.y));
		// let pos5 = this.goldAR.getNodeToParentTransform(cc.v2(this.goldAR.x, this.goldAR.y));
		// let pos6 = this.goldAR.getNodeToParentTransformAR(cc.v2(this.goldAR.x, this.goldAR.y));

		// let pos7 = this.goldAR.getNodeToWorldTransform(cc.v2(this.goldAR.x, this.goldAR.y));
		// let pos8 = this.goldAR.getNodeToWorldTransformAR(cc.v2(this.goldAR.x, this.goldAR.y));

		// cc.log(posy, pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8);

		sheep = this.goldAR.parent;
		let pos = sheep.convertToWorldSpace(cc.v2(this.gold.x, this.gold.y));
		this.pos.string = `(${parseInt(pos.x)},${parseInt(pos.y)})`
	},

	start() {

	},

	// update (dt) {},
});
