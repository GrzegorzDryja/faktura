import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
// controller
import userController from "../controllers/users.ts";

router
  .get("/users", userController.getAllTodos)
  .post("/users", userController.createTodo)
  .get("/users/:id", userController.getTodoById)
  .put("/users/:id", userController.updateTodoById)
  .delete("/users/:id", userController.deleteTodoById);

export default router;
