module.exports = {
devServer: {
proxy: {
  '^/api': 'http://localhost:8080',
    changeOrigin: true
},
}
}
 

