import express from "express";
const app = express();

app.use((req, res, next) => {
  //res.json({ mesasge: "hola esto es un middleware" });
  console.log(req.method);
  next();
});

app.get("/", (req, res) => {
  res.json("hola esto es una api rest");
});

import notfound from "./src/middlewares/not_found.js";

app.use(notfound);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
