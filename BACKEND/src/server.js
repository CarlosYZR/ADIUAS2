const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "config", ".env") });

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/estudiantes", require("./routes/estudianteRoutes"));

app.listen(3000, () => {
    console.log("Servidor ejecutándose en el puerto 3000");
});
