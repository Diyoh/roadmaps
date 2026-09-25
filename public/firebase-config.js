// Paste the firebaseConfig block from your Firebase project here:
// Firebase console → Project settings (gear icon) → General → Your apps → Web app → "SDK setup and configuration" → Config.
// These values are not secret: they only identify your project. Who can read and write data is
// controlled by firestore.rules.
export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// The teacher's Google account. Whoever signs in with this email (using "Continue with Google")
// gets the teacher pages. It must match the email in firestore.rules.
export const TEACHER_EMAIL = "diyohshiloh4@gmail.com";
