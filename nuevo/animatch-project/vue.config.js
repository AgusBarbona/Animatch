const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
<<<<<<< HEAD
  transpileDependencies: true
})
=======
  transpileDependencies: true,
  /*proxyTable: {
    '/api':{
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
        '^/api': ''
        }
     }
}*/
})
>>>>>>> c12638a659bce720ca01c7e94a20a02c30e9d1c1
