// vue.config.js 配置说明
// 这里只列一部分，具体配置惨考文档啊
const IS_PROD = ["production", "test"].includes(process.env.NODE_ENV);

module.exports = {
  publicPath: "./",
  outputDir: "dist",

  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.symlinks(true); // 修复热更新失效
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: IS_PROD,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  }
  //   devServer: {
  //     port: 8080, // 端口号
  //     host: "192.168.8.60",
  //     https: false, // https:{type:Boolean}
  //     open: false, //配置自动启动浏览器
  //     // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
  //     proxy: {
  //       "/api": {
  //         target: "http://musicapi.leanapp.cn",
  //         ws: true,
  //         changeOrigin: true
  //       }
  //     } // 配置多个代理
  //   }
};
