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
		nodes: {
			type: [cc.Node],
			default: []
		},

		animation: {
			type: cc.Animation,
			default: null
		}


	},

	// LIFE-CYCLE CALLBACKS:

	onLoad() {
		this.registerEvent();
	},

	registerEvent() {
		for (let i = 0; i < this.nodes.length; i++) {
			this.nodes[i].on(cc.Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
		}
	},

	onTouchEnd(event) {
		this.animation.stop();
		let itemNode = event.target
		let label = itemNode.getChildren('Label')[0];
		label = label.getComponent(cc.Label).string;
		console.log(label)
		switch (label) {
			case 'Linear':
				this.animation.play('linear');
				break;
			case 'Case_In_Expo':
			  this.animation.play('caseIn-expo');
				break;
			case 'Case_Out_Expo':
			  this.animation.play('caseOut-expo');
				break;
			case 'Case_Out_In_Expo':
			  this.animation.play('caseInOut-expo');
				break;
			case 'Back_Forward':
			  this.animation.play('back-forward');
				break;
		}
	},



	start() {

	},

	// update (dt) {},
});
