// index.js
Page({
  data: {
    TabCur: 0,
    TabList: ["CRC-8校验", "进制转换", "HEX字符串转换"],
    TabIcon: ["repair", "write", "repeal"]
  },
  tabSelect(e) {
    let id = e.currentTarget.dataset.id;
    this.setData({
      TabCur: id,
    });
  },
});
