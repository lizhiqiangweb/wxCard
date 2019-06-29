// pages/myindex/myindex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    access: 0,
    collections: 0,
    headUrl: '../images/headimg.jpg',
    btnsIcon: [
      {
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
        type: 2,
        iconUrl: '../images/scanning_icon.png',
        name: '扫描名片'
      },
      {
        type: 1,
        iconUrl: '../images/tuij_icon.png',
        name: '推荐名片',
        url: '../contacts/contacts'
      },
      {
        type: 2,
        iconUrl: '../images/card_zb.png',
        name: '名片装扮',
        url: '../myIndex/cardXs'
      },
    ]
  },
  go: function(res) {
    var url = res.target.dataset.url;
    var type = res.target.dataset.index;
    if(type==1) {
      wx.switchTab({
        url: url,
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
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})