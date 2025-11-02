// Header scroll effect
const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Active link highlighting (scroll-spy) for both nav and side-nav
const sections = document.querySelectorAll("section[id]");
const allNavLinks = document.querySelectorAll("nav a, .side-nav a");

function highlightActiveLink() {
  const scrollPosition = window.scrollY + 200;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      allNavLinks.forEach((link) => {
        link.classList.remove("active");
        const linkHref = link.getAttribute("href");
        if (
          linkHref === `#${sectionId}` ||
          (sectionId === "home" && linkHref === "#home") ||
          (sectionId === "about" &&
            (linkHref === "#about" || link.textContent.includes("About"))) ||
          (sectionId === "events" &&
            (linkHref === "#events" || link.textContent.includes("Event"))) ||
          (sectionId === "contact" && linkHref === "#contact")
        ) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Listen for scroll events
window.addEventListener("scroll", highlightActiveLink);

// Initial call to set active link on page load
highlightActiveLink();

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const body = document.body;

if (menuToggle && nav) {
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");
    body.classList.toggle("menu-open");

    // Change icon
    if (nav.classList.contains("active")) {
      menuToggle.innerHTML = "✕";
    } else {
      menuToggle.innerHTML = "☰";
    }
  });

  // Close menu when clicking on a link
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      menuToggle.classList.remove("active");
      body.classList.remove("menu-open");
      menuToggle.innerHTML = "☰";
    });
  });

  // Close menu when clicking on overlay
  body.addEventListener("click", (e) => {
    if (
      nav.classList.contains("active") &&
      !nav.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      nav.classList.remove("active");
      menuToggle.classList.remove("active");
      body.classList.remove("menu-open");
      menuToggle.innerHTML = "☰";
    }
  });

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      nav.classList.remove("active");
      menuToggle.classList.remove("active");
      body.classList.remove("menu-open");
      menuToggle.innerHTML = "☰";
    }
  });
}

// Intersection Observer for scroll animations
const animatedElements = document.querySelectorAll(
  ".feature-card, .stat-card, .info-card, .event-card, .join-cta"
);

// Simple fade-in animation on scroll
animatedElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transition = "opacity 0.6s ease";
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      entry.target.style.opacity = "1";
    }
  });
}, observerOptions);

// Observe elements that should animate on scroll
animatedElements.forEach((el) => {
  animateOnScroll.observe(el);
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = formatNumber(target);
      clearInterval(timer);
    } else {
      element.textContent = formatNumber(Math.floor(current));
    }
  }, 16);
}

function formatNumber(num) {
  if (num >= 1000) {
    return num.toLocaleString();
  }
  return num.toString();
}

// Observe stat cards and animate counters when visible
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        entry.target.classList.add("counted");
        const statNumber = entry.target.querySelector("h2");
        if (statNumber) {
          const targetText = statNumber.textContent;
          const targetNumber = parseInt(targetText.replace(/\D/g, ""));
          if (!isNaN(targetNumber)) {
            statNumber.textContent = "0";
            setTimeout(() => {
              animateCounter(statNumber, targetNumber);
            }, 300);
          }
        }
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".stat-card").forEach((card) => {
  statObserver.observe(card);
});

// Add ripple effect to buttons
document.querySelectorAll(".btn-primary, .btn-secondary").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Smooth scroll for side navigation links
document.querySelectorAll(".side-nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId && targetId !== "#") {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});

// Add cursor glow effect on interactive elements
const interactiveElements = document.querySelectorAll(
  "a, button, .feature-card, .event-card, .stat-card"
);
interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", function () {
    this.style.transition = "all 0.3s ease";
  });
});

// Initialize on page load
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
