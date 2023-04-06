import { StoriesItem } from "./stories.item.interface";

export interface Stories {
  available: number;
  collectionURI: string;
  returned: number;
  items: StoriesItem[];
}
