require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoute = require("./auth/auth.route")
const connectDatabase = require("./database/database")
const userRoute = require('./users/users.route')

const port = process.env.PORT || 3001;
const app = express();

connectDatabase();
app.use(cors());
app.use(express.json())

app.use("/user", userRoute)
app.use("/auth", authRoute);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`
    )
})
