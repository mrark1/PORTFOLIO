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
 