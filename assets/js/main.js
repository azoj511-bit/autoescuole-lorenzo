/**
 * Autoescuole Lorenzo — Shared Components & Main JS v2
 */

/* ── Navigation HTML ── */
const NAV_HTML = `
<header class="site-header" id="site-header">
  <div class="container">
    <nav class="nav-inner">
      <a href="index.html" class="nav-logo" aria-label="Autoescuole Lorenzo — Home">
        <div class="nav-logo-icon">L</div>
        <div class="nav-logo-text">
          <div class="nav-logo-name">Autoescuole Lorenzo</div>
          <div class="nav-logo-sub" data-i18n="nav_tagline">Autoscuola Certificata · Noleggio Luxury</div>
        </div>
      </a>

      <ul class="nav-links">
        <li><a href="index.html" data-i18n="nav_home">Home</a></li>
        <li><a href="patenti.html" data-i18n="nav_patenti">Patenti</a></li>
        <li><a href="noleggio.html" data-i18n="nav_noleggio">Noleggio</a></li>
        <li><a href="verifica-pratica.html" data-i18n="nav_verifica">Verifica Pratica</a></li>
        <li><a href="blog.html" data-i18n="nav_blog">Blog</a></li>
        <li><a href="domande-frequenti.html" data-i18n="nav_faq">FAQ</a></li>
        <li><a href="contatti.html" data-i18n="nav_contatti">Contatti</a></li>
      </ul>

      <div class="nav-actions">
        <div class="lang-switcher" role="group" aria-label="Language">
          <button class="lang-btn" data-lang="it" onclick="setLanguage('it')">IT</button>
          <button class="lang-btn" data-lang="en" onclick="setLanguage('en')">EN</button>
          <button class="lang-btn" data-lang="fr" onclick="setLanguage('fr')">FR</button>
        </div>
        <a href="richiesta-patente.html" class="btn-nav-cta" data-i18n="nav_richiedi">Inizia Ora</a>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </div>

  <nav class="mobile-nav" id="mobile-nav">
    <ul class="mobile-nav-links">
      <li><a href="index.html" data-i18n="nav_home">Home</a></li>
      <li><a href="patenti.html" data-i18n="nav_patenti">Patenti</a></li>
      <li><a href="noleggio.html" data-i18n="nav_noleggio">Noleggio</a></li>
      <li><a href="verifica-pratica.html" data-i18n="nav_verifica">Verifica Pratica</a></li>
      <li><a href="blog.html" data-i18n="nav_blog">Blog</a></li>
      <li><a href="domande-frequenti.html" data-i18n="nav_faq">FAQ</a></li>
      <li><a href="contatti.html" data-i18n="nav_contatti">Contatti</a></li>
      <li><a href="account.html" data-i18n="nav_area_clienti">Area Clienti</a></li>
    </ul>
    <div class="mobile-lang">
      <button class="lang-btn" data-lang="it" onclick="setLanguage('it');closeMobileNav()">🇮🇹 Italiano</button>
      <button class="lang-btn" data-lang="en" onclick="setLanguage('en');closeMobileNav()">🇬🇧 English</button>
      <button class="lang-btn" data-lang="fr" onclick="setLanguage('fr');closeMobileNav()">🇫🇷 Français</button>
    </div>
    <a href="richiesta-patente.html" class="btn btn-primary" style="margin-top:24px;width:100%;justify-content:center;" data-i18n="nav_richiedi">Inizia Ora</a>
  </nav>
</header>`;

