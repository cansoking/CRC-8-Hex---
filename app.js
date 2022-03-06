// app.js
App({
  methods: {
    // 字符串转16进制
    str2hex(str) {
      // 不兼容
      // let encoder = new TextEncoder('utf8');
      // let bytes = encoder.encode(str);
      // 小程序兼容写法
      let bytes = unescape(encodeURIComponent(str)).split("").map(val => val.charCodeAt());
      // let res = '';
      // for(let i = 0; i < bytes.length; i++) {
      //   res += bytes[i].toString(16);
      // }
      // return Array.prototype.map
      //   .call(bytes, (x) =>  x.toString(16))
      //   .join('');
      return bytes.map(x => x.toString(16)).join('');
    },
    // 16进制转字符串
    hex2str(hexstr) {
      let res = '';
      for (let i = 0; i < hexstr.length; i += 2) {
        let byte_val = parseInt(hexstr.substr(i, 2), 16);
        res += String.fromCharCode(byte_val);
      }
      return decodeURIComponent(escape(res));
    }
  }
});