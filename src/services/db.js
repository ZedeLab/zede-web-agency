import { db } from "@zede-utils/FirebaseAdmin";

export const fetchContent = async (type) => {
  try {
    const snapshot = await db.collection("content").doc(type).get();
    if (!snapshot.exists) {
      return {};
    } else {
      const data = snapshot.data();

      return { ...data };
    }
  } catch (error) {
    return { error };
  }
};

export const createContent = async (type, data) => {
  try {
    await db
      .collection("content")
      .doc(type)
      .set({ ...data });
    return data;
  } catch (error) {
    return { error };
  }
};
