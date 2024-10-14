import db from "../db";

const getToDosQuery = async () => {
  try {
    const [rows, _fields] = await db.execute("SELECT * FROM to_do");
    return rows;
  } catch (error) {
    console.error("🚩", error);
    throw new Error("Error: couldn't get to dos");
  }
};

export default getToDosQuery;
