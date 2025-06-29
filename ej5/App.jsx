import React, { useState } from 'react';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operacion, setOperacion] = useState('suma');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResultado('Valores inválidos');
      return;
    }

    let res = null;

    switch (operacion) {
      case 'suma':
        res = a + b;
        break;
      case 'resta':
        res = a - b;
        break;
      case 'multiplicacion':
        res = a * b;
        break;
      case 'division':
        res = b !== 0 ? a / b : 'División no permitida';
        break;
      default:
        res = 'Operación inválida';
    }

    setResultado(res);
  };

  // ❌ Desactivar botón si operación es división y num2 es cero
  const deshabilitarBoton =
    operacion === 'division' && (parseFloat(num2) === 0 || num2 === '');

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Calculadora con Validación</h2>

      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', padding: '8px' }}
      />

      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', padding: '8px' }}
      />

      <select
        value={operacion}
        onChange={(e) => setOperacion(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', padding: '8px' }}
      >
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select>

      <button
        onClick={calcular}
        disabled={deshabilitarBoton}
        style={{
          padding: '10px 20px',
          backgroundColor: deshabilitarBoton ? '#aaa' : '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: deshabilitarBoton ? 'not-allowed' : 'pointer'
        }}
      >
        Calcular
      </button>

      {deshabilitarBoton && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          No se puede dividir por cero.
        </p>
      )}

      {resultado !== null && !deshabilitarBoton && (
        <p style={{ marginTop: '20px' }}>
          <strong>Resultado:</strong> {resultado}
        </p>
      )}
    </div>
  );
}
