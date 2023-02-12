const express = require("express");
const app = express();

require("./config/mongoose.config");

//this used for geting our data in form of json
app.use(express.json(), express.urlencoded({ extended: true}));

const jokesRoutes = require("./routes/jokes.routes");
jokesRoutes(app);

app.listen(8000, () =>console.log("the server is all fired up on port 8000 "));