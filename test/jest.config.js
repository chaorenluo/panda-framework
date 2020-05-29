const path = require('path');

module.exports = {
  rootDir: '../', // 搜索该目录下的所有js或jsx后缀的文件，同时排除node_modules和vendor
  collectCoverage: true, // 指出是否收集测试时的覆盖率信息
  collectCoverageFrom: [ // 表明哪些集合的文件是需要收集的
    '**/packages/**/*.vue'
  ],
  coverageDirectory: '<rootDir>/test/coverage', // Jest输出覆盖信息文件的目录
  moduleFileExtensions: [// 模块使用的文件扩展名数组
    'js',
    'vue'
  ],
  moduleNameMapper: { // 从正则表达式到模块名称的映射
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(scss|sass|css)$': 'identity-obj-proxy'
  },
  transform: { // 从正则表达式到转换器路径的映射
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  snapshotSerializers: [// Jest应该在快照测试中使用的快照序列化程序模块的路径列表。

    '<rootDir>/node_modules/jest-serializer-vue'
  ]
};
