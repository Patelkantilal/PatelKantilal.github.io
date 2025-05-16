document.addEventListener('DOMContentLoaded', function() {
  // Toggle mobile menu
  const menuBtn = document.querySelector('.menu-btn');
  const navbar = document.querySelector('.navbar ul');
  
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      navbar.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (menuBtn.classList.contains('active')) {
        menuBtn.classList.remove('active');
        navbar.classList.remove('active');
      }
    });
  });
  
  // Download CV functionality
  const downloadCvBtn = document.getElementById('download-cv');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const cvUrl = this.getAttribute('data-cv-url');
      
      if (cvUrl) {
        // Create a temporary anchor element to trigger the download
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Kantilal_Resume.pdf'; // You can change the filename if needed
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  }

  // Active menu item based on scroll position
  function updateActiveNavItem() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navbar a');
    
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 300) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').substring(1) === current) {
        item.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNavItem);
  updateActiveNavItem();
  
  // Animate progress bars when scrolling to skills section
  function animateProgressBars() {
    const skillsSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress');
    
    if (!skillsSection) return;
    
    const sectionPosition = skillsSection.getBoundingClientRect();
    
    if (sectionPosition.top < window.innerHeight - 100 && sectionPosition.bottom > 0) {
      setTimeout(() => {
        progressBars.forEach(bar => {
          const value = bar.getAttribute('data-value');
          bar.style.width = value;
        });
      }, 200);
      
      // Remove event listener after animation
      window.removeEventListener('scroll', animateProgressBars);
    }
  }
  
  window.addEventListener('scroll', animateProgressBars);
  
  // Projects filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects
      const filterValue = this.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        card.style.transform = 'scale(0.8)';
        card.style.opacity = '0';
        
        setTimeout(() => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.transform = 'scale(1)';
              card.style.opacity = '1';
            }, 100);
          } else {
            card.style.display = 'none';
          }
        }, 300);
      });
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Reveal animations on scroll
  const revealElements = document.querySelectorAll('.service-card, .project-card, .contact-card, .timeline-item');
  
  function revealOnScroll() {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
  
  // Add hover effects for service icons
  const serviceIcons = document.querySelectorAll('.service-icon');
  serviceIcons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    icon.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1) rotate(0)';
    });
  });
  
  // Add hover effects for contact icons
  const contactIcons = document.querySelectorAll('.contact-icon');
  contactIcons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
      this.style.transform = 'rotate(360deg)';
    });
    
    icon.addEventListener('mouseout', function() {
      this.style.transform = 'rotate(0)';
    });
  });
});