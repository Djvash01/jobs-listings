import { Categories } from "@enums/categories.enum";

export interface FilterEvent {
  category: Categories,
  value: string,
}
