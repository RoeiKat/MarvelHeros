import { Thumbnail } from "./thumbnail.interface";
import { InfoUrl } from "./info.url.interface";
import { Comics } from "./Comics/comics.interface";
import { Events } from "./Events/events.interface";
import { Stories } from "./Stories/stories.interface";
import { Series } from "./Series/series.interface";

export interface Hero {
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  description: string;
  thumbnail: Thumbnail;
  urls: InfoUrl[];
  comics: Comics;
  events: Events;
  stories: Stories;
  series: Series;
}
