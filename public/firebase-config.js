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

// The admin's Google account: manages every roadmap. Other teachers are added from the hub
// (Teachers section) and get teacher pages only on the roadmaps assigned to them.
// Security rules live on the Master branch (firestore.rules).
export const ADMIN_EMAIL = "diyohshiloh4@gmail.com";

// This roadmap. The id must be unique across all roadmaps (it names this roadmap's data in the
// database). hubUrl is the hub where students choose a roadmap; this roadmap is published at /dba/
// on the same address, so one sign-in covers the hub and every roadmap.
export const ROADMAP = {
  id: "ai",
  title: "AI Engineer Roadmap",
  tagline: "Four levels from your first machine learning model to deployed LLM systems and an AI engineering portfolio.",
  order: 2,
  hubUrl: "/"
};
