// pages/myCard/mycard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    access: 0,
    collections: 0,
    noCard: true,
    card: false,
    companyDis: false,
    companyCase: false,
    companyAlbum: false,
    adress: '',
    wxPhone: '',
    qqPhone: '',
    email: '',
    company: '',
    name: '',
    post: '',
    phone: '',
    headUrl: '../images/headimg.jpg',
    companyDisContent: '',
    companyCaseContent: '',
    imgItem: [
      {
        imgUrl: '../images/headimg.jpg'
      },
      {
        imgUrl: '../images/headimg.jpg'
      }
    ],
    bgUrl: ''
  },
  go: function (res) {
    var url = res.target.dataset.url;
    wx.navigateTo({
      url: url,
      success: function () {

      },
      fail: function () {

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'bgUrl',
      success: function (res) {
        that.setData({
          bgUrl: res.data
        })
      },
    });
    wx.request({
      url: 'http://120.27.61.214:8080/wxCard/getJson',
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        // console.log(res);
        if (res.data != null) {
          that.setData({
            noCard: false,
            card: true,
            name: res.data.rows[0].name,
            post: res.data.rows[0].postd,
            phone: res.data.rows[0].phone,
            wxPhone: res.data.rows[0].wxPhone,
            company: res.data.rows[0].company,
            email: res.data.rows[0].email,
            address: res.data.rows[0].adress,
            qqPhone: res.data.rows[0].qqPhone,
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    });
    wx.request({
      url: 'http://120.27.61.214:8080/wxCard/getCompany',
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        if (res.data.rows[0].companyDis != null) {
          that.setData({
            companyDis: true,
            companyDisContent: res.data.rows[0].companyDis
          })
        }
        if (res.data.rows[0].companyCase != null) {
          that.setData({
            companyCase: true,
            companyCaseContent: res.data.rows[0].companyCase
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
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