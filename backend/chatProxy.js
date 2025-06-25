require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.NVAPI_KEY,
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

app.post('/api/chat', async (req, res) => {
  const { query, options = {} } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: 'nvidia/llama-3.1-nemotron-nano-4b-v1.1',
      messages: [
        { role: 'system', content: 'detailed thinking off' },
        { role: 'user', content: query },
      ],
      temperature: 0,
      top_p: 0.95,
      max_tokens: 4096,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: false,
      ...options,
    });
    const content = completion.choices[0]?.message?.content || '';
    res.json({ content });
  } catch (err) {
    res.status(500).json({ error: 'Proxy error', details: err.message });
  }
});

app.listen(port, () => {
  console.log(`Chat proxy server running on port ${port}`);
}); 