
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, 'icons')
const categories = ['action']

const iconName = (raw) => {
  const middle = raw.match(/ic_(.+)_24px/)[1]
  const names = middle.split('_').map(name => name.charAt(0).toUpperCase() + name.slice(1))
  return names.join('')
}

categories.forEach(c => {
  const pathCategory = path.join(root, c, 'svg', 'production')
  const icons = fs.readdirSync(pathCategory).filter(icon => icon.indexOf('24px') !== -1)
  const components = icons.map(icon => {
    const pathIcon = path.join(pathCategory, icon)
    const content = fs.readFileSync(pathIcon, 'utf8')
    const name = iconName(icon)
    return (
`exports['${name}'] = (props) => (
  ${content.replace('xmlns="http://www.w3.org/2000/svg"', '{...props}')}
)`
    )
  })
  components.unshift(`import React from 'react'`)
  fs.writeFileSync(path.join(__dirname, 'test.js'), components.join('\n\n'))
})
