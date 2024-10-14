import db from "../db";
import { StatusEnum } from "../types";


const addToDoQuery = async (
  title: string,
  status: StatusEnum = StatusEnum.Open
) => {
  try {
    const [rows, _fields] = await db.execute(
      `INSERT INTO to_do(title, status) VALUES (?, ?)`,
      [title, status]
    );
    return rows;
  } catch (error) {
    console.error("🚩", error);
    throw new Error("Error: adding to do was unseccessful");
  }
};
export default addToDoQuery;
