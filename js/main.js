/* ============================================================
   Bathera Bathware — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     PRELOADER
  ---------------------------------------------------------- */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    // Hide after bar animation finishes (~2s total)
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('hide');
        setTimeout(() => preloader.remove(), 500);
      }, 400);
    });
  }

  /* ----------------------------------------------------------
     NAVIGATION — Sticky scroll + Mobile toggle
  ---------------------------------------------------------- */
  const navbar = document.querySelector('.navbar-bathera');
  const navToggle = document.querySelector('.nav-toggle');
  const navMobile = document.querySelector('.nav-mobile');

  // Scroll detection
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navMobile.classList.toggle('open');
    });

    // Close on link click
    document.querySelectorAll('.nav-mobile a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMobile.classList.remove('open');
      });
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ----------------------------------------------------------
     GSAP ANIMATIONS
  ---------------------------------------------------------- */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Default ease config
    const ease = 'power3.out';

    /* Hero animations */
    const heroBadge   = document.querySelector('.hero-badge');
    const heroTitle   = document.querySelector('.hero-title');
    const heroSub     = document.querySelector('.hero-subtitle');
    const heroActions = document.querySelector('.hero-actions');
    const heroStats   = document.querySelector('.hero-stats');
    const heroBg      = document.querySelector('.hero-bg img');

    if (heroTitle) {
      const heroTl = gsap.timeline({ delay: 0.2 });

      if (heroBg) {
        gsap.fromTo(heroBg,
          { scale: 1.08 },
          { scale: 1, duration: 2, ease: 'power2.out' }
        );
      }

      if (heroBadge)   heroTl.fromTo(heroBadge,   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease });
      heroTl.fromTo(heroTitle,   { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease }, '-=0.5');
      if (heroSub)     heroTl.fromTo(heroSub,     { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, ease }, '-=0.6');
      if (heroActions) heroTl.fromTo(heroActions, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease }, '-=0.5');
      if (heroStats)   heroTl.fromTo(heroStats,   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease }, '-=0.4');
    }

    /* Scroll-triggered section animations */
    // Fade up on scroll — generic
    gsap.utils.toArray('.anim-fade-up').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 1, ease,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Stagger cards
    const staggerGroups = [
      { parent: '.product-grid',    child: '.product-card' },
      { parent: '.why-grid',        child: '.why-card' },
      { parent: '.showcase-grid',   child: '.showcase-item' },
      { parent: '.values-grid',     child: '.value-card' },
      { parent: '.export-regions',  child: '.region-pill' },
    ];

    staggerGroups.forEach(({ parent, child }) => {
      const parentEl = document.querySelector(parent);
      if (!parentEl) return;

      const children = gsap.utils.toArray(child, parentEl);
      if (!children.length) return;

      gsap.fromTo(children,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8, ease,
          stagger: 0.1,
          scrollTrigger: {
            trigger: parentEl,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Section titles / headers
    gsap.utils.toArray('.section-label, .section-title, .section-desc').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.9, ease,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // About section images
    const aboutImgMain   = document.querySelector('.about-img-main');
    const aboutImgAccent = document.querySelector('.about-img-accent');
    const aboutBadge     = document.querySelector('.about-badge-float');

    if (aboutImgMain) {
      gsap.fromTo(aboutImgMain,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 1.1, ease,
          scrollTrigger: { trigger: aboutImgMain, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );
    }
    if (aboutImgAccent) {
      gsap.fromTo(aboutImgAccent,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1, scale: 1, duration: 1, ease, delay: 0.3,
          scrollTrigger: { trigger: aboutImgAccent, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );
    }
    if (aboutBadge) {
      gsap.fromTo(aboutBadge,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.9, ease, delay: 0.5,
          scrollTrigger: { trigger: aboutBadge, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
    }

    // Quality section
    const qualityImg = document.querySelector('.quality-img');
    if (qualityImg) {
      gsap.fromTo(qualityImg,
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0, duration: 1.1, ease,
          scrollTrigger: { trigger: qualityImg, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );
    }

    const qualityItems = gsap.utils.toArray('.quality-item');
    if (qualityItems.length) {
      gsap.fromTo(qualityItems,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.8, ease, stagger: 0.15,
          scrollTrigger: { trigger: '.quality-list', start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
    }

    // Stats counter
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    statNumbers.forEach(el => {
      const target = parseFloat(el.getAttribute('data-count'));
      const isDecimal = String(target).includes('.');
      gsap.fromTo({ val: 0 },
        {},
        {
          val: target,
          duration: 2,
          ease: 'power2.out',
          delay: 1.2,
          onUpdate: function () {
            el.textContent = isDecimal
              ? this.targets()[0].val.toFixed(1)
              : Math.round(this.targets()[0].val);
          }
        }
      );
    });

    // Contact form
    const contactItems = gsap.utils.toArray('.contact-info-item');
    if (contactItems.length) {
      gsap.fromTo(contactItems,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.8, ease, stagger: 0.12,
          scrollTrigger: { trigger: '.contact-info-items', start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
    }

    const contactForm = document.querySelector('.contact-form-wrap');
    if (contactForm) {
      gsap.fromTo(contactForm,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease,
          scrollTrigger: { trigger: contactForm, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
    }

    // Page hero
    const pageHeroContent = document.querySelector('.page-hero-content');
    if (pageHeroContent) {
      gsap.fromTo(pageHeroContent,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease, delay: 0.3 }
      );
    }

    // Why-choose rows stagger
    const whyRows = gsap.utils.toArray('.why-row');
    if (whyRows.length) {
      gsap.fromTo(whyRows,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease, stagger: 0.12,
          scrollTrigger: { trigger: '.why-rows', start: 'top 80%', toggleActions: 'play none none none' }
        }
      );
    }

    const whyHeader = document.querySelector('.why-header-row');
    if (whyHeader) {
      gsap.fromTo(whyHeader.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.9, ease, stagger: 0.2,
          scrollTrigger: { trigger: whyHeader, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
    }

    // Parallax slider — GSAP horizontal scroll via ScrollTrigger
    const track = document.getElementById('productsTrack');
    if (track) {
      const slides = track.querySelectorAll('.pslide');
      const totalSlides = slides.length;
      // Move track by: (total width - viewport width)
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 56);

      const sliderTween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: '.products-pin-wrap',
          start: 'top top+=80',
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        }
      });

      // Also animate individual slide images for parallax depth
      slides.forEach(slide => {
        const img = slide.querySelector('.pslide-img');
        if (img) {
          gsap.fromTo(img,
            { x: '8%' },
            {
              x: '-8%',
              ease: 'none',
              scrollTrigger: {
                trigger: '.products-pin-wrap',
                start: 'top top+=80',
                end: () => `+=${Math.abs(getScrollAmount())}`,
                scrub: 2,
                invalidateOnRefresh: true,
              }
            }
          );
        }
      });
    }

  } // end gsap block

  /* ----------------------------------------------------------
     CONTACT FORM — Basic submit handler
  ---------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = contactForm.querySelector('button[type="submit"]');
      const original = btn.innerHTML;

      btn.innerHTML = '<i class="ri-loader-4-line"></i> Sending...';
      btn.disabled = true;

      // Simulate send (replace with real API call)
      setTimeout(() => {
        btn.innerHTML = '<i class="ri-check-line"></i> Message Sent!';
        btn.style.background = '#16a34a';
        setTimeout(() => {
          btn.innerHTML = original;
          btn.style.background = '';
          btn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1500);
    });
  }

  /* ----------------------------------------------------------
     PRODUCTS TRACK — Drag scroll fallback (non-pinned context)
  ---------------------------------------------------------- */
  const dragTrack = document.getElementById('productsTrack');
  if (dragTrack) {
    let isDown = false, startX = 0, scrollLeft = 0;

    const parent = dragTrack.parentElement;

    parent.addEventListener('mousedown', e => {
      isDown = true;
      parent.style.cursor = 'grabbing';
      startX = e.pageX - parent.offsetLeft;
      scrollLeft = parent.scrollLeft;
    });
    parent.addEventListener('mouseleave', () => { isDown = false; parent.style.cursor = ''; });
    parent.addEventListener('mouseup', () => { isDown = false; parent.style.cursor = ''; });
    parent.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - parent.offsetLeft;
      parent.scrollLeft = scrollLeft - (x - startX) * 1.4;
    });

    // Touch
    let touchStartX = 0;
    parent.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; scrollLeft = parent.scrollLeft; }, { passive: true });
    parent.addEventListener('touchmove', e => {
      const dx = touchStartX - e.touches[0].clientX;
      parent.scrollLeft = scrollLeft + dx * 1.2;
    }, { passive: true });
  }

  /* ----------------------------------------------------------
     PRODUCT FILTER (products page)
  ---------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card[data-category]');

  if (filterBtns.length && productCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        productCards.forEach(card => {
          const cat = card.getAttribute('data-category');
          const show = filter === 'all' || cat === filter;

          if (show) {
            card.style.display = '';
            if (typeof gsap !== 'undefined') {
              gsap.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
            }
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

})();
