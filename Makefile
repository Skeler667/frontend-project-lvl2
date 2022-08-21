install:
	npm install ci
publish:
	npm publish --dry-run
gendiff:
	node bin/gendiff.js
test:
	npm test
lint:
	npx eslint .