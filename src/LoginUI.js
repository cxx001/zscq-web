/**
 * Created by Administrator on 2017/2/23.
 */
var LoginUI = {
    loginNode:null,

    ctor:function(){
        var login = ccs.load(res.LoginUI_json);
        this.loginNode = login.node;
        return this.loginNode;
    },
};
