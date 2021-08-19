import mongoose from "mongoose";

export const livre = mongoose.model("livre", { titre: String });
