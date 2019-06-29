// pages/company/companyEdit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textareaCount: 0,
    isShow: true,
    isShows: true,
    imgSrc: '',
    imgSrcs: '',
    pics: [],
    imgCount: 0,
    imgCounts: 0
  },
  // 监听公司介绍文字长度
  textareaCount: function (e) {
    var textareaCount = e.detail.value.length;
    this.setData({
      textareaCount
    })
  },
  // 选择图片
  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认1
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: res => { //es6写法  success: function(res)
        // success
        var imgSrc = res.tempFilePaths;
        // 控制触发添加图片的最多时隐藏
        that.setData({
          isShow: false,
          imgSrc: imgSrc,
          imgCount: 1
        })
      }
    })
  },
  // 图片预览
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: imgSrc,
    })
  },
  // 删除图片
  deleteImg: function (e) {
    var that = this;
    var imgSrc = that.data.imgSrc;
    let imgCount = that.data.imgCount;
    that.setData({
      isShow: true,
      imgSrc: '',
      imgCount: 0
    })
  },

  // 选择图片
  chooseImages: function () {
    var that = this,
    pics = that.data.pics;
    wx.chooseImage({
      count: 9 - pics.length, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        var imgSrc = res.tempFilePaths;
        pics = pics.concat(imgSrc); //将imgSrc的地址concat(push)进pics数组里面
        // 上传图片数量计数
        that.setData({
          imgCounts: pics.length
        })
        // 控制触发添加图片的最多时隐藏
        if (pics.length >= 9) {
          that.setData({
            isShows: false
          })
        }
        that.setData({
          pics: pics
        })
      },
    })
  },
  // 图片预览
  previewImages: function (e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.pics
    })
  },
  // 删除图片
  deleteImgs: function (e) {
    let upload_picture_list = this.data.pics;
    let index = e.currentTarget.dataset.index;
    let pics = this.data.pics;
    let imgCounts = this.data.imgCounts;
    upload_picture_list.splice(index, 1); //在此图片的位置插入一个空值
    this.setData({
      pics: upload_picture_list,
      imgCounts: imgCounts - 1
    });
    if (pics.length >= 9) { //图片大于9的时候，隐藏增添按钮
      this.setData({
        isShows: false
      })
    } else {
      this.setData({
        isShows: true
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