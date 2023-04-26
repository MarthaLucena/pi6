// Importando o packages
import express from 'express';
import Axios from 'axios';
import cors from 'cors';

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(cors());
app.use(express.json());

// importando os controllers
import adminController from './src/controllers/parceirosController.js'


parceirosController.js.rotas(app)

export default app


