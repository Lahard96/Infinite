import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Welcome endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Infinite API!' });
});

// Example endpoint
app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Hello from Infinite API',
    timestamp: new Date()
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});

export default app;