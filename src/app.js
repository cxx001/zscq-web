
var LoginUI = cc.Layer.extend({
    loginNode:null,

    ctor:function () {
        this._super();

        var login = ccs.load(res.LoginUI_json);
        this.loginNode = login.node;
        this.addChild(this.loginNode);

        this.init();

        return true;
    },
    
    init: function () {
        var Button_loginB = ccui.helper.seekWidgetByName(this.loginNode, "Button_loginB");
        var Button_notice = ccui.helper.seekWidgetByName(this.loginNode, "Button_notice");
        var Button_change = ccui.helper.seekWidgetByName(this.loginNode, "Button_change");

        Button_loginB.setPressedActionEnabled(true);
        Button_loginB.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                window.alert("git@github.com:cxx001/zscq-web.git");
            }
        }, this);

        Button_notice.setPressedActionEnabled(true);
        Button_notice.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                cc.log("git@github.com:cxx001/zscq-web.git");
            }
        }, this);

        Button_change.setPressedActionEnabled(true);
        Button_change.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                cc.log("git@github.com:cxx001/zscq-web.git");
            }
        }, this);

        this.srcollBgEffect();
    },

    srcollBgEffect:function(){
        var Panel_bg = ccui.helper.seekWidgetByName(this.loginNode, "Panel_bg");
        var time = 60;
        var endX = cc.winSize.width - 2048;
        var moveTo = cc.moveTo(time, cc.p(endX, 0));
        var backTo = cc.moveTo(time, cc.p(0, 0));
        Panel_bg.runAction(cc.sequence(moveTo, backTo).repeatForever());
    },

});

var scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new LoginUI();
        this.addChild(layer);
    }
});

