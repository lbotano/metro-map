import Station from './Station';

export default interface Line {
  id: number;
  name: string;
  color: string;
  stations: Station[];
}
