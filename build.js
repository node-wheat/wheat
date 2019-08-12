const path = require('path')
const webpack = require('webpack')
const config = {
  context: path.resolve(__dirname, './web'),
  entry: {
    main: './src/main.js'
  }
}
function doSomething () {}
process.stdout.swrite = process.stdout.write;
process.stdout.write = function () {
  doSomething()
  process.stdout.swrite.apply(this, arguments);
}
const compier = webpack(config)
console.log(compier)
