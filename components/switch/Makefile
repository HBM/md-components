
BIN = ../../node_modules/.bin
SASS = $(BIN)/node-sass
BROWSERIFY = $(BIN)/browserify
STANDARD = $(BIN)/standard
KARMA = $(BIN)/karma

all: example/css/styles.bundle.css example/js/script.bundle.js

example/css/styles.bundle.css: example/css/styles.scss
	$(SASS) $< $@

%.bundle.js: %.js
	$(BROWSERIFY) $< --outfile $@ --transform [babelify --presets [es2015 stage-0 react]]

test:
	$(STANDARD) && $(KARMA) start

clean:
	rm -rf example/css/styles.bundle.css example/js/script.bundle.js

.PHONY: lint test clean
