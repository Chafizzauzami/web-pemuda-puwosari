// Toggle menu untuk tampilan mobile
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Tutup menu saat mengklik di luar menu
document.addEventListener("click", (event) => {
  if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});

// Smooth Scroll untuk Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default
    const targetId = this.getAttribute("href"); // Ambil ID target
    const targetElement = document.querySelector(targetId); // Ambil elemen target

    if (targetElement) {
      const offset = 80; // Sesuaikan dengan tinggi navbar
      // Scroll ke elemen target dengan efek smooth
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Posisi elemen target di bagian atas viewport
      });
    }

    // Tutup menu mobile setelah mengklik link
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});

// Form submission handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Terima kasih! Pesan Anda telah dikirim.");
  this.reset();
});

// Efek perubahan navbar saat di-scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
