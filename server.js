const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'src')));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});