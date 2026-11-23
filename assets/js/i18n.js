/**
 * Autoescuole Lorenzo - i18n Engine v2
 * Live IT / EN / FR language switching via data-i18n attributes
 */

const TRANSLATIONS = {
  it: {
    // Nav
    nav_home: "Home",
    nav_patenti: "Patenti",
    nav_noleggio: "Noleggio",
    nav_verifica: "Verifica Pratica",
    nav_blog: "Blog",
    nav_faq: "FAQ",
    nav_contatti: "Contatti",
    nav_area_clienti: "Area Clienti",
    nav_richiedi: "Inizia Ora",
    nav_tagline: "Autoscuola Certificata · Noleggio Luxury",

    // Hero
    hero_badge: "Autorizzazione Ministeriale n° RM-4492/2026",
    hero_title_1: "L'Autoscuola d'Eccellenza",
    hero_title_2: "& Noleggio di Prestigio",
    hero_title_3: "a Roma",
    hero_sub: "Oltre 5 anni di esperienza nella formazione di guida d'alto livello. Patenti A, B, C, D, CQC e noleggio di supercars, ammiraglie e van executive.",
    hero_cta1: "Iscriviti a un Corso",
    hero_cta2: "Scopri i Veicoli",
    stat_promo: "Promozione al 1° esame",
    stat_cats: "Categorie Patente",
    stat_exp: "Anni di Eccellenza",
    stat_fee: "Gestione Dossier",

    // Sections
    services_label: "I Nostri Servizi",
    services_title: "Due Eccellenze, Un'Unica Destinazione",
    services_sub: "Autoscuola professionale e noleggio vetture di lusso a Roma — tutto sotto un tetto.",
    patenti_label: "Autoscuola Lorenzo",
    patenti_title: "Consegui la Tua Patente con i Migliori",
    patenti_sub: "Corsi teorici e pratici personalizzati, istruttori certificati, alto tasso di promozione.",
    noleggio_label: "Noleggio Luxury",
    noleggio_title: "Flotta Esclusiva — Supercars & Executive",
    noleggio_sub: "Da 48 €/giorno. Lamborghini, Porsche, Mercedes Brabus, Range Rover e molto altro.",
    view_all_patenti: "Tutte le Patenti",
    view_all_noleggio: "Tutto il Catalogo",
    stats_label: "I Numeri Parlano",
    stats_title: "La Fiducia dei Nostri Clienti",
    testi_label: "Recensioni",
    testi_title: "Cosa Dicono i Nostri Clienti",
    cta_label: "Pronto a Partire?",
    cta_title: "Inizia Oggi il Tuo Percorso",
    cta_sub: "Contattaci su WhatsApp o compila il modulo online — rispondiamo entro 2 ore.",
    cta_btn1: "Richiedi Informazioni",
    cta_btn2: "WhatsApp Diretto",

    // Track
    track_title: "Verifica lo Stato della Tua Pratica",
    track_sub: "Inserisci il tuo numero di dossier o email per monitorare l'avanzamento in tempo reale.",
    track_search_btn: "Cerca",

    // Footer
    footer_desc: "Autoscuola professionale e noleggio luxury a Roma. Autorizzazione ministeriale n° RM-4492/2026. P.IVA IT16849201004.",
    footer_links_title: "Link Rapidi",
    footer_legal_title: "Legale",
    footer_contact_title: "Contatti",
    footer_hours: "Lun–Ven 9:00–18:30 · Sab 9:00–13:00",
    footer_bottom: "© 2026 Autoescuole Lorenzo. Tutti i diritti riservati."
  },
  en: {
    // Nav
    nav_home: "Home",
    nav_patenti: "Licenses",
    nav_noleggio: "Car Rental",
    nav_verifica: "Track Application",
    nav_blog: "Blog",
    nav_faq: "FAQ",
    nav_contatti: "Contact",
    nav_area_clienti: "Client Area",
    nav_richiedi: "Get Started",
    nav_tagline: "Certified Driving School · Luxury Rentals",

    // Hero
    hero_badge: "Ministry Authorization n° RM-4492/2026",
    hero_title_1: "Rome's Premier Driving School",
    hero_title_2: "& Luxury Car Rental",
    hero_title_3: "",
    hero_sub: "Over 5 years of excellence in professional driver training. Licenses A, B, C, D, CQC and exclusive supercar, executive sedan and luxury van rentals.",
    hero_cta1: "Enroll in a Course",
    hero_cta2: "Browse Vehicles",
    stat_promo: "First-attempt pass rate",
    stat_cats: "License Categories",
    stat_exp: "Years of Excellence",
    stat_fee: "File Management Fee",

    // Sections
    services_label: "Our Services",
    services_title: "Two Excellences, One Destination",
    services_sub: "Professional driving school and luxury car rental in Rome — all under one roof.",
    patenti_label: "Driving Academy",
    patenti_title: "Get Your License with the Best",
    patenti_sub: "Personalised theory & practical courses, certified instructors, high pass rate.",
    noleggio_label: "Luxury Rentals",
    noleggio_title: "Exclusive Fleet — Supercars & Executive",
    noleggio_sub: "From €48/day. Lamborghini, Porsche, Mercedes Brabus, Range Rover and more.",
    view_all_patenti: "All Licenses",
    view_all_noleggio: "Full Catalog",
    stats_label: "Numbers Speak",
    stats_title: "Our Clients Trust Us",
    testi_label: "Reviews",
    testi_title: "What Our Clients Say",
    cta_label: "Ready to Go?",
    cta_title: "Start Your Journey Today",
    cta_sub: "Contact us on WhatsApp or fill in the online form — we reply within 2 hours.",
    cta_btn1: "Request Information",
    cta_btn2: "Direct WhatsApp",

    // Track
    track_title: "Track Your Application Status",
    track_sub: "Enter your file reference or email to track live progress.",
    track_search_btn: "Search",

    // Footer
    footer_desc: "Professional driving school and luxury car rental in Rome. Ministry authorization n° RM-4492/2026. VAT IT16849201004.",
    footer_links_title: "Quick Links",
    footer_legal_title: "Legal",
    footer_contact_title: "Contact",
    footer_hours: "Mon–Fri 9:00–18:30 · Sat 9:00–13:00",
    footer_bottom: "© 2026 Autoescuole Lorenzo. All rights reserved."
  },
  fr: {
    // Nav
    nav_home: "Accueil",
    nav_patenti: "Permis",
    nav_noleggio: "Location",
    nav_verifica: "Suivi Dossier",
    nav_blog: "Blog",
    nav_faq: "FAQ",
    nav_contatti: "Contact",
    nav_area_clienti: "Espace Client",
    nav_richiedi: "Commencer",
    nav_tagline: "Auto-École Certifiée · Location Luxe",

    // Hero
    hero_badge: "Autorisation Ministérielle n° RM-4492/2026",
    hero_title_1: "L'Auto-École d'Excellence",
    hero_title_2: "& Location de Prestige",
    hero_title_3: "à Rome",
    hero_sub: "Plus de 5 ans d'expérience dans la formation à la conduite de haut niveau. Permis A, B, C, D, CQC et location de supercars, berlines executive et vans de luxe.",
    hero_cta1: "S'inscrire à un Cours",
    hero_cta2: "Découvrir les Véhicules",
    stat_promo: "Taux de réussite au 1er essai",
    stat_cats: "Catégories de Permis",
    stat_exp: "Ans d'Excellence",
    stat_fee: "Frais de dossier",

    // Sections
    services_label: "Nos Services",
    services_title: "Deux Excellences, Une Destination",
    services_sub: "Auto-école professionnelle et location de voitures de luxe à Rome — tout sous un même toit.",
    patenti_label: "Auto-École Lorenzo",
    patenti_title: "Obtenez Votre Permis avec les Meilleurs",
    patenti_sub: "Cours théoriques et pratiques personnalisés, moniteurs certifiés, fort taux de réussite.",
    noleggio_label: "Location Luxury",
    noleggio_title: "Flotte Exclusive — Supercars & Executive",
    noleggio_sub: "À partir de 48 €/jour. Lamborghini, Porsche, Mercedes Brabus, Range Rover et plus encore.",
    view_all_patenti: "Tous les Permis",
    view_all_noleggio: "Tout le Catalogue",
    stats_label: "Les Chiffres Parlent",
    stats_title: "La Confiance de nos Clients",
    testi_label: "Avis",
    testi_title: "Ce que Disent nos Clients",
    cta_label: "Prêt à Partir ?",
    cta_title: "Commencez Votre Parcours Aujourd'hui",
    cta_sub: "Contactez-nous sur WhatsApp ou remplissez le formulaire en ligne — réponse sous 2 heures.",
    cta_btn1: "Demander des Informations",
    cta_btn2: "WhatsApp Direct",

    // Track
    track_title: "Suivre l'État de Votre Dossier",
    track_sub: "Indiquez votre référence de dossier ou votre email pour suivre son avancée en direct.",
    track_search_btn: "Rechercher",

    // Footer
    footer_desc: "Auto-école professionnelle et location luxury à Rome. Autorisation ministérielle n° RM-4492/2026. TVA IT16849201004.",
    footer_links_title: "Liens Rapides",
    footer_legal_title: "Mentions Légales",
    footer_contact_title: "Contact",
    footer_hours: "Lun–Ven 9h–18h30 · Sam 9h–13h",
    footer_bottom: "© 2026 Autoescuole Lorenzo. Tous droits réservés."
  }
};

let currentLang = localStorage.getItem('lang') || 'it';

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'it' ? 'it' : lang === 'en' ? 'en' : 'fr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
