import express from "express";
import GetToDosRoute from "./routes";
import errorHandler from "./errorHandler";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const app = express();
const PORT: number = 3000;
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "To do Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    components: {
      schemas: {
        Add: require("../src/swagger/schemas/add.schema.json"),
        Delete: require("../src/swagger/schemas/delete.schema.json"),
        Update: require("../src/swagger/schemas/update.schema.json"),
        Get: require("../src/swagger/schemas/get.schema.json"),
        Response: require("../src/swagger/schemas/response.json"),
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["src/**/*.ts"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.urlencoded({ extended: true }));
app.use("/todos", GetToDosRoute);
app.use("/healthcheck", (req, res) => {
  res.status(200).send("Healtcheck is OK 🚀");
});

app.use(errorHandler);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found on the server</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
