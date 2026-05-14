const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;
app.get('/datos', (req, res) =>{
    res.json({
        nombre: 'Nayeli',
        carrera: 'Ingenieria en Sistemas'
    });
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});



