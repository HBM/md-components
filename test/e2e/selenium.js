/* global describe, before, after, it */

var username = process.env.SAUCE_USERNAME
var accessKey = process.env.SAUCE_ACCESS_KEY

var webdriver = require('selenium-webdriver')
var Saucelabs = require('saucelabs')
var saucelabs = new Saucelabs({
  username: username,
  password: accessKey
})

describe('hbm-react-components', function () {
  var id
  var driver

  before(function (done) {
    driver = new webdriver.Builder()
      .withCapabilities({
        'browserName': 'chrome',
        'platform': 'Windows XP',
        'version': '43.0',
        'username': process.env.SAUCE_USERNAME,
        'accessKey': process.env.SAUCE_ACCESS_KEY
      })
      .usingServer('http://' + username + ':' + accessKey + '@ondemand.saucelabs.com:80/wd/hub')
      .build()

    driver.getSession().then(function (sessionID) {
      id = sessionID.id_
      done()
    })
  })

  afterEach(function (done) {
    var title = this.currentTest.title
    var passed = this.currentTest.state === 'passed'
    saucelabs.updateJob(id, {
      name: title,
      passed: passed
    }, done)
  })

  after(function (done) {
    // get sauce labs job id
    driver.quit()
    // without timeout sauce labs tests do not end properly and
    // report "Your test errored. Test did not see a new command for 90 seconds. Timing out."
    setTimeout(function () {
      done()
    }, 1000)
  })

  it('should work', function (done) {
    driver.get('http://www.google.com')
    driver.getTitle().then(function (title) {
      console.log(title)
      done()
    })
  })
})