/* ── Footer HTML ── */
const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-top">
    <div class="container">
      <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;flex-wrap:wrap">
        <div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
            <div class="nav-logo-icon" style="background:var(--gold);color:var(--navy-deep);font-family:var(--font-serif);font-size:1.3rem;font-weight:900;width:42px;height:42px;border-radius:6px;display:flex;align-items:center;justify-content:center">L</div>
            <div>
              <div class="footer-brand-name">Autoescuole Lorenzo</div>
              <div class="footer-brand-sub" data-i18n="nav_tagline">Autoscuola Certificata · Noleggio Luxury</div>
            </div>
          </div>
          <p class="footer-desc" data-i18n="footer_desc">Autoscuola professionale e noleggio luxury a Roma. Autorizzazione ministeriale n° RM-4492/2026. P.IVA IT16849201004.</p>
          <div class="footer-contact" style="margin-top:20px">
            <a href="tel:+393780302475" style="font-size:.88rem;color:rgba(255,255,255,.65);display:flex;align-items:center;gap:8px;padding:4px 0">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              +39 378 030 2475
            </a>
            <a href="mailto:info@autoescuolelorenzo.it" style="font-size:.88rem;color:rgba(255,255,255,.65);display:flex;align-items:center;gap:8px;padding:4px 0">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@autoescuolelorenzo.it
            </a>
            <a href="#" style="font-size:.88rem;color:rgba(255,255,255,.65);display:flex;align-items:center;gap:8px;padding:4px 0">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Via Roma 42, 00100 Roma RM
            </a>
            <span style="font-size:.78rem;color:rgba(255,255,255,.35);display:flex;align-items:center;gap:8px;padding:4px 0" data-i18n="footer_hours">Lun–Ven 9:00–18:30 · Sab 9:00–13:00</span>
          </div>
        </div>
        <div>
          <p class="footer-heading" data-i18n="footer_links_title">Link Rapidi</p>
          <ul class="footer-links">
            <li><a href="index.html" data-i18n="nav_home">Home</a></li>
            <li><a href="patenti.html" data-i18n="nav_patenti">Patenti</a></li>
            <li><a href="noleggio.html" data-i18n="nav_noleggio">Noleggio</a></li>
            <li><a href="richiesta-patente.html">Iscrizione Corso</a></li>
            <li><a href="verifica-pratica.html" data-i18n="nav_verifica">Verifica Pratica</a></li>
            <li><a href="blog.html" data-i18n="nav_blog">Blog</a></li>
            <li><a href="domande-frequenti.html" data-i18n="nav_faq">FAQ</a></li>
            <li><a href="contatti.html" data-i18n="nav_contatti">Contatti</a></li>
          </ul>
        </div>
        <div>
          <p class="footer-heading" data-i18n="footer_legal_title">Legale</p>
          <ul class="footer-links">
            <li><a href="note-legali.html">Note Legali</a></li>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li><a href="termini-condizioni.html">Termini & Condizioni</a></li>
            <li><a href="cookie-policy.html">Cookie Policy</a></li>
          </ul>
        </div>
        <div>
          <p class="footer-heading">Social</p>
          <ul class="footer-links">
            <li><a href="#" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener">TikTok</a></li>
            <li><a href="#" target="_blank" rel="noopener">YouTube</a></li>
          </ul>
          <div style="margin-top:24px">
            <p class="footer-heading">Certificazioni</p>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="background:rgba(212,175,55,.1);border:1px solid rgba(212,175,55,.2);border-radius:6px;padding:8px 12px;font-size:.72rem;color:rgba(255,255,255,.6)">
                Auth. n° <span style="color:var(--gold)">RM-4492/2026</span>
              </div>
              <div style="background:rgba(212,175,55,.1);border:1px solid rgba(212,175,55,.2);border-radius:6px;padding:8px 12px;font-size:.72rem;color:rgba(255,255,255,.6)">
                P.IVA <span style="color:var(--gold)">IT16849201004</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
      <p style="font-size:.78rem;color:rgba(255,255,255,.35)" data-i18n="footer_bottom">© 2026 Autoescuole Lorenzo. Tutti i diritti riservati.</p>
      <div class="footer-legal-links">
        <a href="privacy-policy.html" style="font-size:.78rem;color:rgba(255,255,255,.35)">Privacy</a>
        <a href="cookie-policy.html" style="font-size:.78rem;color:rgba(255,255,255,.35)">Cookie</a>
        <a href="note-legali.html" style="font-size:.78rem;color:rgba(255,255,255,.35)">Legale</a>
      </div>
    </div>
  </div>
</footer>`;

/* ── WhatsApp Button ── */
const WHATSAPP_BTN = `
<a href="https://wa.me/393780302475?text=Ciao%2C+vorrei+informazioni+su+Autoescuole+Lorenzo"
   class="whatsapp-btn" target="_blank" rel="noopener" aria-label="WhatsApp">
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>`;

/* ── Cookie Banner ── */
const COOKIE_BANNER = `
<div id="cookie-banner" style="display:none">
  <p>Utilizziamo cookie tecnici e di analisi per migliorare la tua esperienza. <a href="cookie-policy.html">Maggiori informazioni</a></p>
  <button id="cookie-accept">Accetto</button>
</div>`;

/* ── Inject Components ── */
document.addEventListener('DOMContentLoaded', function() {
  // Inject Nav
  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.outerHTML = NAV_HTML;

  // Inject Footer
  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;

  // Inject WhatsApp
  document.body.insertAdjacentHTML('beforeend', WHATSAPP_BTN);

  // Cookie
  document.body.insertAdjacentHTML('beforeend', COOKIE_BANNER);
  if (!localStorage.getItem('cookie-consent')) {
    document.getElementById('cookie-banner').style.display = 'flex';
  }
  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem('cookie-consent', '1');
    document.getElementById('cookie-banner').style.display = 'none';
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  // Active nav
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Counters
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => observer.observe(el));
  }

  // Apply saved language
  if (typeof setLanguage === 'function') {
    setLanguage(localStorage.getItem('lang') || 'it');
  }
});

function closeMobileNav() {
  const mn = document.getElementById('mobile-nav');
  if (mn) mn.classList.remove('open');
}

function animateCounter(el) {
  const target = parseInt(el.dataset.counter, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = p < .5 ? 2*p*p : -1+(4-2*p)*p;
    el.textContent = Math.round(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
