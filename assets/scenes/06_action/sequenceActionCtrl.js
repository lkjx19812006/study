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
			root:{
				type: cc.Node,
				default: null
			},

			tips: {
				type: cc.Label,
				default: null
			}
			
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
			let startTime = 0;
			let eachTime = 0.5;
			let sequence1 = cc.sequence(
					cc.moveBy(eachTime, cc.v2(0, -300)),
					cc.moveBy(eachTime, cc.v2(0, 300))
				).repeat(2);

			let sequence2 = cc.sequence(
					cc.moveBy(eachTime, cc.v2(0, -200)),
					cc.moveBy(eachTime, cc.v2(0, 200))
				).repeat(2);
			
			this.root.runAction(
				cc.sequence(
					cc.callFunc(()=>{
						startTime = Date.now();
					}),
					sequence1,
					sequence2,
					cc.callFunc(()=>{
						this.tips.string = "當前運行時間= "  + (Date.now() - startTime);
					})
				)
			);

		},

    start () {

    },

    // update (dt) {},
});
