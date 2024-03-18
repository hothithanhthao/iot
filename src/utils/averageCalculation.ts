import { IoTData } from "../types";

export function calculateAverageData(data: IoTData[], interval: number): IoTData | null {
  try {
    if (data.length === 0) {
      throw new Error('No data available for averaging.');
    }

    const currentTime = Date.now();
    const intervalStart = currentTime - interval;

    const relevantData = data.filter((entry) => entry.timestamp >= intervalStart);

    if (relevantData.length === 0) {
      throw new Error(`No data available for averaging in the last ${interval / 60000} minutes.`);
    }

    const sum = relevantData.reduce(
      (accumulator, currentValue) => {
        accumulator.temperature += currentValue.temperature;
        accumulator.humidity += currentValue.humidity;
        return accumulator;
      },
      { temperature: 0, humidity: 0 }
    );

    const totalEntries = relevantData.length;
    const averageData: IoTData = {
      temperature: sum.temperature / totalEntries,
      humidity: sum.humidity / totalEntries,
      timestamp: currentTime,
    };

    return averageData;
  } catch (error) {
    throw error;
  }
}
