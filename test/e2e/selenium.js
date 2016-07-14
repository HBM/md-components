/* global describe, before, after, it */

var fs = require('fs')
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

  after(function (done) {
    // get sauce labs job id
    driver.getSession().then(function (sessionID) {
      var id = sessionID.id_
      var filepath = path.join(__dirname, '..', '..', 'README.md')
      var old = fs.readFileSync(filepath, 'utf8')
      var readme = old.replace(/saucelabs.com\/beta\/tests\/[^\)]*/'saucelabs.com/beta/tests/' + id)
      fs.writeFileSync(filepath, readme)
      driver.quit()
      // without timeout sauce labs tests do not end properly and
      // report "Your test errored. Test did not see a new command for 90 seconds. Timing out."
      setTimeout(function () {
        done()
      }, 1000)
    })
  })

  it('should work', function (done) {
    driver.get('http://www.google.com')
    driver.getTitle().then(function (title) {
      console.log(title)
      done()
    })
  })
})

