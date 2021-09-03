const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = "82f29cb10e2fc3cc6211c607dcfb40c9";
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Amazong Scraper API");
});

// GET Product Details

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
