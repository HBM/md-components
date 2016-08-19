var glob = require('glob')
var fs = require('fs')
var assert = require('assert')
var tarball = require('tarball-extract')
var path = require('path')

var iconVersion = '2.2.3'
// link from github release website gets redirect to:
var iconUrl = 'https://codeload.github.com/google/material-design-icons/tar.gz/' + iconVersion
var iconComponentsPath = path.join(__dirname, '../', './components/icon/')

var getDashedName = function (filename) {
  var match = filename.match(/.+ic_(.+)_24px\.svg/)
  if (!match) {
    match = filename.match(/.+ic_(.+)_26x24px\.svg/)
  }
  assert(match, 'filename schema not supported: ' + filename)
  return match[1].replace(/_/g, '-')
}

var toClassDef = function (svg) {
  return `
import React from 'react'

export default (props) => {
  const svg = ${svg}
  return React.cloneElement(svg, props)
}
`
}

var capitalizeFirstLetter = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

var toClassName = function (dashed) {
  var camelCase = dashed.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase()
  })
  return capitalizeFirstLetter(camelCase.replace(/-/g, ''))
}

var createSvgFiles = function () {
  console.log('collecting svg data')
  var icons = glob.sync('/tmp/material-icons/material-design-icons-' + iconVersion + '/**/svg/production/*24px.svg').map(function (filename) {
    var dashedName = getDashedName(filename)
    var svgString = fs.readFileSync(filename).toString()
    return {
      fileContent: toClassDef(svgString),
      fileName: dashedName + '.js',
      className: toClassName(dashedName)
    }
  })

  console.log('writing svg class files to', iconComponentsPath)

  fs.writeFileSync(path.join(iconComponentsPath, 'classList.js'), icons.map(function (icon) {
    return `exports['${icon.className}'] = require('./${icon.fileName}').default`
  }).join('\n'))

  icons.forEach(function (icon) {
    fs.writeFileSync(path.join(iconComponentsPath, icon.fileName), icon.fileContent)
  })

  console.log('DONE')
  process.exit(0)
}

if (fs.existsSync('/tmp/material-icons/material-design-icons-' + iconVersion)) {
  console.log('reusing existing icon download')
  createSvgFiles()
} else {
  console.log('downloading and extracting icons')
  tarball.extractTarballDownload(iconUrl , '/tmp/material-icons.tar.gz', '/tmp/material-icons', {}, function (err, result) {
    if (err) {
      console.error('download failed', result)
      process.exit(1)
    }
    console.log('download finished', result)
    createSvgFiles()
  })
}
