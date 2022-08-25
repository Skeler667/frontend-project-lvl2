install:
	npm install ci
lint:
	npx eslint  .
fix:
	npx eslint --fix .
publish:
	npm publish --dry-run
gendiff:
	node bin/gendiff.js
test:
	npm test
lint:
	npx eslint .