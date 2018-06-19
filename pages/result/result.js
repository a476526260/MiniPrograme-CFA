// pages/result/result.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),   //用户信息按钮是否可用
    showGetInfor:false,     //是否显示获取信息弹出层
    showMask:false,         //是否显示遮罩层
    currentSwiper:0,        //swiper组件当前索引
    nickName:"",      //用户微信昵称
    avatarUrl: "",    //用户微信头像地址
    sex:0,      //1为男性，2为女性，0未知
    localPath:"",     //保存本地路径
    fromHistory:false,  //记录页面来源  ‘true--历史记录，false-开始测试’
    showCanvas:true,  //canvas是否可视
    professions: ["pro-1.png", "pro-2.png", "pro-3.png", "pro-4.png", "pro-5.png", "pro-6.png", "pro-7.png", "pro-8.png", "pro-9.png", "pro-10.png", "pro-11.png", "pro-12.png", "pro-13.png", "pro-14.png"],  //行业数据
    works: ["job-1.png", "job-2.png", "job-3.png", "job-4.png", "job-5.png", "job-6.png", "job-7.png", "job-8.png", "job-9.png", "job-10.png", "job-11.png", "job-12.png", "job-13.png", "job-14.png"],   //职业数据
    potential: [['potential-1-1.png', 'potential-1-2.png', 'potential-1-3.png'], ['potential-2-1.png', 'potential-2-2.png', 'potential-2-3.png'], ['potential-3-1.png', 'potential-3-2.png', 'potential-3-3.png'], ['potential-4-1.png', 'potential-4-2.png', 'potential-4-3.png'], ['potential-5-1.png', 'potential-5-2.png', 'potential-5-3.png'], ['potential-6-1.png', 'potential-6-2.png', 'potential-6-3.png'], ['potential-7-1.png', 'potential-7-2.png', 'potential-7-3.png'], ['potential-8-1.png', 'potential-8-2.png', 'potential-8-3.png'], ['potential-9-1.png', 'potential-9-2.png', 'potential-9-3.png'], ['potential-10-1.png', 'potential-10-2.png', 'potential-10-3.png'], ['potential-11-1.png', 'potential-11-2.png', 'potential-11-3.png'], ['potential-12-1.png', 'potential-12-2.png', 'potential-12-3.png'], ['potential-13-1.png', 'potential-13-2.png', 'potential-13-3.png'], ['potential-14-1.png', 'potential-14-2.png', 'potential-14-3.png']],       //潜力数据图
    yourProfession:'',    //专业
    yourWork:'',          //工作
    yourPotenial:'',
    windowWidth:0,    //保存屏幕可用宽度
    windowHeight:0,   //保存屏幕可用高度
    screenWidth: 0,   //保存屏幕宽度
    screenHeight: 0,  //保存屏幕高度
    nextButtonShow:true,      //下一页按钮是否显示
    showTipImage:false,    //分享提示图片
    showfetureDetail:false,   //是否打开未来层
    clickedIndex:0,    //记录被点击车，伴侣，房子，城市索引
    fetureButtons: ["feture1.png", "feture2.png", "feture3.png","feture4.png"],    //未来标题图片名
    titleSrc: "",   //弹出层对应标题地址
    carName:"",     //车名
    carDetail:"",   //车相关信息
    carImage:"",    //车相关图片
    partnerTxt:"",  //伴侣星座介绍
    male:"",        //男明星
    maleSrc:"",     //男明星图片
    female:"",      //女明星
    femaleSrc:"",   //女明星图片
    houseName:"",   //未来房子
    houseImages:[], //未来房子图片  
    cityName:"",    //城市名
    cityImage:"",   //城市图片
    cityDescrible:"", //城市介绍
    shareTitle: ['在吗，这是我们的车子……', '原来，这是我的伴侣……', '意外，我要去这个城市……','在吗，这是我们的车子……'],
    fetureData:[    //用户‘未来’数据
      {
        title:"title1.png",
        detail:[
          {
            src:'https://pic.gaodun.com/cfa_xcx/images/car-1.jpg',
            name:'宝马7系',
            detail:'89.00 - 266.80万,宝马7系是宝马公司顶级的豪华轿车系列，车身形式为4门轿车，驱动形式为前置后驱。宝马7系是宝马汽车的旗舰车型，而且只有轿车形式。只在德国本土生产，生产商为BMW，在1977年取代了上代车型 BMW '
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-2.jpg',
            name: '奔驰S级',
            detail: '93.80 - 199.80万,奔驰S级轿车是德国戴姆勒集团旗下品牌梅赛德斯-奔驰推出的顶级豪华车 [1-2]  。其上承梅赛德斯-奔驰百多年来的精湛造车艺术，下启源源不绝的科技革新，在安全性、汽车工程和环境保护方面，具备了超过三十多种先进的增强性设备，是令人信赖的优秀座驾。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-3.jpg',
            name: '保时捷Panamera',
            detail: '108.80 - 233.80万,采用了四门设计，前脸两侧各有一个大型进气口，水平条式雾灯横穿其中，造型独特。侧身线面处理得简洁柔和，既优雅又动感，巨大的五辐式轮彀搭配了黑色的刹车卡钳，暗示出不俗的运动潜能。与其它保时捷车型一样，新Panamera的内部结构采用了传统的钢制承载式车身结构。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-4.jpg',
            name: '奥迪A8',
            detail: '87.98 - 256.80万,奥迪A8是奥迪车系中最高档的豪华车，市场定位是用以跟奔驰S级和宝马7系竞争的。奥迪A8率先使用了全铝车身，不仅坚固耐用，而且减轻了车身重量，为汽车带来更加强劲的性能表现。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-5.jpg',
            name: '劳斯莱斯幻影',
            detail: '688.00 - 800.80万,劳斯莱斯幻影（Rolls-Royce Phantom）是劳斯莱斯被宝马（BMW）收购后推出的第一个产品，通过铝的使用，庞大的车身还不到2.5吨重，再加上6.7升V12发动机与六速自动变速箱的通力合作，幻影0-100Km/h的加速不到6秒，出于对安全的考虑最高时速被限制在240Km/h。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-6.jpg',
            name: '保时捷911',
            detail: '130.67 - 410.66万,从1963年诞生以来，共经历了七代车型，因其独特的风格与极佳的耐用性享誉世界，保时捷911系列是整个保时捷乃至于整个德国整个世界最传奇的车型之一，同时也是中后置引擎跑车的代表作之一。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-7.jpg',
            name: '奔驰CLS级',
            detail: '69.80 - 98.80万,奔驰CLS级是德国戴姆勒集团旗下品牌梅赛德斯 [1]  -奔驰在2004年第74届日内瓦车展上展出的一款全新的跑车车系，奔驰CLS级拥有稳定的安全性能和高端的内饰。这种新的4门轿车将双门轿跑车的经典比例，具有感染力的外表以及豪华轿车的舒适以及功能性完美的结合在一起。完美继承奔驰车一贯的风采。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-8.jpg',
            name: 'Mustang',
            detail: '39.68 - 70.50万,福特野马采用了大胆设计理念，简洁而现代的风格，是美国历史上大马力轿车的骄子。它的设计植根于对历史传统不折不扣的传承，因而才诞生了偶像级的、更具时代感的野马。它毫不客气地把传统的竞争者甩到了身后。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-9.jpg',
            name: '宾利欧陆',
            detail: '288.00 - 459.80万,设计最高时速329km/h，前置四驱驱动，车身重量在2475~2940千克，座位材质采用小牛皮。以其独有的性能表现建立起自己的品牌，这种传统一直延续到现在。它深深地渗透到汽车的手工艺设计当中，宾利的绝妙之处仍是大扭矩小转速以及豪华、奢侈、放松、自如的感觉。宾利除了与劳斯莱斯一样，具有巧夺天工的造车工艺及完美无瑕的品质外，重要的区别是宾利代表着优良的赛车传统。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-10.jpg',
            name: '保时捷911',
            detail: '保时捷718是保时捷 [1]  公司的入门级跑车。分别有运动跑车保时捷Cayman和敞篷跑车保时捷Boxster两个款式。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-11.jpg',
            name: '日产370Z',
            detail: '52.50 - 64.50万,新款370Z采用了VQ37VHR动力传动系——一款3.7升的V6发动机，可输出332马力的动力，且在高速路上可达26 mpg的燃油经济性。332马力的动力将通过一个7速的自动变速箱或一个6速的手动变速箱被传输到370Z的后轮上。更加引人关注的是，6速的370Z是第一款配备手动变速箱且提供同步调低速档转速匹配系统的汽车, 而且从0-100千米加速只需4.8秒！'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-12.jpg',
            name: '法拉利458',
            detail: '388.00 - 448.00万,法拉利458 Italia是一款中后置8缸双门跑车，在2009年法兰克福车展上推出，标志着法拉利（Ferrari）在其原有中后置发动机跑车的基础上实现了重大飞跃。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-13.jpg',
            name: '捷豹F-TYPE',
            detail: '59.80 - 203.80万,F-TYPE 是捷豹超过75年运动血统的延续，是有史以来最美、最震撼、最性感的跑车。全新F-TYPE [1]  的亮相象征着捷豹向原有核心领域的回归：打造高性能、高灵活性、非凡驾驶体验的双座敞篷跑车。F-TYPE 的设计理念集中体现在业界领先的捷豹铝应用技术上。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-14.jpg',
            name: 'California',
            detail: '308.80万,法拉利California是一款豪华旅行跑车，2008年在巴黎汽车展上首次亮相，是有史以来第一款采用中前置V8发动机、第一款采用折叠硬顶敞篷的法拉利GT跑车，可以在3.9秒完成0-100km/h的冲刺，最高时速可达310km/h。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-15.jpg',
            name: '阿斯顿·马丁DB9',
            detail: '338.88 - 438.00万,阿斯顿·马丁在2003年发布DB9替代DB7，标志着这个英国传奇超级跑车品牌的复兴。这款在阿斯顿·马丁总部英国盖登生产的豪华GT跑车采用了高刚性的轻质铝合金车身，DB9上市后立即获得空前成功，为阿斯顿·马丁的发展奠定了坚实的基础。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-16.jpg',
            name: '奔驰SLK级',
            detail: '58.80 - 89.80万,奔驰SLK级修长的汽车引擎罩盖，长长的底盘和精巧的车尾之完美结合，缔结出跑车的基本条件。由0公里开始，奔驰SLK散发着无穷令人兴奋的原素。即使恬静乖巧地停泊在旁，SLK的魅力也能令人感到震奋，脉搏跳动。奔驰SLK并不止于基本条件，它具备更优越的品质：按键后，一辆跑车瞬间就转身成适合任何天气的轿跑车。是适合365日驾驶外出的最佳良伴。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-17.jpg',
            name: '迈巴赫S级',
            detail: '149-309w,奔驰SLK级修长的汽车引擎罩盖，长长的底盘和精巧的车尾之完美结合，缔结出跑车的基本条件。由0公里开始，奔驰SLK散发着无穷令人兴奋的原素。即使恬静乖巧地停泊在旁，SLK的魅力也能令人感到震奋，脉搏跳动。奔驰SLK并不止于基本条件，它具备更优越的品质：按键后，一辆跑车瞬间就转身成适合任何天气的轿跑车。是适合365日驾驶外出的最佳良伴。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-18.jpg',
            name: '红旗L5',
            detail: '500w,红旗L5前脸的设计源自2009年国庆检阅车CA7600J，外观设计大气端庄，圆形的前大灯和前部流线型红旗立标是红旗汽车十分经典的设计元素。红旗L5凭借其超过500万的售价，顶着“自主劳斯莱斯”的名头，该车已经作为中国外交礼宾用车，出现在许多重大外交场合。'
          },
          {
            src: 'https://pic.gaodun.com/cfa_xcx/images/car-19.jpg',
            name: '特斯拉',
            detail: 'MODEL X,2012年2月9日，美国Tesla Motors公司发布了全尺寸纯电动SUV车型Model X [1]  ，其后门采用设计前卫的鹰翼门造型，而依靠动力强劲的电动机驱动，其0-96公里/小时加速时间为5秒内。 这款全尺寸纯电动SUV将会在2014年量产。'
          }
        ]
      },
      {
        title: "title2.png",
        detail:[
          {
            "star": "白羊座，有一种让人看见就觉得开心的感觉，因为总是看起来都是那么地热情、阳光、乐观、坚强，对朋友也慷概大方，性格直来直往，就是有点小脾气。白羊男有大男人主义的性格，而白羊女就是女汉子的形象。",
            "male": "男明星：吴世勋",
            "maleSrc":"https://pic.gaodun.com/cfa_xcx/images/star-1-m.jpg",
            "female": "女明星：郑秀妍",
            "femaleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-1-f.jpg"
          },
          {
            "star": "金牛座，喜欢稳定，一旦有什么变动就会觉得心里不踏实，性格也比较慢热，但你是理财高手，对于投资理财都有着独特的见解。金牛男的性格有点儿自我，而金牛女就喜欢投资自己，想要过得更好。",
            "male": "男明星：李易峰",
            "maleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-2-m.jpg",
            "female": "女明星：奥黛丽 赫本",
            "femaleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-2-f.jpg"
          },
          {
            "star": "双子座，喜欢追求新鲜感，有点儿小聪明，就是耐心不够，往往做事都是三分钟热度，难以坚持，但是你的可爱性格会让很多人都喜欢跟你做朋友。双子男表面很花心，其实深情，而双子女就喜欢求新和求变。",
            "male": "男明星：周渝民",
            "maleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-3-m.jpg",
            "female": "女明星：林允儿",
            "femaleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-3-f.jpg"
          },
          {
            "star": "巨蟹座，情绪容易敏感，也缺乏安全感，容易对一件事情上心，做事情有坚持到底的毅力，为人重情重义，对朋友、家人都特别忠实，巨蟹男是一等一的好男人，顾家爱家人，巨蟹女充满母性光环，非常有爱心。",
            "male": "男明星：梁朝伟",
            "maleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-4-m.jpg",
            "female": "女明星：景甜",
            "femaleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-4-f.jpg"
          },
          {
            "star": "狮子座，有着宏伟的理想，总想靠自己的努力成为人上人，你向往高高在上的优越感，也期待被仰慕被崇拜的感觉，有点儿自信有点儿自大。狮子男的大男人气息很重，爱面子，狮子女热情阳光，对朋友讲义气。",
            "male": "男明星：罗志祥",
            "maleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-5-m.jpg",
            "female": "女明星：郑爽",
            "femaleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-5-f.jpg"
          },
          {
            "star": "处女座，虽然常常被黑，但你还是依然坚持追求自己的完美主义，因为在你看来，生活不能将就，追求的完美更不能将就，有目标才有进步，当然也需要鼓励。处女男的毅力很强，能坚持，处女女的求知欲很强。",
            "male": "男明星：王俊凯",
            "maleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-6-m.jpg",
            "female": "女明星：刘亦菲",
            "femaleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-6-f.jpg"
          },
          {
            "star": "天秤座，常常追求平等、和谐，擅于察言观色，交际能力很强，因此真心朋友不少，因为你也足够真诚，但是最大的缺点就是面对选择总是犹豫不决。天秤男容易在乎自己而忽略别人，天秤女就喜欢被陪伴的感觉。",
            "male": "男明星：赵又廷",
            "maleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-7-m.jpg",
            "female": "女明星：赵丽颖",
            "femaleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-7-f.jpg"
          },
          {
            "star": "天蝎座，精力旺盛、占有欲极强，对于生活很有目标，不达到目的誓不罢休，复仇心理重，记仇会让自己不顾一切报复曾经伤害过你的人。天蝎男自我主义色彩很强烈，天蝎女的自我保护意识很强，不容易接近。",
            "male": "男明星：陈伟霆",
            "maleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-8-m.jpg",
            "female": "女明星：全智贤",
            "femaleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-8-f.jpg"
          },
          {
            "star": "射手座，崇尚自由，勇敢、果断、独立，身上有一股勇往直前的劲儿，不管有多困难，只要想，就能做，你的毅力和自信是难以击倒的。射手男酷爱自由，讨厌被束缚，射手女性格简单直接，不耍心计，可是任性。",
            "male": "男明星：霍建华",
            "maleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-9-m.jpg",
            "female": "女明星：唐嫣",
            "femaleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-9-f.jpg"
          },
          {
            "star": "摩羯座，有耐心，为事最小心、也是最善良的星座。他们做事脚踏实地，也比较固执，不达目的是不会放手的。他们的忍耐力也是出奇的强大，同时也非常勤奋。他们心中总是背负着很多的责任感",
            "male": "男明星：周杰伦",
            "maleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-10-m.jpg",
            "female": "女明星：周冬雨",
            "femaleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-10-f.jpg"
          },
          {
            "star": "水瓶座，很聪明，他们最大的特点是创新，追求独一无二的生活，个人主义色彩很浓重的星座。他们对人友善又注重隐私。水瓶座绝对算得上是”友谊之星“，他喜欢结交每一类朋友，但是确很难与他们交心",
            "male": "男明星：韩庚",
            "maleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-11-m.jpg",
            "female": "女明星：钟欣桐",
            "femaleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-11-f.jpg"
          },
          {
            "star": "双鱼座，他集合了所有星座的优缺点于一身，同时受水象星座的情绪化影响，使他们原来复杂的性格又添加了更复杂的一笔。双鱼座的人最大的优点是有一颗善良的心，他们愿意帮助别人。",
            "male": "男明星：张艺兴",
            "maleSrc": "https://pic.gaodun.com/cfa_xcx/images/star-12-m.jpg",
            "female": "女明星：刘诗诗",
            "femaleSrc":"https://pic.gaodun.com/cfa_xcx/images/star-12-f.jpg"
          }
        ]
      },
      {
        title: "title3.png",
        detail:[
          {
            "houseName":"苏州桃花源",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-1-1.jpg']
          },
          {
            "houseName": "汤臣一品",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-2-1.jpg']
          },
          {
            "houseName": "星海湾壹号",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-3-1.jpg']
          },
          {
            "houseName": "滨江凯旋门",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-4-1.jpg']
          },
          {
            "houseName": "盘古大观",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-5-1.jpg']
          },
          {
            "houseName": "绿城玫瑰园",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-6-1.jpg']
          },
          {
            "houseName": "天琴湾",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-7-1.jpg']
          },
          {
            "houseName": "东部华侨城天麓",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-8-1.jpg']
          },
          {
            "houseName": "龙湖牙颐和原著",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-9-1.jpg']
          },
          {
            "houseName": "霞公府",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-10-1.jpg']
          },
          {
            "houseName": "美国中央公园西街公寓",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-11-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-11-2.jpg']
          },
          {
            "houseName": "拉·阿密提豪宅",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-12-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-12-2.jpg']
          },
          {
            "houseName": "美国内华达州的莎士比亚牧场",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-13-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-13-2.jpg']
          },
          {
            "houseName": "美国洛杉矶“鸢尾花豪宅”",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-14-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-14-2.jpg']
          },
          {
            "houseName": "美国华盛顿州 “Xanadu 2.0”",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-15-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-15-2.jpg']
          },
          {
            "houseName": "比佛利山庄“比佛利豪宅”",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-16-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-16-2.jpg']
          },
          {
            "houseName": "史别林庄园",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-17-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-17-2.jpg']
          },
          {
            "houseName": "美国东汉普顿“牧羊人克雷奇豪宅”",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-18-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-18-2.jpg']
          },
          {
            "houseName": "美国加州“赫氏古堡”",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-19-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-19-2.jpg']
          },
          {
            "houseName": "美国加州“爱天堂”",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-20-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-20-2.jpg']
          },
          {
            "houseName": "伦敦“大厦公寓”",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-21-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-21-2.jpg']
          },
          {
            "houseName": "美国纽约汉普顿“费尔菲尔德”",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-22-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-22-2.jpg']
          },
          {
            "houseName": "摩纳哥“豪华公寓”",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-23-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-23-2.jpg']
          },
          {
            "houseName": "法国蓝色海岸“利奥波德别墅”",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-24-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-24-2.jpg']
          },
          {
            "houseName": "印度孟买“安提列亚大厦”",
            "houseImageArr": ['https://pic.gaodun.com/cfa_xcx/images/house-25-1.jpg', 'https://pic.gaodun.com/cfa_xcx/images/house-25-2.jpg']
          }
          
        ]
      },
      {
        title: "title4.png",
        detail:[
          {
            "cityName":"维也纳",
            "cityImage":"https://pic.gaodun.com/cfa_xcx/images/city-1.jpg",
            "cityDescrible":"奥地利最大的城市，也被称作“世界音乐之都”，这里天才涌现，名家辈出，像贝多芬、莫扎特、斯特劳斯等音乐大师都是出生在这里。在“蓝色”多瑙河畔，一边欣赏城市美景，一边聆听经典旋律，与这位“多瑙河女神”进行一次心灵对话，实为一种享受。维也纳是美食家的天堂，在这里，游人可以品尝来自各个国家的不同风味的美食。"
          },
          {
            "cityName": "苏黎世",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-2.jpg",
            "cityDescrible": "瑞士的最大城市，也是瑞士主要的商业和文化中心。苏黎世是瑞士银行业的代表城市，世界金融中心之一，瑞士联合银行、瑞士信贷银行和许多私人银行都将总部设在苏黎世。国际足球联合会总部也设在苏黎世。 苏黎世是全欧洲最富裕的城市，坐落在苏黎世湖北岸，阿尔卑斯山的脚下。苏黎世湖畔和利马特河沿岸绿树成荫，因此苏黎世又被誉为“花园城市”"
          },
          {
            "cityName":"奥克兰",
            "cityImage":"https://pic.gaodun.com/cfa_xcx/images/city-3.jpg",
            "cityDescrible":"位于新西兰北岛，依海而建，景色优美，是新西兰第一大城市。奥克兰四周被海洋和火山围绕，有美丽的港湾和壮观的大桥，同时也吸引了世界各国的帆船爱好者，奥克兰是全世界拥有私人船只比率最高的城市，有“帆船之都”的美誉，每年1月的帆船竞赛场面十分壮观。"
          },
          {
            "cityName": "慕尼黑",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-4.jpg",
            "cityDescrible": "德国巴伐利亚州的首府，是德国南部第一大城，全德国第三大城市。这里既有梦幻之车-宝马，也有梦幻的城堡-新天鹅堡。一年一度的啤酒节更让整个城市都沉浸在欢乐的气氛中，并且这种欢乐和自由的氛围已经成为吸引世界各地旅游者的一个重要因素。"
          },
          {
            "cityName": "温哥华市",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-5.jpg",
            "cityDescrible": "加拿大第三大面积城市及最大港口城市。这里全年气候温和，拥有多元的文化与拥有很强包容性的人民。在2006年的世界最佳居住城市评选中温哥华为全球第三位。"
          },
          {
            "cityName": "杜塞尔多夫",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-6.jpg",
            "cityDescrible": "德国北莱茵-威斯特法伦的州首府。这里是欧洲最大的日本人聚居地，还是19世纪德国诗人海因里希•海涅的出生地。 豪华的购物林荫大道国王大道、位于传媒港的格里建筑群、聚集了260家小酒馆和餐馆，并以老啤而闻名的老城、一流的博物馆、剧院、音乐厅和美术馆使杜塞尔多夫成为一座国际性的艺术和文化大都会。"
          },
          {
            "cityName": "日内瓦",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-7.jpg",
            "cityDescrible": "瑞士第二大城市，位于日内瓦湖西南角，湖上的大喷泉就是日内瓦的象征。它以其深厚的人道主义传统，多彩多姿的文化活动、重大的会议和展览会、令人垂涎的美食、清新的市郊风景及众多的游览项目和体育设施而闻名世界。"
          },
          {
            "cityName": "哥本哈根",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-8.jpg",
            "cityDescrible": "位于丹麦西兰岛东北部。哥本哈根是斯堪的纳维亚国家中最大、最具活力的城市。哥本哈根是旅游和娱乐的天堂，公园、喷泉遍布城市各个角落。哥本哈根共有二十多个可供人们参观的博物馆和十多个大大小小的公园。其中最美丽的要数哥本哈根朗厄里尼港湾畔的海滨公园，因为在那里的一块巨大的岩石上，有一尊世界闻名的“美人鱼”铜像。"
          },
          {
            "cityName": "巴塞尔",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-9.jpg",
            "cityDescrible": "瑞士第三大城市，坐落于瑞士西北的三国交角，西北邻法国阿尔萨斯，东北与德国南北走向的黑森林山脉接壤，是连接法国、德国和瑞士的最重要交通枢纽，三个国家的高速公路也在此交汇。莱茵河在此东注北涌穿城而去，将巴塞尔一分为二，版图较大的位于西岸，被称为大巴塞尔区(Grossbasel)，是经济商业及消闲购物中心；小巴塞尔区则位于东岸(Kleinbasel)，主要是花店、画室、工艺坊、和一些咖啡厅。"
          },
          {
            "cityName": "悉尼",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-10.jpg",
            "cityDescrible": "澳大利亚的发源地,是如今大洋洲最大的城市，空间、阳光、自由是悉尼给人最深刻的印象。这里有绝佳的水景可供欣赏，只需短短的车程就可以从城市的喧嚣中逃脱。 悉尼的最大特点是它的气候及自然环境，北有碧水及毫克斯贝利河，环绕着南部城市的有植物港及其它海口。"
          },
          {
            "cityName": "上海",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-11.jpg",
            "cityDescrible": "上海最美丽的地方，首屈一指的就是外滩。外滩，北起中山东一路最北端的外白渡桥，南至金陵东路延安东路。西侧的52幢风格各异的大厦具有“万国建筑博览群”之美誉。"
          },
          {
            "cityName": "北京",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-12.jpg",
            "cityDescrible": "北京是首批国家历史文化名城和世界上拥有世界文化遗产数最多的城市，三千多年的历史孕育了故宫、天坛、八达岭长城、颐和园等众多名胜古迹。早在七十万年前，北京周口店地区就出现了原始人群部落“北京人”。公元前1045年，北京成为蓟、燕等诸侯国的都城。公元938年以来，北京先后成为辽陪都、金中都、元大都、明、清国都。1949年10月1日成为中华人民共和国首都。"
          },
          {
            "cityName": "深圳",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-13.jpg",
            "cityDescrible": "深圳，是个现代化的城市，街头巷尾霓虹闪烁，无不显示着高科技的魅力。可深圳也不缺乏秀丽的风景。瞧，在清澈见底的深圳湾旁，就有一座魅力十足的深圳湾公园，临湾而筑，煞是漂亮。"
          },
          {
            "cityName": "广州",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-14.jpg",
            "cityDescrible": "广州是国家历史文化名城，从秦朝开始，广州一直是郡治、州治、府治的行政中心；一直是华南地区的政治、军事、经济、文化和科教中心，是岭南文化的发源地和兴盛地。广州从3世纪30年代起成为海上丝绸之路的主港，唐宋时期成为中国第一大港，是世界著名的东方港市；明清时期是中国唯一的对外贸易大港，是世界上唯一2000多年长盛不衰的大港。"
          },
          {
            "cityName": "罗马",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-15.jpg",
            "cityDescrible": "意大利首都、第一大城。位于台伯河下游平原，东距第勒尼安海25公里。市区跨台伯河两岸，架有桥梁24座。全国政治、经济、文化和交通中心。罗马气候温暖，四季鲜明，春季正是一年中最适合出游的季节。主要景点： 西班牙广场 、万神殿、大圆型竞技场。"
          },
          {
            "cityName": "曼谷",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-16.jpg",
            "cityDescrible": "泰国首都和最大城市，别名“天使之城”，位于昭披耶河东岸，南临暹罗湾，中南半岛最大城市，东南亚第二大城市，为泰国政治、经济、贸易、交通、文化、科技、教育、宗教与各方面中心。主要景点：大城、大王宫、四面佛、卧佛寺、四面佛。"
          },
          {
            "cityName": "纽约",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-17.jpg",
            "cityDescrible": "美国最大都市及第一大港，也是世界第五大都市，位于美国东海岸北部，纽约州东南部。纽约是世界最著名城市之一、是国际经济、金融、艺术、传媒之都、联合国总部所在地。纽约市还是众多世界级博物馆、画廊和演艺比赛场地的所在地，使其成为西半球的文化及娱乐中心之一。主要景点：中央公园、自由女神像、帝国大厦、自由女神像。"
          },
          {
            "cityName": "佛罗伦萨",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-18.jpg",
            "cityDescrible": "意大利中部的一个城市，托斯卡纳区首府。位于亚平宁山脉中段西麓盆地中。阿诺河横贯市内，两岸跨有7座桥梁。十五至十六世纪时佛罗伦萨是欧洲最著名的艺术中心，以美术工艺品和纺织品驰名全欧。工业以玻璃器皿、陶瓷、高级服装、皮革为主。金银加工、艺术复制品等工艺品亦很有名。主要景点：米开朗基罗广场、大教堂美术馆、乌费兹美术馆。"
          },
          {
            "cityName": "布宜诺斯艾利斯",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-19.jpg",
            "cityDescrible": "有“南美小巴黎”之称，市内很多街道和建筑有欧洲风格。这里的主要景点：３个广场（圣马丁广场、国会广场和五月广场）、一条街（佛罗里达商业步行街）、贵族公墓（安葬着庇隆夫人遗体）和探戈的发源地“小街”。"
          },
          {
            "cityName": "开普敦",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-20.jpg",
            "cityDescrible": "南非第二大城市和重要港口，立法机关所在地，开普敦省首府。城市背山面海，风光绮丽，文物众多，旅游业兴盛，工商业发达。城市有著名的开普敦大学、南非博物馆等。主要景点：好望角、罗宾岛、绿市广场。"
          },
          {
            "cityName": "旧金山",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-21.jpg",
            "cityDescrible": "华人称为三藩市。位于美国加利福尼亚州西海岸圣弗朗西斯科半岛，面积47平方英里，三面环水，环境优美，是一座山城。气候冬暖夏凉，阳光充足，被誉为“最受美国人欢迎的城市”。主要景点：唐人街、联合广场、渔人码头、九曲花街、北滩、硅谷、金门大桥。"
          },
          {
            "cityName": "伊斯坦布尔",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-22.jpg",
            "cityDescrible": "地跨欧亚两洲的伊斯坦布尔，是土耳其最大的城市、最大的港口、工商业中心和主要的旅游胜地。主要景点：托普卡普宫殿、金角湾、圣索非亚大教堂。"
          },
          {
            "cityName": "乌代布尔",
            "cityImage": "https://pic.gaodun.com/cfa_xcx/images/city-23.jpg",
            "cityDescrible": "印度拉贾斯坦邦最浪漫的城市，建于漂亮的皮秋拉湖，有东方威尼斯之称。本市由统治者乌代辛格于1568年建造，刷得雪白的建筑物、大理石宫殿、湖畔花园、庙宇和传统住宅，构成一种融和的印度调子。主要景点：乌代布尔城市王宫、皮丘拉湖、加各狄许神庙、哈飞立博物馆。"
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    //获取用户设备信息，屏幕宽度
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
          screenWidth: res.screenWidth,
          screenHeight: res.screenHeight,
        }) 
      }
    });
    
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (data) {
              _this.setData({
                showMask: false,
                showGetInfor: false,
                nickName: data.userInfo.nickName,
                avatarUrl: data.userInfo.avatarUrl,
                sex: data.userInfo.gender  
              })
            }
          })
        } else {
          _this.setData({
            showMask: true,
            showGetInfor: true
          })
        }
      }
    });
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
  onShow:function(){
    wx.setStorage({
      key: "hasHistory",
      data: "Y"
    })
  },
  onReady:function(){
    var _this=this; 
    _this.setData({
      fromHistory: app.globalData.fromHistory
    });
    var index, potentialRand
    if(_this.data.fromHistory){
        //如果页面来源为历史记录则直接获取页面缓存数据
        index = Number(wx.getStorageSync('message'));
        potentialRand = Number(wx.getStorageSync('potentialRand'));
    }else{
      //页面来源为开始测试
      var rand = this.random(10, 0); //用于计算概率
      if (rand < 6) {
        index = 0;
      } else {
        index = this.random(this.data.professions.length - 1, 1);
      };
      potentialRand = this.random(this.data.potential[index].length - 1, 0);
      wx.setStorageSync('message', index);
      wx.setStorageSync('potentialRand', potentialRand);
    }
    this.setData({
      yourProfession: '../../images/' + this.data.professions[index],
      yourWork: '../../images/' + this.data.works[index],
      yourPotenial: '../../images/' + this.data.potential[index][potentialRand]
    })
  },
  //分享
  onShareAppMessage: function (reData) {
    var _this=this;
    if (reData.from === 'button') {
      console.log(reData)
    }
    return {
      title: _this.data.shareTitle[reData.target.dataset.index],
      path: "/pages/index/index",
      imageUrl: "https://pic.gaodun.com/cfa_xcx/images/shareImage.jpg",
      success: function (res) {  
       
        if (res.shareTickets) {
          wx.getShareInfo({
            shareTicket: res.shareTickets[0],
            success: function (res) {
              _this.showYourFeture(reData.target);  
            },
            fail: function (res) {
              console.log(res)
            }
          })
        }else{
          wx.showToast({
            icon: "none",
            title: '请分享到群里面哦！',
          })
        }
      },
      fail: function (res) {
        console.log(res + "fail");
      }
    }
  },
  toggleMask:function(){
    var _this=this;
    _this.data.showMask = !_this.data.showMask;
    _this.data.showTipImage = !_this.data.showTipImage;
    _this.setData({
      showMask: false,
      showfetureDetail: false,
      showTipImage: false
    })
  },
  showYourFeture:function(obj){
    var _this=this;
    var index = obj.dataset.index;
    this.setData({
      showfetureDetail: true,
      showMask: !_this.data.showMask,
      clickedIndex:index,
      titleSrc: "https://pic.gaodun.com/cfa_xcx/images/" + _this.data.fetureData[index].title,   
    });
    
    switch(index){
      case 0:
        //车子
        if (_this.data.fromHistory){
          var carRandNum = Number(wx.getStorageSync("carRandNum"));
          this.setData({
            carName: _this.data.fetureData[index].detail[carRandNum].name,
            carDetail: _this.data.fetureData[index].detail[carRandNum].detail,
            carImage: _this.data.fetureData[index].detail[carRandNum].src
          });
        }else{
          var rand = _this.random(_this.data.fetureData[index].detail.length - 1, 0);
          this.setData({
            carName: _this.data.fetureData[index].detail[rand].name,
            carDetail: _this.data.fetureData[index].detail[rand].detail,
            carImage: _this.data.fetureData[index].detail[rand].src
          });
          wx.setStorageSync("carRandNum", rand);
        }
        break;
       case 1: 
       //伴侣
        if (_this.data.fromHistory) {
          var partnerRandNum = Number(wx.getStorageSync("partnerRandNum"));
          if (Number(_this.data.sex) == 1) {
            //男性
            this.setData({
              partnerTxt: _this.data.fetureData[index].detail[partnerRandNum].star,
              male: "",
              maleSrc: "",
              female: _this.data.fetureData[index].detail[partnerRandNum].female,
              femaleSrc: _this.data.fetureData[index].detail[partnerRandNum].femaleSrc
            });
            console.log(_this.data.female)
          } else if (Number(_this.data.sex) == 2) {
            //女性
            this.setData({
              partnerTxt: _this.data.fetureData[index].detail[partnerRandNum].star,
              male: _this.data.fetureData[index].detail[partnerRandNum].male,
              maleSrc: _this.data.fetureData[index].detail[partnerRandNum].maleSrc,
              female: "",
              femaleSrc: ""
            });
          } else {
            //性别未知
            this.setData({
              partnerTxt: _this.data.fetureData[index].detail[partnerRandNum].star,
              male: _this.data.fetureData[index].detail[partnerRandNum].male,
              maleSrc: _this.data.fetureData[index].detail[partnerRandNum].maleSrc,
              female: _this.data.fetureData[index].detail[partnerRandNum].female,
              femaleSrc: _this.data.fetureData[index].detail[partnerRandNum].femaleSrc
            });
          }
        }else{
          var rand = _this.random(_this.data.fetureData[index].detail.length - 1, 0);
          if (Number(_this.data.sex)==1){
            //男性
            _this.setData({
              partnerTxt: _this.data.fetureData[index].detail[rand].star,
              male: "",
              maleSrc: "",
              female: _this.data.fetureData[index].detail[rand].female,
              femaleSrc: _this.data.fetureData[index].detail[rand].femaleSrc
            });
          } else if (Number(_this.data.sex)==2){
            //女性
            this.setData({
              partnerTxt: _this.data.fetureData[index].detail[rand].star,
              male: _this.data.fetureData[index].detail[rand].male,
              maleSrc: _this.data.fetureData[index].detail[rand].maleSrc,
              female: "",
              femaleSrc: ""
            });
          }else{
            //性别未知
            this.setData({
              partnerTxt: _this.data.fetureData[index].detail[rand].star,
              male: _this.data.fetureData[index].detail[rand].male,
              maleSrc: _this.data.fetureData[index].detail[rand].maleSrc,
              female: _this.data.fetureData[index].detail[rand].female,
              femaleSrc: _this.data.fetureData[index].detail[rand].femaleSrc
            });
          }

          
          wx.setStorageSync("partnerRandNum", rand);
        }   
        break;
       case 2:
        //房子
        if (_this.data.fromHistory) {
          var houseRandNum = Number(wx.getStorageSync("houseRandNum"));
          this.setData({
            houseName: _this.data.fetureData[index].detail[houseRandNum].houseName,
            houseImages: _this.data.fetureData[index].detail[houseRandNum].houseImageArr
          });
        } else {
          var rand = _this.random(_this.data.fetureData[index].detail.length - 1, 0);
          this.setData({
            houseName: _this.data.fetureData[index].detail[rand].houseName,
            houseImages: _this.data.fetureData[index].detail[rand].houseImageArr
          });
          wx.setStorageSync("houseRandNum", rand);
        };
        break;
       case 3:
        //城市
        if (_this.data.fromHistory) {
          var cityRandNum = Number(wx.getStorageSync("cityRandNum"));
          this.setData({
            cityName: _this.data.fetureData[index].detail[cityRandNum].cityName,
            cityImage: _this.data.fetureData[index].detail[cityRandNum].cityImage,
            cityDescrible: _this.data.fetureData[index].detail[cityRandNum].cityDescrible
          });
        } else {
          var rand = _this.random(_this.data.fetureData[index].detail.length - 1, 0);        
          this.setData({
            cityName: _this.data.fetureData[index].detail[rand].cityName,
            cityImage: _this.data.fetureData[index].detail[rand].cityImage,
            cityDescrible: _this.data.fetureData[index].detail[rand].cityDescrible
          });
          wx.setStorageSync("cityRandNum", rand);
        };
        break;
    }
  },
  showNextPage:function(){
    this.setData({
      nextButtonShow:false,
      currentSwiper:1
    })
  },
  swiperChange:function(e){
    var current = e.detail.current;
    this.setData({
      currentSwiper: current
    });
    if(current==1){
      this.setData({
        nextButtonShow: false
      });
    }else{
      this.setData({
        nextButtonShow: true
      });
    }
  },
  closeFeture:function(){
    this.setData({
      showfetureDetail:false,
      showMask:false
    })
  },
  random:function(max,min){
    //生成随机数
    return parseInt(Math.random() * (max - min+1)+min)
  },
  saveImage:function(){
    var _this=this;
    //获取相册权限
    wx.getSetting({
      success:function(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success:function() {
              _this.createImage();
            }
          })
        }else{
          _this.createImage();
        }
      }
    });
  },
  createImage:function(){
    wx.showToast({
      title: '图片正在生成',
    })
    var _this = this;
    var ctx = wx.createCanvasContext('saveImage');
    var unit = _this.data.windowWidth / 375;
    if (_this.data.avatarUrl===''){
      //如果用户未上传头像
      
      //绘制背景
      ctx.drawImage('../../images/saveImage-bj.jpg', 0, 0, _this.data.windowWidth, _this.data.windowHeight);
      //绘制胶布
      ctx.drawImage("../../images/adhesive1.png", 118 * unit, 56 * unit, 42.5 * unit, 43 * unit)
      ctx.drawImage("../../images/adhesive2.png", 35 * unit, 167 * unit, 32.5 * unit, 33 * unit)
      ////利用canvas写入昵称
      var name = _this.data.nickName || "";
      ctx.font = 'italic bold 18px sans-serif';
      ctx.setFontSize(18 * unit);
      ctx.setFillStyle("#ff8a00");
      var metrics = ctx.measureText(name);
      ctx.fillText(name, 265 * unit - metrics.width / 2, 120 * unit);
      //绘制气泡
      ctx.drawImage('../../images/bubble.png', 185 * unit, 50 * unit, 164 * unit, 120.5 * unit);
      //你适合的专业
      ctx.drawImage('../../images/1.png', 30 * unit, 195 * unit, 316 * unit, 60 * unit);
      //具体专业
      ctx.drawImage(_this.data.yourProfession, 160 * unit, 200.5 * unit, 170 * unit, 36 * unit);

      //你适合的工作
      ctx.drawImage('../../images/2.png', 30 * unit, 266 * unit, 316 * unit, 60 * unit)
      //具体职业
      ctx.drawImage(_this.data.yourWork, 160 * unit, 270 * unit, 170 * unit, 36 * unit);

      //绘制内在潜力图
      ctx.drawImage(_this.data.yourPotenial, 47.5 * unit, 320 * unit, 280 * unit, 194 * unit);

      //绘制二维码
      ctx.drawImage('../../images/QRcode.png', 103 * unit, 510 * unit, 169 * unit, 50 * unit);
      //绘制
      ctx.draw();
      setTimeout(function () {
        _this.saveToPhotosAlbum();
      }, 500)
    }else{
      wx.downloadFile({
        url: _this.data.avatarUrl,
        success: function (res) {
          _this.setData({
            localPath: res.tempFilePath
          });
          var localPath = _this.data.localPath;
          //绘制背景
          ctx.drawImage('../../images/saveImage-bj.jpg', 0, 0, _this.data.windowWidth, _this.data.windowHeight);

          //绘制头像
          ctx.save();
          ctx.rotate(352 * Math.PI / 180)
          ctx.drawImage(localPath, 25 * unit, 90 * unit, 102 * unit, 102 * unit);
          ctx.restore();

          //绘制胶布
          ctx.drawImage("../../images/adhesive1.png", 118 * unit, 56 * unit, 42.5 * unit, 43 * unit)
          ctx.drawImage("../../images/adhesive2.png", 35 * unit, 167 * unit, 32.5 * unit, 33 * unit)
          ////利用canvas写入昵称
          var name = _this.data.nickName || "";
          ctx.font = 'italic bold 18px sans-serif';
          ctx.setFontSize(18 * unit);
          ctx.setFillStyle("#ff8a00");
          var metrics = ctx.measureText(name);
          ctx.fillText(name, 265 * unit - metrics.width / 2, 120 * unit);
          //绘制气泡
          ctx.drawImage('../../images/bubble.png', 185 * unit, 50 * unit, 164 * unit, 120.5 * unit);
          //你适合的专业
          ctx.drawImage('../../images/1.png', 30 * unit, 195 * unit, 316 * unit, 60 * unit);
          //具体专业
          ctx.drawImage(_this.data.yourProfession, 160 * unit, 200.5 * unit, 170 * unit, 36 * unit);

          //你适合的工作
          ctx.drawImage('../../images/2.png', 30 * unit, 266 * unit, 316 * unit, 60 * unit)
          //具体职业
          ctx.drawImage(_this.data.yourWork, 160 * unit, 270 * unit, 170 * unit, 36 * unit);

          //绘制内在潜力图
          ctx.drawImage(_this.data.yourPotenial, 47.5 * unit, 320 * unit, 280 * unit, 194 * unit);

          //绘制二维码
          ctx.drawImage('../../images/QRcode.png', 103 * unit, 510 * unit, 169 * unit, 50 * unit);
          //绘制
          ctx.draw();
          setTimeout(function () {
            _this.saveToPhotosAlbum();
          }, 500)
        }
      })
    }
  },
  saveToPhotosAlbum:function(){
    wx.canvasToTempFilePath({
      fileType: 'jpg',
      canvasId: "saveImage",
      success: function (resu) {
        wx.saveImageToPhotosAlbum({
          filePath: resu.tempFilePath,
          success: function (resu) {
            wx.showToast({
              title: '图片保存已保存到相册',
              duration: 2000
            })
          }
        })
      }
    })
  },
  getUserInfo: function (e) {
    this.setData({
      showMask: false,
      showGetInfor: false,
      nickName: e.detail.userInfo.nickName,     
      avatarUrl: e.detail.userInfo.avatarUrl, 
      sex: e.detail.userInfo.gender   
    })
  },
  cancel:function(){
    this.setData({
      showMask: false,
      showGetInfor: false
    })
  },
  turnToRanking:function(){
    wx.navigateTo({
      url: '/pages/ranking/ranking',
      success: function (res) {
        console.log(res);
      }
    })
  }
})