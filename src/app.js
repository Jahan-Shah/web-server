const express = require("express");
const path = require("path");
const forecast = require("./utils/forecast");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  res.render("index.ejs", {
    title: "Weather App",
    name: "Shah Jahan",
    credit: "Shah Jahan",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  forecast(req.query.address, (error, { location, status } = {}) => {
    if (error) {
      return res.send({ error });
    }
    res.send({
      location: location,
      forecast: status,
      address: req.query.address,
    });
  });
});

app.listen(3000, () => {
  console.log("Listening to server on port 3000");
});
