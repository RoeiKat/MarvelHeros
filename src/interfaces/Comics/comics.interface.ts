import { ComicsItem } from "./comics.item.interface";
export interface Comics {
  available: number;
  collectionURI: string;
  returned: number;
  items: ComicsItem[];
}
