const request = require("request");

module.exports = forecast = (address, callback) => {
  const API_KEY = "7caedf1b3939ea5fdc12596eef526423";
  const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${encodeURIComponent(
    address
  )}`;

  request({ url: URL, json: true }, (err, { body } = {}) => {
    if (err) callback("Unable to connect to weather service!", undefined);
    else if (body.error) {
      callback("Unable to find the locations", undefined);
    } else {
      const current = body.current;
      const { name, region, country } = body.location;
      callback(undefined, {
        location: `${name}, ${region}, ${country}`,
        status: `${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees`,
      });
    }
  });
};
