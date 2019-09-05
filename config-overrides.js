// 这个文件的作用就是配合react-app-rewired包，来实现定义webpack配置项的

const { override, fixBabelImports } = require('customize-cra');
 module.exports = override(
        fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
      }),
 );