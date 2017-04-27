install:
	npm install

start:
	npm run babel-node -- src/bin/brain-gkd.js

publish:
	npm publish

lint:
	npm run eslint -- src