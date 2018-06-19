// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1,
    choosed:[
      {
        A:"0",
        B:"0"
      },
      {
        A: "0",
        B: "0"
      },
      {
        A: "0",
        B: "0"
      },
      {
        A: "0",
        B: "0"
      },
      {
        A: "0",
        B: "0"
      },
      {
        A: "0",
        B: "0"
      },
      {
        A: "0",
        B: "0"
      },
      {
        A: "0",
        B: "0"
      },
      {
        A: "0",
        B: "0"
      },
      {
        A: "0",
        B: "0"
      }
    ],
    subject:[
      {
        "title":"1.认识你的人倾向形容你为：",
        "answerA":{
          "src":"https://pic.gaodun.com/cfa_xcx/images/picture1.png",
          "text":"A.热情和敏感"
        },
        "answerB":{
          "src":"https://pic.gaodun.com/cfa_xcx/images/picture2.png",
          "text":"B.逻辑和明确"
        }
      },
      {
        "title": "2.下列哪一件事听起来比较吸引你？",
        "answerA": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture3.png",
          "text": "A.社交活动频繁的地方"
        },
        "answerB": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture4.png",
          "text": "B.有趣的录影带并享用你最喜欢的外卖食物"
        }
      },
      {
        "title": "3.你倾向通过以下哪种方式收集信息：",
        "answerA": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture5.png",
          "text": "A.你对有可能发生之事的想像和期望"
        },
        "answerB": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture6.png",
          "text": "B.你对目前状况的实际认知"
        }
      },
      {
        "title": "4.哪种特质更像你：",
        "answerA": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture7.png",
          "text": "A.友善而仁慈"
        },
        "answerB": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture8.png",
          "text": "B.冷静而理智"
        }
      },
      {
        "title": "5.当和某人分手时：",
        "answerA": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture9.png",
          "text": "A.情绪深陷其中，很难抽身出来"
        },
        "answerB": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture10.png",
          "text": "B.虽然觉得受伤，但一旦下定决心将会甩开过去"
        }
      },
      {
        "title": "6.当与一个人交往时，你倾向于看重：",
        "answerA": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture11.png",
          "text": "A.表达爱意和对另一半的需求很敏感"
        },
        "answerB": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture12.png",
          "text": "B.客观地讨论和辩论事情"
        }
      },
      {
        "title": "7.很多认识的人和很亲密的朋友。",
        "answerA": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture13.png",
          "text": "A.很多认识的人和很亲密的朋友"
        },
        "answerB": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture14.png",
          "text": "B.一些很亲密的朋友和一些认识的人"
        }
      },
      {
        "title": "8.过去，你的朋友倾向对你说：",
        "answerA": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture15.png",
          "text": "A.你难道不可以安静一会儿吗?"
        },
        "answerB": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture16.png",
          "text": "B.可以请你从你的世界中出来一下吗?"
        }
      },
      {
        "title": "9.当你对一个人放心时，你偏向谈论：",
        "answerA": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture17.png",
          "text": "A.未来，关于改进或发明的种种可能性。"
        },
        "answerB": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture18.png",
          "text": "B.实际的、具体的、关于“此时此地”的事物。"
        }
      },
      {
        "title": "10.你倾向相信：",
        "answerA": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture19.png",
          "text": "A.你的直觉。"
        },
        "answerB": {
          "src": "https://pic.gaodun.com/cfa_xcx/images/picture20.png",
          "text": "B.你直接的观察和现成的经验。"
        }
      }
    ]
  },
  choose:function(e){
    var _this=this;
    var index = e.currentTarget.dataset.index;
    if (e.currentTarget.dataset.ans=="A"){
      this.data.choosed[index].A="1";
      this.data.choosed[index].B="0";
      this.setData({
        choosed: this.data.choosed
      })
    } else if (e.currentTarget.dataset.ans == "B"){
      this.data.choosed[index].A = "0";
      this.data.choosed[index].B = "1";
      this.setData({
        choosed: this.data.choosed
      })
    }
    setTimeout(function(){   
      if (_this.data.current == _this.data.subject.length) {
        setTimeout(function () {
          wx.navigateTo({
            url: '/pages/complete/complete',
            success: function (res) {
              
            }
          })
        }, 500);
      }
      _this.data.current += 1;
      if (_this.data.current > _this.data.subject.length){
        _this.data.current = _this.data.subject.length
      }
      _this.setData({
        current: _this.data.current
      });
    }, 500);     
  } 
})