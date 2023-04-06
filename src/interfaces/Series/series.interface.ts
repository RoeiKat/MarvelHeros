import { SeriesItem } from "./series.item.interface";
export interface Series {
  available: number;
  collectionURI: string;
  returned: number;
  items: SeriesItem[];
}
