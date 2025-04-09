import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      typeof: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    clerkId: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Users = mongoose.model("Users", userSchema);
