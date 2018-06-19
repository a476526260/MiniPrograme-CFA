//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    showHistory: false
  },
  onLoad: function () {
    var _this = this;
    if (wx.getStorageSync("hasHistory") ==="Y"){
      console.log("获取到历史记录");
      this.setData({
        showHistory: true,
      })
    }else{
      console.log("无历史记录")
      this.setData({
        showHistory: false,
      })
    } 
  },
  start:function(){
    wx.navigateTo({
      url: '../subject/subject',
      success:function(res){
        app.globalData.fromHistory = false;
      }
    })
  },
  turnToResult:function(){
    wx.navigateTo({
      url: '../result/result',
      success: function (res) {
        app.globalData.fromHistory=true;
      }
    })
  },
  onShareAppMessage: function () {
    return{
      title: "CFA测试报告",
      path: "/pages/index/index",
      imageUrl: "https://pic.gaodun.com/cfa_xcx/images/shareImage.jpg",
    }
  }
  
})
