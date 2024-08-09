# Prism Test

This repo is not ready for prime time! This is a very simple repo to show using Prism.

```shell
npm ci
```

Run a mock of the OpenAPI spec:

```shell
npx prism mock spec.yml
```

Once that's running, you can test the mock server using a tool like Postman or curl:

```shell
curl http://localhost:4010/testing
```

When you have the server running, you can run the tests:

```shell
npx mocha api.test.js
```
