//app.js
App({
  onLaunch: function (ops) {
    if (ops.scene==1044){
      //用户从微信群分享卡片进入
      wx.getShareInfo({
        shareTicket:ops.shareTicket,
        success:function(res){
          console.log(res)
        }
      })
    }
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code=res.code;
       
      }
    });
    //wx.clearStorageSync()
  },
  onLoad:function(){
    wx.getStorageInfo({
      success: function (res) {
        console.log(res.keys)
      }
    });
    wx.clearStorage()
  },
  globalData: {
    fromHistory:false
  }
})