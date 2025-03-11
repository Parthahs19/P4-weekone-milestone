import Transaction from "../models/transaction.js";

// ✅ Add Transaction with Validation
export const addTransaction = async (req, res) => {
  try {
    const { type, amount, category, date, description, paymentMethod, status, receiptUrl } = req.body;

    // Validate required fields
    if (!type || !amount || !category) {
      return res.status(400).json({ message: "Type, Amount, and Category are required" });
    }

    const transaction = await Transaction.create({
      userId: req.user.id,
      type,
      amount,
      category,
      date,
      description,
      paymentMethod,
      status,
      receiptUrl,
    });

    res.status(201).json({ message: "Transaction added successfully", transaction });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Get Transaction by ID with User Validation
export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    // Ensure transaction belongs to the logged-in user
    if (transaction.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized access to this transaction" });
    }

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Get All Transactions with Filtering, Sorting, and Pagination
export const getAllTransactions = async (req, res) => {
  try {
    const { type, category, startDate, endDate, sortBy, order, page = 1, limit = 10 } = req.query;
    const query = { userId: req.user.id };

    // Filters
    if (type) query.type = type;
    if (category) query.category = category;
    if (startDate || endDate) {
      query.date = {};
      if (startDate) query.date.$gte = new Date(startDate);
      if (endDate) query.date.$lte = new Date(endDate);
    }

    // Sorting
    const sortOptions = {};
    if (sortBy) {
      sortOptions[sortBy] = order === "desc" ? -1 : 1;
    } else {
      sortOptions.date = -1; // Default: Newest transactions first
    }

    // Pagination
    const transactions = await Transaction.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Transaction.countDocuments(query);

    res.json({
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit),
      transactions,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Update a Transaction
export const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    if (transaction.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.json({ message: "Transaction updated successfully", updatedTransaction });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Delete Single Transaction
export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    if (transaction.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    await Transaction.findByIdAndDelete(req.params.id);

    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Delete Multiple Transactions
export const deleteMultipleTransactions = async (req, res) => {
  try {
    const { transactionIds } = req.body;

    if (!transactionIds || transactionIds.length === 0) {
      return res.status(400).json({ message: "No transaction IDs provided" });
    }

    await Transaction.deleteMany({ _id: { $in: transactionIds }, userId: req.user.id });

    res.json({ message: "Transactions deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Get Total Income and Expenses
export const getTotalAmount = async (req, res) => {
  try {
    const totals = await Transaction.aggregate([
      { $match: { userId: mongoose.Types.ObjectId(req.user.id) } },
      {
        $group: {
          _id: "$type",
          totalAmount: { $sum: "$amount" },
        },
      },
    ]);

    const totalIncome = totals.find((t) => t._id === "income")?.totalAmount || 0;
    const totalExpense = totals.find((t) => t._id === "expense")?.totalAmount || 0;

    res.json({ totalIncome, totalExpense });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Bulk Update Transactions
export const updateMultipleTransactions = async (req, res) => {
  try {
    const { transactionUpdates } = req.body;

    if (!transactionUpdates || transactionUpdates.length === 0) {
      return res.status(400).json({ message: "No transaction updates provided" });
    }

    const updatePromises = transactionUpdates.map((update) =>
      Transaction.findByIdAndUpdate(update.id, update.data, { new: true })
    );

    const updatedTransactions = await Promise.all(updatePromises);

    res.json({ message: "Transactions updated successfully", updatedTransactions });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
