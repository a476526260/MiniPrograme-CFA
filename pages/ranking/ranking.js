// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    currenPage:1,   //当前页码
    count:6,        //每页显示条数
    totalPage:0,    //总页数
    minCount:0,
    maxCount:6,
    result:[
      {
        avatar:"https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName:"一头南瓜",
        testDetail:"适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      },
      {
        avatar: "https://pic.gaodun.com/cfa_xcx/images/avatar.jpg",
        nickName: "住在山阴路的姑娘",
        testDetail: "适合的专业是金融学，未来是投资银行家，年薪100万。"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      totalPage:Math.ceil(this.data.result.length / this.data.count)
    })
  },
  showNextPage:function(){
    this.data.currenPage++;
    if (this.data.currenPage>this.data.totalPage-1){
      this.data.currenPage=this.data.totalPage;
      this.setData({
        isShow:false
      })
    }
    this.setData({
      currenPage: this.data.currenPage,
      minCount: 0 + 6 * (this.data.currenPage-1),
      maxCount: 6+6*(this.data.currenPage-1)
    });

   
   
  }
})