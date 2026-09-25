// Paste the firebaseConfig block from your Firebase project here:
// Firebase console → Project settings (gear icon) → General → Your apps → Web app → "SDK setup and configuration" → Config.
// These values are not secret: they only identify your project. Who can read and write data is
// controlled by firestore.rules.
export const firebaseConfig = {
  apiKey: "AIzaSyDOfiRxJQ01cKXYe9CcT74oGorwZk551Ec",
  authDomain: "roadmaps-2b061.firebaseapp.com",
  projectId: "roadmaps-2b061",
  storageBucket: "roadmaps-2b061.firebasestorage.app",
  messagingSenderId: "85477345987",
  appId: "1:85477345987:web:f7ac249c9563752d59f076",
  measurementId: "G-EY6LZ5KXL0"
};

// The teacher's Google account. Whoever signs in with this email (using "Continue with Google")
// gets the teacher pages. It must match the email in firestore.rules.
export const TEACHER_EMAIL = "diyohshiloh4@gmail.com";
