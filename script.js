// Function to animate progress bars
    function animateProgressBars() {
      const skillBars = document.querySelectorAll('.skill-level');
      skillBars.forEach(bar => {
        const width = bar.style.width; // Get the width from the inline style
        bar.style.width = '0'; // Reset width for animation
        setTimeout(() => {
          bar.style.width = width; // Animate to the specified width
        }, 100);
      });
    }

    // Function to check if the Skills Section is in view
    function isSkillsSectionInView() {
      const skillsSection = document.getElementById('skills');
      const rect = skillsSection.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    // Animate progress bars when the Skills Section is in view
    window.addEventListener('scroll', () => {
      if (isSkillsSectionInView()) {
        animateProgressBars();
      }
    });
 


    // Firebase configuration (Replace with your Firebase project config)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEd_V4klxXgPlWcgPz7hS812cgDJFFelQ",
  authDomain: "portfolio-website-747c1.firebaseapp.com",
  projectId: "portfolio-website-747c1",
  storageBucket: "portfolio-website-747c1.firebasestorage.app",
  messagingSenderId: "463264477627",
  appId: "1:463264477627:web:471648e445561e6353d49e",
  measurementId: "G-2FW1QM6L85"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Reference the visitors document
const visitorRef = db.collection("visitors").doc("counter");

// Update visitor count
visitorRef.get().then((doc) => {
    if (doc.exists) {
        let count = doc.data().count + 1;
        visitorRef.set({ count }); // Update count in Firestore
        document.getElementById("visitorCount").innerText = count;
    } else {
        visitorRef.set({ count: 1 }); // Initialize if not exists
        document.getElementById("visitorCount").innerText = 1;
    }
});





