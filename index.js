const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors');

const path = __dirname + '/views/dist/';

const app = express();

app.use(express.static(path));


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

const PORT = process.env.PORT || 8080;

app.get("/api", ( req, res) => {
 res.json({ message: "Bienvenido al server"})
})

require("./app/routes/routes")(app);

app.listen(PORT, () => {
    console.log("server listening on http:\\localhost:${PORT}");
})