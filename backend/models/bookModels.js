import mongoose from "mongoose";

const bookShema = mongoose.Schema(
  {
    title: {
      type: String,
      requied: true,
    },

    author: {
      type: String,
      requied: true,
    },

    publishYear: {
      type: Number,
      requied: true,
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model('Cat', bookShema);
