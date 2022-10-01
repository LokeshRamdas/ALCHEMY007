const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/getinfo/orderid/',
    createProxyMiddleware({
      target: 'https://alchemy007-fkgrid.zabardastdeals.in',
      changeOrigin: true,
    })
  ),
  app.use(
    '/store/warranty',
    createProxyMiddleware({
      target: 'https://alchemy007-fkgrid.zabardastdeals.in',
      changeOrigin: true,
    })
  ),
  app.use(
    '/uploadfkinvoice',
    createProxyMiddleware({
      target: 'https://flaskfkapp.azurewebsites.net',
      changeOrigin: true,
    })
  )
};