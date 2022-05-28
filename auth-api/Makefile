dev: NODE_ENV = development 
dev: DOTENV_CONFIG_PATH = ./secrets/development.env

.create-migration:
	NODE_ENV=development npx knex migrate:make

.migrate-latest:
	npx knex migrate:latest

.clean:
	rm -rf dist/
	mkdir dist

.build: .clean
	yarn tsc
	cp -R src/keys dist/keys
	cp -R src/public dist/public

.lint:
	yarn eslint 'src/**/*'

.test:
	cp secrets/test.env.sample ./.env
	NODE_ENV=test yarn migrate-latest
	NODE_ENV=test yarn jest --runInBand
	rm .env

.watch-node:
	NODE_ENV=development nodemon dist/index.js

.watch-ts:
	NODE_ENV=development npx tsc -w

dev: .clean .build
	test -n "$(secret)" || (echo "pass secret ..." ; exit 1)
	node bin/unlockSecret.mjs $(NODE_ENV) $(secret)
	DOTENV_CONFIG_PATH=$(DOTENV_CONFIG_PATH) NODE_ENV=$(NODE_ENV) npx knex migrate:latest
	npx concurrently -k -p "[{name}]" -n "TypeScript, Node" -c "yellow.bold, green.bold" "npx tsc -w" "DOTENV_CONFIG_PATH=$(DOTENV_CONFIG_PATH) NODE_ENV=$(NODE_ENV) npx nodemon dist/index.js"
