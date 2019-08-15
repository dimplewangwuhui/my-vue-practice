import {Message} from 'element-ui'
const vueNameLimit = {};

vueNameLimit.install = (Vue, options) => {
  Vue.prototype.namelimit = function (name, length, str) {
    var newName = '';
    var sign = true;

    if (name) {
      name = name.toString().replace(/(^\s+)|(\s+$)/g, '');   // 去掉前后空格
      var maxLength = length;
      var temp = '';
      var icount = 0;
      var patrn = /[^\x00-\xff]/;  // 汉字正则dsaa

      for (var i = 0; i < name.length; i++) {
        temp = name.substr(i, 1);
        if (patrn.exec(temp) == null) {    // 不是汉字
          icount = icount + 1
        } else {    // 是汉字
          icount = icount + 2
        }
        if (icount <= maxLength) {
          newName += temp;
          sign = true
        } else {
          Message({message: str + '最长' + maxLength + '个字符或' + maxLength / 2 + '个汉字!', type: 'error'});
          sign = false
        }
      }
      return newName
      // console.log(el.childNodes[2].value)
    }
  }
};
export default vueNameLimit
