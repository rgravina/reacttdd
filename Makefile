start:
	@npm start

deploy:
	@npm build && cf push

tests:
	@./node_modules/.bin/mocha
