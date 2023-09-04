const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

const ejemploRoutes = require('./ejemplo');

app.use('/', ejemploRoutes);

const PORT = process.env.PORT || 3000;

app.get("/api", ( req, res) => {
 res.json({ message: "Bienvenido al server"})
})


app.listen(PORT, () => {
    console.log("server listening on http:\\localhost:${PORT}");
})
