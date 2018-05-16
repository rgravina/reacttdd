start:
	@npm start

deploy:
	@npm build && cf push
