import { Location } from './LocationType';

export interface User {
  cell: string;
  dob: DOB;
  email: string;
  id: Id;
  location: Location;
  login: Login;
  name: Name;
  nat: string;
  phone: string;
  picture: Picture;
  registered: Registered;
}

interface DOB {
  age: number;
  date: string;
}

interface Id {
  name: string;
  value: string;
}

interface Login {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

interface Name {
  first: string;
  last: string;
  title: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Registered {
  age: number;
  date: string;
}
