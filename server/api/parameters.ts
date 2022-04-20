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
  //const parametersSnap = await db.collection("parameters").get();
  const parametersSnap = await db.collection("parameters").get();
  const parametersData = parametersSnap.docs.map((doc) => {
    return {
      uuid: doc.id,
      ...doc.data(),
    };
  });
  return parametersData;
};
