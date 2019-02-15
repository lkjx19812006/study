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
		speed: 0.1,
		
		horizontal: {
			type: cc.Sprite,
			default:null
		},

		vertical:{
			type: cc.Sprite,
			default: null
		},

		radial_round: {
			default: null,
			type: cc.Sprite
		},

		radial_semi:{
			type: cc.Sprite,
			default: null
		}


	},

	// LIFE-CYCLE CALLBACKS:

	// onLoad () {},

	start() {

	},

	update (dt) {
		this._updateFillStart(this.horizontal, dt);
		this._updateFillStart(this.vertical, dt);

		this._updateFillRange(this.radial_round, 1, dt);
		this._updateFillRange(this.radial_semi, 0.5, dt);

	},

	_updateFillStart(sprite, dt){
		let fillStart = sprite.fillStart;
		fillStart = fillStart > 0 ? fillStart -= (dt * this.speed) : 1;
		sprite.fillStart = fillStart;
	},

	_updateFillRange(sprite, range, dt){
		let fillRange = sprite.fillRange;
		fillRange = fillRange < range ? fillRange += (dt * this.speed) : 0;
		sprite.fillRange = fillRange;
	}

});
