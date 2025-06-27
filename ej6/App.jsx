import React, { useState } from 'react';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('');

  const calcularIMC = () => {
    let p = parseFloat(peso);
    let a = parseFloat(altura);

    if (isNaN(p) || isNaN(a) || a <= 0) {
      setMensaje('Ingresá valores válidos');
      setColor('gray');
      setImc(null);
      return;
    }

    // Si la altura es mayor a 3, se asume que está en centímetros
    if (a > 3) {
      a = a / 100;
    }

    const resultado = p / (a * a);
    const imcRedondeado = resultado.toFixed(1);
    setImc(imcRedondeado);

    if (resultado < 18.5) {
      setMensaje('Nivel bajo');
      setColor('gold');
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      setMensaje('Nivel normal');
      setColor('green');
    } else if (resultado >= 25 && resultado <= 29.9) {
      setMensaje('Nivel de sobrepeso');
      setColor('orange');
    } else {
      setMensaje('Nivel de obesidad');
      setColor('red');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Calculadora de IMC</h2>

      <input
        type="number"
        step="any"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', display: 'block' }}
      />

      <input
        type="number"
        step="any"
        placeholder="Altura (m o cm)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', display: 'block' }}
      />

      <button
        onClick={calcularIMC}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Calcular
      </button>

      {mensaje && (
        <p style={{ marginTop: '20px', color: color, fontWeight: 'bold' }}>
          {imc && <>IMC: {imc} - </>}
          {mensaje}
        </p>
      )}
    </div>
  );
}
