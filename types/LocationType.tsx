export interface Location {
  city: string;
  Ccordinates: Coordinates;
  country: string;
  postcode: number;
  state: string;
  street: Street;
  timezone: TimeZone;
}

interface Coordinates {
  lattitude: string;
  longitude: string;
}

interface Street {
  name: string;
  number: number;
}

interface TimeZone {
  description: string;
  offset: string;
}