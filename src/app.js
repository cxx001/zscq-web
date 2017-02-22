
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        //var mainscene = ccs.load(res.MainScene_json);
        //this.addChild(mainscene.node);

        var mainscene = ccs.load(res.LoginUI_csb);
        this.addChild(mainscene.node);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

