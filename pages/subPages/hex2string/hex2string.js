// pages/subPages/hex2string/hex2string.js
Page({
  data: {
    cur1: 0,
    cur2: 1,
    textvalue1: '',
    textvalue2: ''
  },
  radioChange(e) {
    let value = e.detail.value;
    this.setData({
      cur1: value,
      cur2: value == 0 ? 1 : 0
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
  // 复制结果
  copyResult(e) {
    wx.setClipboardData({
      data: e.currentTarget.id == 0 ? this.data.textvalue1 : this.data.textvalue2
    });
  },
  // 转换类型
  transform() {
    if (this.data.cur1 == 0) {
      this.setData({
        textvalue2: getApp().methods.str2hex(this.data.textvalue1)
      });
    } else {
      this.setData({
        textvalue2: getApp().methods.hex2str(this.data.textvalue1)
      });
    }
    wx.showToast({
      title: '转换成功',
      icon: 'success'
    });
  }
});