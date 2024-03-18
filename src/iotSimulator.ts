import axios from 'axios';

const simulateIoTDevice = async (temperature: number, humidity: number) => {
  try {
    const payload = { temperature, humidity };

    await axios.post('http://localhost:3000/api/iot', payload);

    console.log(`Data sent successfully - Temperature: ${temperature}, Humidity: ${humidity}`);

    const intervalTime = 3600000;
    const response = await axios.get(`http://localhost:3000/api/iot/average?interval=${intervalTime}`);
    const averageData = response.data;

    console.log({averageData})
  } catch (error: any) {
    console.error('Error sending data:', error.message);
  }
};

// Example: Call simulateIoTDevice with specific values
const customTemperature = 25;
const customHumidity = 60;

simulateIoTDevice(customTemperature, customHumidity);

// Set the interval to 1 hour
setInterval(() => {
  // Generate random values for temperature and humidity
  const temperature = Math.random() * 30 + 10;
  const humidity = Math.random() * 50 + 30;

  // Call simulateIoTDevice with the generated values
  simulateIoTDevice(temperature, humidity);
}, 60 * 60 * 1000);
