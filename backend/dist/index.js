"use strict";
// src/index.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 5000;
// Middleware para permitir requisições de diferentes origens
app.use((0, cors_1.default)());
// Conexão com o banco de dados MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/punches');
const db = mongoose_1.default.connection;
db.once('open', () => {
    console.log('Conectado ao banco de dados MongoDB.');
});
const PunchModel = mongoose_1.default.model('Punch', new mongoose_1.default.Schema({
    timestamp: { type: Date, required: true },
}));
// Middleware para analisar o corpo das requisições
app.use(body_parser_1.default.json());
// Middleware para permitir requisições de diferentes origens
app.use((0, cors_1.default)());
// Rotas
app.get('/api/punches', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const punches = yield PunchModel.find().sort({ timestamp: 'desc' });
    res.json(punches);
}));
app.post('/api/punches', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { timestamp } = req.body;
    const newPunch = new PunchModel({ timestamp });
    yield newPunch.save();
    res.status(201).json(newPunch);
}));
app.listen(port, () => {
    console.log(`Servidor backend rodando em http://localhost:${port}`);
});
