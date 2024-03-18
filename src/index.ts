import express, { Express } from 'express';
import { config } from 'dotenv';
import { iotRouter } from './api/iot';

config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/iot', iotRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
