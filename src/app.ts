import express from "express";
import GetToDosRoute from "./routes"
import errorHandler from "./errorHandler";
const app = express();
const PORT: number = 3000;


app.use(express.urlencoded({ extended: true }));
app.use("/todos", GetToDosRoute)
app.use("/healthcheck", (req, res)=> {
  res.status(200).send("Healtcheck is OK 🚀")
})

app.use(errorHandler)

app.use((req, res, next) => {
  res.status(404).send(
      "<h1>Page not found on the server</h1>")
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
