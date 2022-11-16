import { User } from './UserTypes';

export interface UserInfo {
  info: Info;
  results: User[];
}

interface Info {
  page: number;
  results: number;
  seed: string;
  version: string;
}
