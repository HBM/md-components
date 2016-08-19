
BIN_DIR = node_modules/.bin
STANDARD = $(BIN_DIR)/standard
WATCHIFY = $(BIN_DIR)/watchify
SASS = $(BIN_DIR)/node-sass

.PHONY: standard
standard:
	$(STANDARD)

.PHONY: watch
watch:
	$(WATCHIFY) examples/js/script.js \
		--outfile examples/js/script.min.js \
		--debug \
		--verbose \
		--transform babelify \
		--plugin browserify-hmr

.PHONY: css
css:
	$(SASS) --watch examples/css/styles.scss examples/css/styles.min.css

.PHONY: serve
serve:
	cd examples && python -m SimpleHTTPServer 5000
