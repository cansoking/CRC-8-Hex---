// pages/subPages/baseconver/baseconver.js
Page({
  data: {
    cur1: 0,
    cur2: 2,
    jz: ["2进制", "8进制", "10进制", "16进制"],
    jznum: [2, 8, 10, 16],
    textvalue1: '',
    textvalue2: ''
  },
  transform() {
    this.setData({
      textvalue2: parseInt(this.data.textvalue1, this.data.jznum[this.data.cur1]).toString(this.data.jznum[this.data.cur2])
    });
  },
  // 复制结果
  copyResult(e) {
    wx.setClipboardData({
      data: e.currentTarget.id == 0 ? this.data.textvalue1 : this.data.textvalue2
    });
  },
  // 选择框
  PickerChange(e) {
    let id = e.currentTarget.id;
    let value = e.detail.value;
    this.setData({
      cur1: id == 0 ? value : this.data.cur1,
      cur2: id == 1 ? value : this.data.cur2
    });
  },
  // 清空输入框
  clearContent() {
    this.setData({
      textvalue1: '',
      textvalue2: ''
    });
  },
  // 输入内容
  inputContent(e) {
    this.setData({
      textvalue1: e.detail.value
    });
  },
});