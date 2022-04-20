import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";

const apps = getApps();

if (!apps.length) {
  initializeApp({
    credential: cert("./certs.json"), // 👈 Path to your JSON Firebase certificate
  });
}

export default async (request, response) => {
  const db = getFirestore();
  const assetsSnap = await db
    .collection("immeubles")
    .doc("1")
    .collection("lots")
    .get();
  const assetsData = assetsSnap.docs.map((doc) => {
    return {
      uuid: doc.id,
      ...doc.data(),
    };
  });
  return assetsData;
};
