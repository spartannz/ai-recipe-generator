import "./config/env.js";
import express from "express";
import recipeRouter from "./routes.js";

const app = express();

app.use(express.json());

app.use("/api", recipeRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Running server on port" + PORT);
});

