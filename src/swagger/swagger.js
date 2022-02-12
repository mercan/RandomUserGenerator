const { env, port } = require("../config/index");

module.exports = {
  routePrefix: "/documentation",
  openapi: {
    info: {
      title: "Random User Generator API",
      version: "1.0.0",
      contact: {
        name: "İbrahim Can Mercan",
        email: "imrcn77@gmail.com",
      },
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    servers: [
      {
        url:
          env === "development"
            ? `http://localhost:${port}`
            : "https://randomusergeneratorr.herokuapp.com",
        description: env === "development" ? "Development" : "Production",
      },
    ],
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      { name: "Generate", description: "Generate Random User Data end-points" },
    ],
  },
  staticCSP: true,
  exposeRoute: true,
};
