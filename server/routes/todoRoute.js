const {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoControllers");

const router = require("express").Router();

router.get("/", getTodo);
router.post("/save", saveTodo);
router.put("/update", updateTodo);
router.delete("/delete/:_id", deleteTodo);

module.exports = router;
