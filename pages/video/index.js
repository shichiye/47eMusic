// pages/video/index.js
import { getTopMVs } from '../../service/api_video'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    topMVs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getTopMVs(0).then(res => {
      this.setData({ topMVs: res.data.data })
    })
  }
})