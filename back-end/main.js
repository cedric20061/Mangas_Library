const express = require("express")
const mangaRoutes = require('./routes/mangaRoutes');
const cookieParser = require('cookie-parser')
const cors =  require('cors')


const app = express();

// Configuration de CORS
app.use(cors());

// Middleware pour parser les requêtes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(mangaRoutes);
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
app.listen(port, "localhost", () =>
  console.log(`Server is listening on port ${port}`)
);
