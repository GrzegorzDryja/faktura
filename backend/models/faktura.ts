import client from "../db/client.ts";
// config
import { TABLES } from "../db/config.ts";
// Interface
import User from "../interfaces/User.ts";

export default {
  /**
   * Takes in the id params & checks if the todo item exists
   * in the database
   * @param id
   * @returns boolean to tell if an entry of todo exits in table
   */
  doesExistById: async ({ id }: User) => {
    const [result] = await client.query(
      `SELECT COUNT(*) count FROM ${TABLES.USERS} WHERE id = ? LIMIT 1`,
      [id],
    );
    return result.count > 0;
  },
  /**
   * Will return all the entries in the todo column
   * @returns array of todos
   */
  getAll: async () => {
    return await client.query(`SELECT * FROM ${TABLES.USERS}`);
  },
  /**
   * Takes in the id params & returns the todo item found
   * against it.
   * @param id
   * @returns object of todo item
   */
  getById: async ({ id }: User) => {
    return await client.query(
      `SELECT * FROM ${TABLES.USERS} WHERE id = ?`,
      [id],
    );
  },
  /**
   * Adds a new todo item to todo table
   * @param user
   * @param isCompleted
   */
  add: async (
    { user, password }: User,
  ) => {
    return await client.query(
      `INSERT INTO ${TABLES.USERS}(user, password) values(?, ?)`,
      [
        user,
        password
      ],
    );
  },
  /**
   * Updates the content of a single todo item
   * @param id
   * @param user
   * @param email
   * @param password
   * @returns integer (count of effect rows)
   */
  updateById: async ({ id, user, email, password }: User) => {
    const result = await client.query(
      `UPDATE ${TABLES.USERS} SET user=?, email=?, password=?, WHERE id=?`,
      [
        user,
        email,
        password,
        id
      ],
    );
    // return count of rows updated
    return result.affectedRows;
  },
  /**
   * Deletes a todo by ID
   * @param id
   * @returns integer (count of effect rows)
   */
  deleteById: async ({ id }: User) => {
    const result = await client.query(
      `DELETE FROM ${TABLES.USERS} WHERE id = ?`,
      [id],
    );
    // return count of rows updated
    return result.affectedRows;
  },
};
