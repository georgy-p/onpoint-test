install: 
	npm ci

start:
	npm start

build:
	npm run build

deploy:
	npm run deploy

lint:
	npx eslint .

format:
	npx prettier --write .
