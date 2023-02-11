import express from "express";
import api from "./api";
import views from "./views";
import dotenv from "dotenv";
import * as hbs from "express-handlebars";
import connectToMongo from "./core/mongo";
import swaggerUi from "swagger-ui-express";

const app = express();

const handlebars = hbs.create({
  defaultLayout: "main",
});
dotenv.config();
app.use(express.static("public"));
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/../views`);
connectToMongo();

app.use("/api", api);
app.use("/", views);
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup("./swagger.yml"));

const port = 3020;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
