// src/index.ts

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware para permitir requisições de diferentes origens
app.use(cors());

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/punches');

const db = mongoose.connection;
db.once('open', () => {
  console.log('Conectado ao banco de dados MongoDB.');
});

// Model para os registros de ponto
interface Punch {
    _id: string;
    timestamp: Date;
  }
  
  const PunchModel = mongoose.model<Punch>('Punch', new mongoose.Schema({
    timestamp: { type: Date, required: true },
  }));

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Middleware para permitir requisições de diferentes origens
app.use(cors());

// Rotas
app.get('/api/punches', async (req: Request, res: Response) => {
    const punches = await PunchModel.find().sort({ timestamp: 'desc' });
    res.json(punches);
  });
  
  app.post('/api/punches', async (req: Request, res: Response) => {
    const { timestamp } = req.body;
    const newPunch = new PunchModel({ timestamp });
    await newPunch.save();
    res.status(201).json(newPunch);
  });

app.listen(port, () => {
  console.log(`Servidor backend rodando em http://localhost:${port}`);
});
