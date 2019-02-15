// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

const SceneList = cc.Class({
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

		itemPrefab: {
			type: cc.Prefab,
			default: null
		},
		initItemCount: 0,
		scrollView: cc.ScrollView,
		bufferZone: 0
	},

	createItem(x, y, name, url) {
		let item = cc.instantiate(this.itemPrefab);
		let itemComp = item.getComponent('item');
		let label = itemComp.label;
		label.string = name;

		if (url) {
			itemComp.url = url;
		}

		item.x = x;
		item.y = y;
		this.node.addChild(item);
		return item;
	},

	init(menu) {
		this.sceneList = [];
		this.itemList = [];
		this.updateTimer = 0;
		this.updateInterval = 0.2;
		this.lastContentPosY = 0;

		//this.initList();

	},

	initList() {
		let y = 0;
		this.node.height = (this.sceneList.length + 1) * 60;
		let initItemCount = Math.min(this.initItemCount, this.sceneList.length);
		for (let i = 0; i < initItemCount; i++) {
			let item = cc.instantiate(this.itemPrefab).getComponent('item');
			let itemInfo = this.sceneList[i];
			this.node.addChild(item.node);
			y -= 60;
			item.updateItem(i, y, itemInfo.name, itemInfo.url);
			this.itemList.push(item);
		}
	},


	// LIFE-CYCLE CALLBACKS:

	// onLoad () {},

	start() {

	},

	getPositionInView(item){
		let worldPos = item.parent.convertToWorldSpaceAR(item.position);
		let viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
		return viewPos;
	},


	update(dt) {
		this.updateTimer += dt;
		if (this.updateItem < this.updateInterval) {
			return;
		}

		this.updateTimer = 0;

		let items = this.itemList;
		let buffer = this.bufferZone;
		let isDown = this.node.y < this.lastContentPosY;
		let curItemCount = this.itemList.length;
		let offset = 60 * curItemCount;

		for (let i = 0; i < curItemCount; i++) {
			let item = items[i];
			let itemNode = item.node;
			let viewPos = this.getPositionInView(itemNode);
			if (isDown) {
				if (viewPos.y < - buffer && itemNode.y - offest > -this.node.height) {
					let newIdx = item.index + curItemCount;
					let newInfo = this.sceneList[newIdx];
					item.updateItem(newIdx, itemNode.y - offset, newInfo.name.newInfo.url);
				}
			}
		}
		this.lastContentPosY = this.node.y;
	},


});
