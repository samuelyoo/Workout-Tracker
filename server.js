const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

// const db = require ("./models")
const router = require("./controllers/router")
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use( express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology: true
});

router(app)

// // Routes

  
  app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
  });