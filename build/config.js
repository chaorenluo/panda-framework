var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');

var Components = require('../components.json');
var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`panda-ui/packages/${key}`] = `panda-ui/lib/${key}`;
});
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`panda-ui/src/utils/${file}`] = `panda-ui/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`panda-ui/src/mixins/${file}`] = `panda-ui/lib/mixins/${file}`;
});


externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;