import { IoTData } from "../types";

export const data: IoTData[] = [];

export function storeData(entry: IoTData): void {
  data.push(entry);
}
  