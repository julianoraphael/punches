// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [punches, setPunches] = useState([]);
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    fetchPunches();
    // Inicializa o timer para atualizar o momento atual a cada segundo
    const interval = setInterval(() => {
      setTimestamp(getCurrentDateTime());
    }, 1000);

    // Limpa o timer quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  const fetchPunches = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/punches');
      setPunches(response.data);
    } catch (error) {
      console.error('Erro ao buscar os registros de ponto:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/punches', { timestamp });
      setPunches([...punches, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar o registro de ponto:', error);
    }
  };

  // Função para obter a data e hora atuais
  const getCurrentDateTime = () => {
    const now = new Date();
    const formattedDate = now.toLocaleString();
    return formattedDate;
  };

  return (
    <div>
      <h1>Registro de Pontos</h1>
      <p>Momento atual: {timestamp}</p>
      <form onSubmit={handleSubmit}>
        <button type="submit">Registrar Ponto</button>
      </form>
      <ul>
        {punches.map((punch) => (
          <li key={punch._id}>
            {new Date(punch.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
