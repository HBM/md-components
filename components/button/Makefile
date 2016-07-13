
BIN = ../../node_modules/.bin
SASS = $(BIN)/node-sass
BROWSERIFY = $(BIN)/browserify
ESLINT = $(BIN)/eslint
KARMA = $(BIN)/karma

all: example/css/styles.bundle.css example/js/script.bundle.js

example/css/styles.bundle.css: example/css/styles.scss
	$(SASS) $< $@

%.bundle.js: %.js
	$(BROWSERIFY) $< -t [ babelify --presets [es2015 stage-0 react] ] -o $@

lint: Button.js ./__tests__/*-test.js ./example/js/script.js
	$(ESLINT) $^

test:
	$(KARMA) start

clean:
	rm -rf example/css/styles.bundle.css example/js/script.bundle.js

.PHONY: lint test clean
