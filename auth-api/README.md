# Auth Service

## Setup

1. Run `node bin/generateKeyPair.mjs <environment>` to generate JWT signing keys and update src/public/.well-known -> "jwks.json"
2. Copy secret omitted from command above (keyid & key password) in "secrets/_environment_.env" (e.g. secrets/development.env)
3. Generate a strong secret/password somehow (e.g. `crypto.randomUUID().replaceAll('-', '').substring(0, 16)`)
4. Run `node bin/lockSecret.mjs <environment> <secret>` to encrypt secrets, use secret/password from step 3 here (encryption uses Node GPG)
5. Run `make dev secret=<secret>` to start service in dev mode (runs DB in docker)
6. For testing make sure DB is up (via docker-compose) and run `yarn test`
7. If you make any changes to the ".env" file, make sure you lock it again
