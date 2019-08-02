// pages/contacts/contacts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contacts: [
      {
        imgUrl: '../images/headimg.jpg',
        name: '',
        post: '',
        company: ''
      }
    ],
    name: '',
    post: '',
    company: '',
  },
  go: function(res) {
    var url = res.target.dataset.url;
    wx.navigateTo({
      url: url,
    });
    wx.request({
      url: '',
      data: {
        id: ''
      },
      header: {

      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        wx.navigateTo({
          url: url,
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
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
      success: function (res) {
        if (res.data.rows == '') {
          wx.showModal({
            title: '温馨提示',
            content: '请您先进行电子名片创建!',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000',
            confirmText: '确定',
            confirmColor: '#000',
            success: function (res) {
              wx.switchTab({
                url: '../myCard/mycard',
              })
            },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
        that.setData({
          name: res.data.rows[0].name,
          post: res.data.rows[0].postd,
          company: res.data.rows[0].company,
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
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