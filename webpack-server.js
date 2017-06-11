const opn = require('opn')
const internalIp = require('internal-ip')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const port = 7000
const ip = internalIp()

const webpackConfig = {
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
}

const compiler = Webpack(webpackConfig)
const server = new WebpackDevServer(compiler, {
  hot: true,
  stats: {
    colors: true
  },
  publicPath: '/',
  historyApiFallback: {
    index: 'index.html'
  }
})

server.listen(port, ip, () => {
  console.log(`Running on http://${ip}:${port}`)
  opn(`http://${ip}:${port}`)
})
