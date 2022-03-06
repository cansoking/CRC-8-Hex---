// pages/subPages/crc8/crc8.js
const app = getApp();
Page({
  data: {
    textcontent: '',
    mode: 0,
    picker: ['x8+x5+x4+1', 'x8+x2+x1+1', 'x8+x6+x4+x3+x2+x1'],
    poly: ['31', '07', '5E'],
    polyhex: [0x31, 0x07, 0x5e],
    content_mode: 0,
    content_picker: ['String', 'Hex'],
    result: ['', '']
  },
  // 选择框
  PickerChange(e) {
    let id = e.currentTarget.id;
    let value = e.detail.value;
    this.setData({
      content_mode: id == 0 ? value : this.data.content_mode,
      mode: id == 1 ? value : this.data.mode
    });
  },
  // 按钮计算
  calculate() {
    let hexstr = this.data.textcontent;
    console.log(this.data.content_mode);
    if (this.data.content_mode == 0) {
      hexstr = app.methods.str2hex(this.data.textcontent);
    }
    let res = this.CRC8(hexstr);
    this.setData({
      result: [res.toString(16).toUpperCase(), res.toString(2)]
    });
    wx.showToast({
      title: '计算成功',
      icon: 'success'
    });
  },
  // 清空输入框
  clearContent() {
    this.setData({
      textcontent: ''
    });
  },
  // 输入内容
  inputContent(e) {
    this.setData({
      textcontent: e.detail.value
    });
  },
  // 复制结果
  copyResult(e) {
    wx.setClipboardData({
      data: this.data.result[e.currentTarget.id]
    });
  },
  // CRC8 校验
  CRC8(hexstr) {
    let result = 0x00;
    let bit, c8;
    const polynomial = this.data.polyhex[this.data.mode];
    console.log(polynomial);
    for (let i = 0; i < hexstr.length; i += 2) {
      let byte_val = parseInt(hexstr.substr(i, 2), 16);
      for (let k = 0; k < 8; k++) {
        bit = ((byte_val >> (7 - k) & 1) == 1);
        c8 = ((result >> 7 & 1) == 1);
        result <<= 1;
        if (c8 ^ bit) {
          result ^= polynomial;
        }
      }
    }
    result &= 0xff;
    return result;
  }
});