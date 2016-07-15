/* global describe, before, after, it, afterEach */

const username = process.env.SAUCE_USERNAME
const accessKey = process.env.SAUCE_ACCESS_KEY

const webdriver = require('selenium-webdriver')
const By = webdriver.By
const Saucelabs = require('saucelabs')
const saucelabs = new Saucelabs({
  username: username,
  password: accessKey
})

// serve static files so they are available for selenium
var http = require('http')
var path = require('path')
var st = require('st')

filepath = path.join(__dirname, '..', '..', 'examples')
http.createServer(st({
  path: filepath
})).listen(1337)

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
  }
  // {
  //   platform: 'Windows 10',
  //   browserName: 'Internet Explorer',
  //   version: '11.103'
  // }
  //{
  //  platform: 'OS X 10.11',
  //  browserName: 'Safari',
  //  version: '9'
  //}
]

var driver
after(function (done) {
  driver.quit()
  // without timeout sauce labs tests do not end properly and
  // report "Your test errored. Test did not see a new command for 90 seconds. Timing out."
  setTimeout(function () {
    done()
  }, 1000)
})

capabilities.forEach(function (capability) {
  const description = capability.platform + ': ' + capability.browserName + ' ' + capability.version + ': '
  describe(description, function () {
    var id

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

    describe('Button', function () {
      afterEach(function (done) {
        var title = this.currentTest.fullTitle()
        var passed = this.currentTest.state === 'passed'
        saucelabs.updateJob(id, {
          name: title,
          passed: passed,
          // we have to set a build id to make the badges work
          build: 1
        }, done)
      })

      it('should be clickable', function () {
        driver.get('http://localhost:1337/index.html#/button')
        driver.findElement(By.className('Button')).click()
      })
    })
  })
})
