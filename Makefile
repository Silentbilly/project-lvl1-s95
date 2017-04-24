install:
	sudo npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	sudo npm publish