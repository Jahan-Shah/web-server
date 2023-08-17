const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  res.render("index.ejs", {
    title: "Weather App",
    name: "Shah Jahan",
  });
});

app.get("/help", (req, res) => {
  res.send("Help page");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/weather", (req, res) => {
  res.send([
    {
      Location: "Faisalabad",
      Forcast: "sunny",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Listening to server on port 3000");
});
