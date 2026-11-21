/* ==========================================================================
   PERSONAL CURRICULUM VITAE - VANILLA JAVASCRIPT
   Author: Haura Khadrinur
   Specialization: Software Development Engineering
   Features:
   - Sticky navbar elevation on scroll
   - Mobile slide-out navigation drawer
   - Scrollspy active link highlighter
   - IntersectionObserver scroll animations (slide-up reveal)
   - Dynamic progress bar width animation
   - High-fidelity PDF/Print CV trigger
   - Formal contact form interaction
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. ELEMEN DOM UTAMA
  const navbar = document.getElementById('navbar');
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav-link');
  const printTriggers = document.querySelectorAll('.print-trigger');
  const currentYear = document.getElementById('current-year');
  const contactForm = document.getElementById('contact-form');
  const formStatusAlert = document.getElementById('form-status-alert');

  // Inisialisasi tahun hak cipta di footer
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. STICKY NAVBAR ELEVATION ON SCROLL
  // --------------------------------------------------------------------------
  const handleNavbarScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Jalankan sekali saat inisialisasi

  // --------------------------------------------------------------------------
  // 3. MOBILE NAVIGATION DRAWER
  // --------------------------------------------------------------------------
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  if (navClose && navMenu) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  // Tutup drawer mobile saat salah satu tautan navigasi diklik
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. SCROLLSPY (ACTIVE NAV LINK HIGHLIGHTER)
  // --------------------------------------------------------------------------
  const trackedSections = document.querySelectorAll('section[id]');

  const handleScrollspy = () => {
    const scrollPosition = window.pageYOffset + 140;

    trackedSections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

      if (matchingLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(l => l.classList.remove('active'));
          matchingLink.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScrollspy, { passive: true });
  handleScrollspy();

  // --------------------------------------------------------------------------
  // 5. INTERSECTION OBSERVER: SLIDE-UP ANIMATIONS & SKILL PROGRESS BARS
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const progressBars = document.querySelectorAll('.progress-bar');

  // Observer untuk efek kemunculan halus (reveal on scroll)
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Observer untuk animasi progress bar kemampuan teknis
  const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          const targetPercent = bar.getAttribute('data-percent') || '80%';
          bar.style.width = targetPercent;
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  } else {
    // Fallback jika bagian tidak ditemukan, aktifkan langsung
    progressBars.forEach(bar => {
      const targetPercent = bar.getAttribute('data-percent') || '80%';
      bar.style.width = targetPercent;
    });
  }

  // --------------------------------------------------------------------------
  // 6. TRIGGER CETAK & UNDUH CV (PDF HIGH FIDELITY)
  // --------------------------------------------------------------------------
  printTriggers.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      // Pastikan seluruh progress bar terisi sebelum mencetak
      progressBars.forEach(bar => {
        const targetPercent = bar.getAttribute('data-percent') || '80%';
        bar.style.width = targetPercent;
      });

      // Menjalankan dialog cetak / Simpan ke PDF bawaan sistem browser
      window.print();
    });
  });

  // --------------------------------------------------------------------------
  // 7. FORMULIR KONTAK FORMAL INTERAKTIF
  // --------------------------------------------------------------------------
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const senderName = document.getElementById('sender-name').value.trim();
      const senderEmail = document.getElementById('sender-email').value.trim();
      const submitBtn = document.getElementById('btn-submit-message');
      const originalText = submitBtn.innerHTML;

      // Status pengiriman interaktif
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Memproses Pesan...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        if (formStatusAlert) {
          formStatusAlert.className = 'form-status-alert show-success';
          formStatusAlert.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            Terima kasih <strong>${senderName}</strong> (${senderEmail}). Pesan inquiry formal Anda telah berhasil diterima. Saya akan segera menghubungi Anda kembali melalui email resmi.
          `;

          // Reset formulir
          contactForm.reset();

          // Sembunyikan notifikasi setelah 7 detik
          setTimeout(() => {
            formStatusAlert.style.display = 'none';
            formStatusAlert.className = 'form-status-alert';
          }, 7000);
        }
      }, 900);
    });
  }

});
