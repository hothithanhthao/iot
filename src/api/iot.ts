import express, { Router } from 'express';
import { storeData, data } from '../data';
import { calculateAverageData } from '../utils/averageCalculation';
import { validateData } from '../utils/validation';

export const iotRouter: Router = express.Router();

iotRouter.post('/', (req, res) => {
  try {
    const { temperature, humidity } = req.body;

    // Basic data validation
    validateData(temperature, humidity);

    const entry = {
      temperature,
      humidity,
      timestamp: Date.now(),
    }
    // Store data
    storeData(entry);

    res.status(200).send('Data received successfully.');
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

iotRouter.get('/average', (req, res) => {
try {
    const intervalTime = req.query.interval ? parseInt(req.query.interval as string) : 3600000; // Default interval time: 1 hour
    const averageData = calculateAverageData(data, intervalTime);
    res.status(200).json(averageData);
    } catch (error: any) {
    res.status(500).send(error.message);
    }
});