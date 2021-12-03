const { VUE_APP_URL, VUE_APP_URL_HTTPS, VUE_APP_ROUTE, VUE_APP_PAGE_HTTPS } = process.env

const http = VUE_APP_URL_HTTPS === 'true' ? 'https' : 'http'

module.exports = {
  // 静态文件路径
  publicPath: '/' + VUE_APP_ROUTE,
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    open: true,
    port: 8080,
    https: VUE_APP_PAGE_HTTPS,
    hotOnly: false,
    proxy: {
      '/apis': {
        target: `${http}://${VUE_APP_URL}`,  //跨域地址
        changeOrigin: true,  // 是否跨域
        ws: true,  // 是否使用https
        pathRewrite: {
          '^/apis': ''
        }
      }
    }
  }
}