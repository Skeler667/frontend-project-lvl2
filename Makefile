install:
	npm install ci
lint:
	npx eslint  .
publish:
	npm publish --dry-run
gendiff:
	node bin/gendiff.js
test:
	npm test
hello:
	console.log('Hello!');