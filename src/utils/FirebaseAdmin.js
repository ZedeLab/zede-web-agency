import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    //   databaseURL: 'https://your-project-id.firebaseio.com'
  });
}

const db = admin.firestore();

export { db };
