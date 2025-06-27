import React, { useState } from 'react';

export default function App() {
  const [activo, setActivo] = useState('izquierdo');

  const handleClick = (lado) => {
    setActivo(lado === 'izquierdo' ? 'derecho' : 'izquierdo');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Botones Alternados</h2>
      <button
        onClick={() => handleClick('izquierdo')}
        disabled={activo !== 'izquierdo'}
      >
        Izquierdo
      </button>
      <button
        onClick={() => handleClick('derecho')}
        disabled={activo !== 'derecho'}
        style={{ marginLeft: '10px' }}
      >
        Derecho
      </button>
    </div>
  );
}
