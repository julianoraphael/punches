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
      const updatedPunches = [...punches];
      const date = new Date(response.data.timestamp).toLocaleDateString();
      const time = new Date(response.data.timestamp).toLocaleTimeString();
      const existingPunch = updatedPunches.find((punch) => new Date(punch.timestamp).toLocaleDateString() === date);

      if (existingPunch) {
        existingPunch.punchTimes = existingPunch.punchTimes || [];
        existingPunch.punchTimes.push(time);
        existingPunch.punchTimes.sort((a, b) => new Date(a) - new Date(b)); // Sort the punch times in ascending order
      } else {
        updatedPunches.push({
          _id: response.data._id,
          timestamp: response.data.timestamp,
          punchTimes: [time],
        });
      }

      setPunches(updatedPunches);
    } catch (error) {
      console.error('Erro ao adicionar o registro de ponto:', error);
    }
  };

  // Função para obter a data e hora atuais no formato "yyyy-mm-dd" e "hh:mm"
  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  // Função para agrupar os registros de pontos por dia e ordenar os horários em ordem crescente
  const groupPunchesByDay = () => {
    const punchesByDay = {};
    punches.forEach((punch) => {
      const date = new Date(punch.timestamp).toLocaleDateString();
      if (!punchesByDay[date]) {
        punchesByDay[date] = [punch];
      } else {
        punchesByDay[date].push(punch);
      }
    });

    // Sort the punch times in ascending order for each day
    Object.values(punchesByDay).forEach((punchesOfDay) => {
      punchesOfDay.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    });

    return punchesByDay;
  };

  // Função para formatar a hora no formato "hh:mm"
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Registro de Pontos</h1>
      <p>Momento atual: {timestamp}</p>
      <form onSubmit={handleSubmit}>
        <button type="submit">Registrar Ponto</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time(s)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupPunchesByDay()).map(([date, punchesOfDay]) => (
            <tr key={date}>
              <td>{date}</td>
              <td>{punchesOfDay.map((punch) => formatTime(new Date(punch.timestamp).toLocaleTimeString())).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
