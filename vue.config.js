const port = process.env.port || process.env.npm_config_port || 8080; // dev port
module.exports = {
  productionSourceMap: false,

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
    }
  },

  devServer: {
    port: port,
    open: true,
    disableHostCheck: process.env.NODE_ENV === "development" ? true : false,
    proxy: {
      "/app": {
        target: "http://10.206.20.48:18000",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/app": "/app"
        }
      },
      "/place": {
        target: "http://api.map.baidu.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            "^/place": "/place"
        }
      },
      "/geocoder": {
        target: "http://api.map.baidu.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            "^/geocoder": "/geocoder"
        }
      }
    }
  },

  css: {
    extract: false
  },

  lintOnSave: false
}
