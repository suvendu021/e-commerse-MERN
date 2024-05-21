import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Categogy",
      required: true,
    },
    productPhoto: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
