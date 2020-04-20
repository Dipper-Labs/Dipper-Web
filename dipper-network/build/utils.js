var path = require('path')
var chalk = require('chalk')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var saladConf = require('./webpack.salad.conf.json')
// var postcssSalad = require('postcss-salad')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production' ?
    config.build.assetsSubDirectory :
    config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    var loaders = [cssLoader]
    var isSass = loader === 'sass'
    var isCss = loader === 'css'

    if (loader) {
      if (isSass) {
        loaders.push({
          loader: 'postcss-loader',
          options: {
            sourceMap: options.sourceMap,
            config: {
              path: '.postcssrc.js'
            }
          }
        })
      }
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })

    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract || isCss) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {
      indentedSyntax: true
    }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

exports.copyright = function () {
  console.log(chalk.blue(` ♥ FrontEnd Team ♥`))
}


exports.clog = function (color, str) {
  console.log(chalk[color](str))
}
