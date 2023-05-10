const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0`,
      changeOrigin: true,
    }),
  );
};
