const path = require('path')
module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: path.__dirname,
    filename: 'bundle.js'
  }
}
