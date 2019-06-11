module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/phidays-2019-awesome-web-apis/'
    : '/',
  pwa: {
    name: 'PhiDays 2019',
    manifestPath: 'manifest.json',
    themeColor: '#ff2d58',
    msTileColor: '#000000'
  }
}
