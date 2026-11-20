/**
 * Autoescuole Lorenzo - Main UI & Global Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCookieConsent();
  initCounters();
});

// Mobile Navigation
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

// Cookie Consent RGPD
function initCookieConsent() {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;
  const consent = localStorage.getItem('al_cookie_consent');
  if (!consent) {
    banner.classList.remove('hidden');
  }
}

function acceptAllCookies() {
  localStorage.setItem('al_cookie_consent', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
  const banner = document.getElementById('cookieBanner');
  if (banner) banner.classList.add('hidden');
}

function acceptNecessaryCookies() {
  localStorage.setItem('al_cookie_consent', JSON.stringify({ necessary: true, analytics: false, marketing: false }));
  const banner = document.getElementById('cookieBanner');
  if (banner) banner.classList.add('hidden');
}

// Animated Statistics Counters
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target') || '0', 10);
        let start = 0;
        const duration = 1500;
        const stepTime = 30;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.textContent = target.toLocaleString('it-IT');
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(start).toLocaleString('it-IT');
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(c => observer.observe(c));
}

// Global Quote Calculator (Homepage)
const PERMIT_PRICES = {
  'AM': { name: 'Patente AM (Ciclomotori)', group: 'Moto', price: 380 },
  'A1': { name: 'Patente A1 (125cc)', group: 'Moto', price: 430 },
  'A2': { name: 'Patente A2 (fino 35kW)', group: 'Moto', price: 480 },
  'A': { name: 'Patente A (Tutte le moto)', group: 'Moto', price: 580 },
  'B1': { name: 'Patente B1 (Quadricicli)', group: 'Auto', price: 480 },
  'B': { name: 'Patente B (Auto standard)', group: 'Auto', price: 680 },
  'B96': { name: 'Patente B96 (Rimorchio medio)', group: 'Auto', price: 430 },
  'BE': { name: 'Patente BE (Rimorchio pesante)', group: 'Auto', price: 380 },
  'C1': { name: 'Patente C1 (Camion leggero)', group: 'Camion', price: 880 },
  'C1E': { name: 'Patente C1E (Camion C1 + rimorchio)', group: 'Camion', price: 980 },
  'C': { name: 'Patente C (Camion)', group: 'Camion', price: 1180 },
  'CE': { name: 'Patente CE (Autoarticolato)', group: 'Camion', price: 1280 },
  'D1': { name: 'Patente D1 (Piccoli bus)', group: 'Bus', price: 880 },
  'D1E': { name: 'Patente D1E (D1 + rimorchio)', group: 'Bus', price: 1180 },
  'D': { name: 'Patente D (Autobus)', group: 'Bus', price: 1280 },
  'DE': { name: 'Patente DE (Autobus snodato)', group: 'Bus', price: 980 },
  'CQC_P': { name: 'CQC Persone (Trasporto viaggiatori)', group: 'Professionale', price: 1280 },
  'CQC_M': { name: 'CQC Merci (Trasporto merci)', group: 'Professionale', price: 1280 }
};

const RENTAL_PRICES = {
  'clio': { name: 'Renault Clio V', cat: 'Citadine & Compacte', day: 47, week: 284, month: 940 },
  'golf': { name: 'Volkswagen Golf 8', cat: 'Citadine & Compacte', day: 58, week: 350, month: 1150 },
  'classeA': { name: 'Mercedes Classe A 200d AMG Line', cat: 'Gamme Mercedes', day: 85, week: 510, month: 1750 },
  'classeC': { name: 'Mercedes Classe C Berline', cat: 'Gamme Mercedes', day: 110, week: 660, month: 2200 },
  'bmwM4': { name: 'BMW M4 Competition', cat: 'Supercars leggère', day: 320, week: 1920, month: 6400 },
  'porsche911': { name: 'Porsche 911 Carrera S', cat: 'Supercars & Hypercars', day: 550, week: 3300, month: 11000 },
  'yamahaMT': { name: 'Yamaha MT-07', cat: 'Motos & Quads', day: 65, week: 390, month: 1300 }
};

const ADMIN_FEE = 88; // Uniform fee as required by specifications
