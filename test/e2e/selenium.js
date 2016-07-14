/* global describe, before, after, it, afterEach */

var username = process.env.SAUCE_USERNAME
var accessKey = process.env.SAUCE_ACCESS_KEY

var webdriver = require('selenium-webdriver')
var Saucelabs = require('saucelabs')
var saucelabs = new Saucelabs({
  username: username,
  password: accessKey
})

var capabilities = [
  {
    platform: 'Linux',
    browserName: 'Chrome',
    version: '48'
  },
  {
    platform: 'Linux',
    browserName: 'Firefox',
    version: '45'
  },
  {
    platform: 'Windows 10',
    browserName: 'Chrome',
    version: '51'
  },
  {
    platform: 'Windows 10',
    browserName: 'Firefox',
    version: '47'
  },
  {
    platform: 'Windows 10',
    browserName: 'MicrosoftEdge',
    version: '13.10586'
  },
  {
    platform: 'Windows 10',
    browserName: 'Internet Explorer',
    version: '11.103'
  },
  {
    platform: 'OS X 10.11',
    browserName: 'Safari',
    version: '9'
  }
]

capabilities.forEach(function (capability) {
  describe(capability.platform + ': ' + capability.browserName, function () {
    var id
    var driver

    before(function (done) {
      driver = new webdriver.Builder()
        .withCapabilities({
          platform: capability.platform,
          browserName: capability.browserName,
          version: capability.version,
          username: username,
          accessKey: accessKey
        })
        .usingServer('http://' + username + ':' + accessKey + '@ondemand.saucelabs.com:80/wd/hub')
        // .usingServer('http://localhost:4445/wd/hub')
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
        passed: passed,
        // we have to set a build id to make the badges work
        build: 1
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
})

