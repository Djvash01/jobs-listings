import { Contract } from "@enums/contract.enum";
import { Level } from "@enums/level.enum";

export interface Job {
  id:        number;
  company:   string;
  logo:      string;
  new:       boolean;
  featured:  boolean;
  position:  string;
  role:      string;
  level:     Level;
  postedAt:  string;
  contract:  Contract;
  location:  string;
  languages: string[];
  tools:     string[];
}
