import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      index: true, // Indexing for faster queries
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: [true, "Transaction type is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [1, "Amount must be at least 1"],
      max: [1000000, "Amount cannot exceed 1,000,000"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Salary",
        "Freelance",
        "Investment",
        "Food",
        "Shopping",
        "Utilities",
        "Transport",
        "Entertainment",
        "Health",
        "Education",
        "Miscellaneous",
      ],
      trim: true,
      set: (val) => val.charAt(0).toUpperCase() + val.slice(1), // Auto capitalize
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Credit Card", "Debit Card", "UPI", "Net Banking"],
      default: "Cash",
    },
    date: {
      type: Date,
      default: Date.now,
      required: [true, "Transaction date is required"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [200, "Description should not exceed 200 characters"],
    },
    status: {
      type: String,
      enum: ["Completed", "Pending", "Failed"],
      default: "Completed",
    },
    receiptUrl: {
      type: String,
      validate: {
        validator: function (v) {
          return /^https?:\/\/[^\s$.?#].[^\s]*$/.test(v); // URL validation
        },
        message: "Invalid receipt URL format",
      },
    },
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual field to format amount with currency
transactionSchema.virtual("formattedAmount").get(function () {
  return `$${this.amount.toFixed(2)}`;
});

// Indexing on important fields for query optimization
transactionSchema.index({ userId: 1, date: -1 });

export default mongoose.model("Transaction", transactionSchema);
