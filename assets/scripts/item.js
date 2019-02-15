cc.Class({
	extends: cc.Component,

	properties: {
		label: {
			type: cc.Label,
			default: null
		},
		url: '',
		bg: cc.Sprite,
		btn: cc.Button
	},
	
	init(menu){
		this.index = -1;
		this._name = '';

		this.menu = menu;
	},

	loadExample(){
		if(this.url){
			this.menu.loadScene(this.url);
		}

	},

	updateItem(index, y, name, url){
		let isDir = !url;
		this.index = index;
		this.node.y = y;
		this.node.x = isDir ? 50 : 100;
		this.label.string = this._name = name;
		this.url = url;
		this.bg.enabled = !isDir;
		this.btn.interactable = !isDir;
	}
});
