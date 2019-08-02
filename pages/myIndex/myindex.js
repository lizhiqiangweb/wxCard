// pages/myindex/myindex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    access: 0,
    collections: 0,
    headUrl: '../images/headimg.jpg',
    btnsIcon: [{
        type: 1,
        iconUrl: '../images/myCard_icon.png',
        name: '我的名片',
        url: '../myCard/mycard'
      },
      {
        type: 2,
        iconUrl: '../images/myImglist_icon.png',
        name: '我的相册',
        url: '../company/ckAlbum'
      },
      {
        type: 2,
        iconUrl: '../images/taCompany_icon.png',
        name: '我的公司',
        url: '../company/company'
      },
      {
        type: 2,
        iconUrl: '../images/liuliang_icon.png',
        name: '流量统计',
        url: '../myIndex/flow'
      },
      {
        type: 3,
        iconUrl: '../images/scanning_icon.png',
        name: '扫描名片'
      },
      {
        type: 1,
        iconUrl: '../images/tuij_icon.png',
        name: '推荐名片',
        url: '../contacts/contacts'
      },
      // {
      //   type: 2,
      //   iconUrl: '../images/card_zb.png',
      //   name: '名片装扮',
      //   url: '../myIndex/cardXs'
      // },
    ]
  },
  go: function(res) {
    var that = this;
    var url = res.target.dataset.url;
    var type = res.target.dataset.index;
    if (type == 1) {
      wx.switchTab({
        url: url,
      })
    } else if (type == 3) {
      wx.scanCode({
        onlyFromCamera: true,
        scanType: ['qrCode'],
        success(res) {
          console.log(res)
          if (res.path) { //合法本小程序路径
            var str = res.path
            var index = str.indexOf("="); //截取=符号后面的字符串
            var scene = str.substr(index + 1, str.length); //获得=符号后面所有字符
            var type = parseInt(scene[0])
            // console.log(type)
            //console.log(scene[2])
            if (type == 3) {
              that.setData({
                oil_station_id: scene[2]
              })
              //执行获得参数后的操作
            }
          }
        }
      })
    } else {
      wx.navigateTo({
        url: url,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    wx.request({
      url: 'https://www.tq-cs.com/wxCard/getJson',
      data: '',
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        if (res.data = '') {
          wx.switchTab({
            url: '../myCard/mycard',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
          })
        };
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})