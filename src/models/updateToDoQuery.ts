import db from "../db";

const updateToDoQuery = async (id: any, title?: string, status?: string) => {
  try {
    const [rows, _fields] = await db.execute(
      `UPDATE to_do SET title="${title}", status="${status}" WHERE id="${id}"`
    );
    return rows;
  } catch (error) {
    console.error("🚩", error);
    throw new Error("Error: updating to do was unseccessful");
  }
};

export default updateToDoQuery;
