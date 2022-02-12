const assert = require("assert");
const mongoose = require("mongoose");
const buildFastify = require("../src/app");
const fastify = buildFastify();

afterEach(() => {
  fastify.close();
  mongoose.connection.close(() => process.exit(0));
});

describe('requests the "/api" route', async () => {
  const response = await fastify.inject({
    method: "GET",
    url: "/api/",
  });
  const body = response.json();

  it("returns status code 200", () => {
    assert.equal(response.statusCode, 200);
    assert.equal(body.statusCode, 200);
  });

  it("returns a json object", () => {
    assert.equal(
      response.headers["content-type"],
      "application/json; charset=utf-8"
    );
    assert.equal(response instanceof Object, true);
  });
});
