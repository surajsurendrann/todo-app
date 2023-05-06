const todoModel = require("../models/todoModel");

getTodo = async (req, res) => {
  const todo = await todoModel.find();
  res.status(200).json(todo);
};

saveTodo = async (req, res) => {
  const text = new todoModel(req.body);
  try {
    await text.save();
    console.log("Added successfully");
    res.status(200).json({
      success: true,
      message: "Added to list",
    });
  } catch (error) {
    console.log(error);
  }
};

updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  todoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => {
      res.status(201).json("Updated");
    })
    .catch((err) => {
      console.log(err);
    });
};

deleteTodo = async (req, res) => {
  const _id = req.params;
  todoModel
    .findByIdAndDelete(_id)
    .then(() => {
      res.status(201).json("Deleted");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getTodo, saveTodo, updateTodo, deleteTodo };
