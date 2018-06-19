// pages/complete/complete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true,
      success: function (res) {
        console.log('shareMenu share success');
        console.log('分享' + JSON.stringify(res));
      },
      fail: function (res) {
        // 分享失败
        console.log(res)
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if(res.from==='button'){
        console.log(res.target)
    }
    return {
      title: "抱歉，我选错了……",
      path:"/pages/index/index",
      imageUrl:"https://pic.gaodun.com/cfa_xcx/images/shareImage.jpg",
      success:function(res){
        if (res.shareTickets){
          wx.getShareInfo({
            shareTicket: res.shareTickets[0], 
            success: function (res) {
              wx.navigateTo({
                url: "/pages/result/result",
                success: function () {
                }
              });
            },
            fail: function (res) {
              console.log(res)
            }
          })
        }else{
          wx.showToast({
            icon:"none",
            title: '需分享到群里哦！',
          })
        }
      },
      fail:function(res){
        console.log(res+"fail");
      }
    }
  }
})