/* global describe, before, after, it */

var webdriver = require('selenium-webdriver')

describe('hbm-react-components', function () {
  var driver

  before(function () {
    driver = new webdriver.Builder()
      .withCapabilities({
        'browserName': 'chrome',
        'platform': 'Windows XP',
        'version': '43.0',
        'username': process.env.SAUCE_USERNAME,
        'accessKey': process.env.SAUCE_ACCESS_KEY
      })
      .usingServer('http://' + process.env.SAUCE_USERNAME + ':' + process.env.SAUCE_ACCESS_KEY + '@ondemand.saucelabs.com:80/wd/hub')
      .build()
  })

  after(function () {
    driver.quit()
  })

  it('should work', function (done) {
    driver.get('http://www.google.com')
    driver.getTitle().then(function (title) {
      console.log(title)
      done()
    })
  })
})

