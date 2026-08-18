// Imports For Server
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import helmet from 'helmet';


// Configure Server
const app = express();
const PORT = process.env.PORT || 5000;


app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
)

app.use(helmet());

app.use(express.json());


app.get('/api/health', (_, res) => {
  res.json({
    success: true,
    message: "Backend Is Running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})