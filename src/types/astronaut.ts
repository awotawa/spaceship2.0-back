import { Document } from "mongoose";

export interface IAstronaut extends Document {
  firstName: string;
  lastName: string;
  team:
    | "Duck Invaders"
    | "Donut Factory"
    | "Schizo Cats"
    | "Raccoons of Asgard";
  age: number;
  nationality: string;
}
