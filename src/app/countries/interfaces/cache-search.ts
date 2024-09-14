import { Country } from "./country";
import { Region } from './Region.type';

export interface CacheSearch{
  byCapital: SearchCountries;
  byCountries: SearchCountries;
  byRegion: RegionCountries;

}

export interface SearchCountries {
  search: string;
  countries: Country[];
}

export interface RegionCountries {
  region: Region;
  countries: Country[];
}
