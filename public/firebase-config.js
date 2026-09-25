// Firebase project settings (not secret: access is controlled by firestore.rules).
export const firebaseConfig = {
  apiKey: "AIzaSyDOfiRxJQ01cKXYe9CcT74oGorwZk551Ec",
  authDomain: "roadmaps-2b061.firebaseapp.com",
  projectId: "roadmaps-2b061",
  storageBucket: "roadmaps-2b061.firebasestorage.app",
  messagingSenderId: "85477345987",
  appId: "1:85477345987:web:f7ac249c9563752d59f076",
  measurementId: "G-EY6LZ5KXL0"
};

// The admin: sees and manages every roadmap, approves students and adds teachers.
// Sign in with Google using this email. It must match ADMIN in firestore.rules.
export const ADMIN_EMAIL = "diyohshiloh4@gmail.com";

// Name shown in the hub's header, browser tab and footer.
export const HUB = {
  name: "Roadmaps",
  // Every roadmap site. When the admin opens the hub, any roadmap missing from the list is
  // added automatically. Add an entry here for each new roadmap.
  roadmaps: [
    {
      id: "dba",
      title: "DBA Career Ladder",
      tagline: "Seven levels from your first SQL query to a professional database administration certification.",
      url: "https://roadmaps-2b061-dba.web.app/",
      levels: 7,
      dailyHours: 2,
      startDate: "2026-11-01",
      order: 1
    }
  ]
};
