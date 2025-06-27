import React, { useEffect, useState } from 'react';

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        const completadas = [];
        data.filter(t => t.completed === true)
            .forEach(t => completadas.push(t));
        setTareas(completadas);
        setCargando(false);
      })
      .catch(() => {
        setError("No se pudieron cargar las tareas.");
        setCargando(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Tareas Completadas</h2>

      {cargando && <p>Cargando tareas...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!cargando && !error && (
        <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
          {tareas.map(tarea => (
            <li key={tarea.id} style={{ marginBottom: '6px' }}>
              ✅ {tarea.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
