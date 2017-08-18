const proxy = require('http-proxy-middleware')
const packageJson = require('../package.json')

module.exports = function expressMiddleware(router) {
  const proxyConfig = packageJson.proxy || {}

  for (let domain in proxyConfig) {
    if (typeof proxyConfig[domain] === 'string') {
      router.use(domain, proxy({
        target: proxyConfig[domain],
        changeOrigin: true
      }))
    } else {
      router.use(domain, proxy(proxyConfig[domain]))
    }
  }
}
