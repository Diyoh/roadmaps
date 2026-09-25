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
  // Shown as the mentor on any roadmap that has no mentor assigned in the Mentors section,
  // with these links on roadmap cards and students' daily progress cards.
  adminName: "Diyoh Shiloh",
  adminLinks: {
    github: "https://github.com/Diyoh",
    linkedin: "",
    instagram: "https://www.instagram.com/git_commit_env"
  },
  // Every roadmap. "branch" is its branch in the repository and "path" the folder it is
  // published under (roadmaps-2b061.web.app/<path>/). The build copies each branch in, and when
  // the admin opens the hub, any roadmap missing from the list is added automatically.
  roadmaps: [
    {
      id: "dba",
      branch: "dba-career-ladder",
      path: "dba",
      title: "DBA Career Ladder",
      tagline: "Seven levels from your first SQL query to a professional database administration certification.",
      url: "/dba/",
      levels: 7,
      dailyHours: 2,
      startDate: "2026-11-01",
      order: 1
    }
  ]
};
