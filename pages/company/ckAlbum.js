// pages/company/newAlbum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pics: [
      "../images/headimg.jpg",
      "../images/headimg.jpg"
    ],

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
    var that = this;
    let upload_picture_list = this.data.pics;
    let index = e.currentTarget.dataset.index;
    let pics = this.data.pics;
    wx.showModal({
      title: '提示',
      content: '是否删除图片',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          upload_picture_list.splice(index, 1); //在此图片的位置插入一个空值
          that.setData({
            pics: upload_picture_list
          });
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
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