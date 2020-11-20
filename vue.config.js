module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    // proxy: {
    //   '/api': {
    //     target: '',  //跨域地址
    //     changeOrigin: true,  // 是否跨域
    //     ws: true,  // 是否使用https
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}