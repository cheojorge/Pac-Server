const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser')

require("./config/mongoose.config")

app.use(cors({credentiasl: true, origin:'http://localhost:3000'}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


require("./routes/process.routes")(app);
// require("./routes/funcionarios.routes")(app);
// require("./routes/vlan.routes")(app);
// require("./routes/generador.routes")(app);
// require("./routes/user.routes")(app);

app.listen(8000, () => {
    console.log("Escuchando el puerto 8000")
})