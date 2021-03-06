const moongose = require('mongoose');

const connectDatabase = () => {
    console.log("Conectando com o banco de dados...")

    moongose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("MongoDB Conectado!"))
        .catch(err => console.log(`Erro ao conectar com o banco ${err}`))
}

module.exports = connectDatabase;