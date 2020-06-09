var postcss = require('postcss');
var fs = require('fs');
var path = require('path');
var fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'), 'utf8');
var nodes = postcss.parse(fontFile).nodes;
var classList = [];

nodes.forEach((node) => {
  var selector = node.selector || '';
  console.log(selector)
  var reg = new RegExp(/\.pa-icon-([^:]+):before/);
  var arr = selector.match(reg);

  if (arr && arr[1]) {
    classList.push(arr[1]);
  }
});

classList.reverse(); // 希望按 css 文件顺序倒序排列

console.log("---1",classList)

try{
  fs.writeFile(path.resolve(__dirname, '../../doc/util/icon.json'), JSON.stringify(classList), () => {});
}catch(err){
  console.log(err)
}