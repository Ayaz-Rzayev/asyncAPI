import db from "../db";

const deleteToDoQuery = async (id: number) => {
  try {
    const [rows, _fields] = await db.execute(
      `DELETE FROM to_do WHERE id=${id}`
    );
    return rows;
  } catch (error) {
    console.error("🚩", error);
    throw new Error("Error: deleteting to do was unseccessful");
  }
};

export default deleteToDoQuery;
