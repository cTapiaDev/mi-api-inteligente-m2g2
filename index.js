// Crea un servidor Express básico que escuche en el puerto 3000 
// y cargue las variables de entorno desde un archivo .env
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

// Crea un endpoint GET en /status que devuelva un JSON con { status: 'ok', timestamp: new Date() }
app.get('/status', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Crea un endpoint POST en /chat que reciba en el body un JSON con una propiedad "pregunta"
// La pregunta no debe estar vacía.
// Usa el cliente de OpenAI para obtener una respuesta del modelo "gpt-3.5-turbo".
// Devuelve la respuesta generada en un JSON. Maneja los errores.
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(express.json());

app.post('/chat', async (req, res) => {
  const { pregunta } = req.body;
    if (!pregunta || typeof pregunta !== 'string' || pregunta.trim() === '') {
        return res.status(400).json({ error: 'La pregunta no debe estar vacía.' });
    }
    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: pregunta }],
        });
        const respuesta = response.data.choices[0].message.content;
        res.json({ respuesta });
    } catch (error) {
        console.error('Error al comunicarse con OpenAI:', error);
        res.status(500).json({ error: 'Error al obtener la respuesta de OpenAI.' });
    }
});

