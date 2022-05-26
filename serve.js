const express = require('express')
const router = require('express').Router()
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express()

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/api", router);

app.get("/", (req, res) => {
    res.json({ message: "API funcionando correctamente." });
});

router.get("/", (req, res) => {
    res.json({ message: "API funcionando correctamente." });
});

require("./app/routes/user.routes.js")(router);

var port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`El servidor de API está inicializado en el host http://localhost:${port}`);
});