import { EventItem } from "./events.item.interface";
export interface Events {
  available: number;
  collectionURI: string;
  returned: number;
  items: EventItem[];
}
