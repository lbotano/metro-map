export default interface Station {
  id: number;
  name: string;
  transfers?: number[]; // Station ID's
  mapPos: { // Position in the map
    x: number,
    y: number
  };
  prevStation?: number | null; // Station ID
  nextStation?: number | null; // Station ID
}
