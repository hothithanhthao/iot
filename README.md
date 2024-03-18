# IoT Backend

This project implements a basic IoT backend server using Node.js and TypeScript. It includes APIs for receiving IoT data, simulating data from an IoT device every hour, and processing the received data.

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:  
`git clone https://github.com/your-username/iot-backend.git`
2. Go to iot-backend repository  
`cd iot-backend`
3. Do npm install  
`npm install`
4. Run development server. The server will start http://localhost:3000.  
`npm run test`

## Testing
There are 2 ways to test
### Make an API call request through POSTMAN

#### Send the IoT data with temperature and humidity
POST request: http://localhost:3000/api/iot  
Payload: 
{
    "temperature": -6,
    "humidity": 9
}

#### Get average temperature and humidity with interval timr

GET request: http://localhost:3000/api/iot/average?interval={intervalTime}  
intervalTime is a request query. By default, it will be 3600000 (1hour).

### Use simulator
1.  Run simulator server  
`npm run simulate`

***Note: In the simulator, it will first send the first entry immediately when the simulator server is started.  
Then it will send other entry by every hours. If we don't want to wait for 1 hour. Just replace 60 * 60 * 1000 at line 35 in iotSimulator.ts with your preferred time.
