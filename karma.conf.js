// Karma configuration
// Generated on Tue Jul 05 2016 11:04:37 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'components/**/__tests__/*-test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'components/**/*.js': ['browserify'],
      'components/**/__tests__/*-test.js': ['browserify']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    browserify: {
      debug: true,
      transform: [
        ['babelify', {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['__coverage__']
        }],
        'browserify-istanbul'
      ],
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          bundle.external('react/addons')
          bundle.external('react/lib/ReactContext')
          bundle.external('react/lib/ExecutionEnvironment')
        })
      }
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage'
    }
  })
}
