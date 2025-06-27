import React, { useState } from 'react';

const palabrasIniciales = [
  "manzana",
  "banana",
  "pera",
  "durazno",
  "frutilla",
  "mango"
];

export default function App() {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState(palabrasIniciales);
  const [error, setError] = useState("");

  const filtrar = () => {
    const textoBuscado = texto.trim().toLowerCase();

    if (textoBuscado === "") {
      setError("Por favor, escribí una palabra para filtrar.");
      setResultado([]);
      return;
    }

    setError("");

    const filtradas = palabrasIniciales.filter(p =>
      p.toLowerCase().includes(textoBuscado)
    );

    setResultado(filtradas.length > 0 ? filtradas : ["No se encontraron coincidencias."]);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Filtrar Palabras</h2>

      <input
        type="text"
        placeholder="Escribí una palabra..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{ padding: "10px", width: "250px", marginBottom: "10px" }}
      />

      <button onClick={filtrar} style={{ padding: "10px 20px" }}>
        Filtrar
      </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      <ul style={{ marginTop: "20px", paddingLeft: "0", listStyle: "none" }}>
        {resultado.map((palabra, index) => (
          <li key={index}>{palabra}</li>
        ))}
      </ul>
    </div>
  );
}
