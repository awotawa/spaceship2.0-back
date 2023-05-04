import { IAstronaut } from "../types/astronaut";
import { model, Schema } from "mongoose";

const astronautSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IAstronaut>("Astronaut", astronautSchema);
