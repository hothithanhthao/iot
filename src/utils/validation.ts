export function validateData(temperature: number, humidity: number): void {
    if (isNaN(temperature) || isNaN(humidity)) {
      throw new Error('Invalid data. Temperature and humidity must be numbers.');
    }
}
  