// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for fixed header
          behavior: "smooth",
        })
      }
    })
  })

  // Add active class to nav links on scroll
  const sections = document.querySelectorAll("section[id]")

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight
      const sectionTop = section.offsetTop - 100
      const sectionId = section.getAttribute("id")

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.main-nav a[href="#${sectionId}"]`)?.classList.add("active")
      } else {
        document.querySelector(`.main-nav a[href="#${sectionId}"]`)?.classList.remove("active")
      }
    })
  }

  window.addEventListener("scroll", highlightNavOnScroll)

  // Add animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".feature-card, .pricing-card, .subscription-card, .testimonial-card")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.classList.add("fade-in")
      }
    })
  }

  // Add fade-in class for CSS animation
  const style = document.createElement("style")
  style.textContent = `
    .feature-card, .pricing-card, .subscription-card, .testimonial-card {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .main-nav a.active {
      color: var(--primary);
      font-weight: 600;
    }
  `
  document.head.appendChild(style)

  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Run once on load
})

