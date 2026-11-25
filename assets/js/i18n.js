/**
 * Autoescuole Lorenzo — Universal Deep i18n Engine (IT / EN / FR)
 * 100% full-page live translation covering all text nodes, forms, buttons, and dynamic vehicle cards.
 */

const DICT = {
  // Navigation & Branding
  "Home": { en: "Home", fr: "Accueil" },
  "Patenti": { en: "Licenses", fr: "Permis" },
  "Noleggio": { en: "Car Rental", fr: "Location" },
  "Verifica Pratica": { en: "Track Application", fr: "Suivi Dossier" },
  "Blog": { en: "Blog", fr: "Blog" },
  "FAQ": { en: "FAQ", fr: "FAQ" },
  "Contatti": { en: "Contact", fr: "Contact" },
  "Area Clienti": { en: "Client Area", fr: "Espace Client" },
  "Inizia Ora": { en: "Get Started", fr: "Commencer" },
  "Iscrizione Corso": { en: "Course Enrollment", fr: "Inscription au Cours" },
  "Autoscuola Certificata · Noleggio Luxury": { en: "Certified Driving School · Luxury Car Rental", fr: "Auto-École Certifiée · Location Luxe" },
  "Autorizzazione Ministeriale n° RM-4492/2026": { en: "Ministry Authorization n° RM-4492/2026", fr: "Autorisation Ministérielle n° RM-4492/2026" },

  // Hero Section
  "L'Autoscuola d'Eccellenza": { en: "Rome's Premier Driving School", fr: "L'Auto-École d'Excellence" },
  "& Noleggio di Prestigio": { en: "& Luxury Car Rental", fr: "& Location de Prestige" },
  "a Roma": { en: "in Rome", fr: "à Rome" },
  "Oltre 5 anni di esperienza nella formazione di guida d'alto livello. Patenti A, B, C, D, CQC e noleggio di supercars, ammiraglie e van executive.": {
    en: "Over 5 years of excellence in professional driver training. Licenses A, B, C, D, CQC and exclusive supercar, executive sedan and luxury van rentals.",
    fr: "Plus de 5 ans d'expérience dans la formation à la conduite de haut niveau. Permis A, B, C, D, CQC et location de supercars, berlines executive et vans de luxe."
  },
  "Iscriviti a un Corso": { en: "Enroll in a Course", fr: "S'inscrire à un Cours" },
  "Scopri i Veicoli": { en: "Browse Vehicles", fr: "Découvrir les Véhicules" },
  "Promozione al 1° esame": { en: "First-attempt pass rate", fr: "Taux de réussite au 1er essai" },
  "Categorie Patente": { en: "License Categories", fr: "Catégories de Permis" },
  "Anni di Eccellenza": { en: "Years of Excellence", fr: "Ans d'Excellence" },
  "Gestione Dossier": { en: "File Management", fr: "Gestion de Dossier" },
  "Il Direttore": { en: "The Director", fr: "Le Directeur" },
  "Lorenzo Mastrantonio": { en: "Lorenzo Mastrantonio", fr: "Lorenzo Mastrantonio" },
  "Istruttore certificato Motorizzazione Civile con oltre 5 anni di esperienza nella formazione professionale alla guida sicura e responsabile.": {
    en: "Civil Motorization certified instructor with over 5 years of experience in professional safe and responsible driver training.",
    fr: "Moniteur certifié par la Motorisation Civile avec plus de 5 ans d'expérience dans la formation professionnelle à la conduite sûre et responsable."
  },
  "Istruttore Certificato": { en: "Certified Instructor", fr: "Moniteur Certifié" },
  "Motorizzazione Civile": { en: "Civil Motorization", fr: "Motorisation Civile" },
  "CQC Specialist": { en: "CQC Specialist", fr: "Spécialiste CQC" },

  // Services
  "I Nostri Servizi": { en: "Our Services", fr: "Nos Services" },
  "Due Eccellenze, Un'Unica Destinazione": { en: "Two Excellences, One Destination", fr: "Deux Excellences, Une Destination" },
  "Autoscuola professionale e noleggio vetture di lusso a Roma — tutto sotto un tetto.": {
    en: "Professional driving school and luxury car rental in Rome — all under one roof.",
    fr: "Auto-école professionnelle et location de voitures de luxe à Rome — tout sous un même toit."
  },
  "Autoscuola Lorenzo": { en: "Lorenzo Driving School", fr: "Auto-École Lorenzo" },
  "Consegui la Tua Patente con i Migliori": { en: "Get Your License with the Best", fr: "Obtenez Votre Permis avec les Meilleurs" },
  "Corsi teorici e pratici personalizzati, istruttori certificati, alto tasso di promozione.": {
    en: "Personalized theory and practical courses, certified instructors, high pass rate.",
    fr: "Cours théoriques et pratiques personnalisés, moniteurs certifiés, fort taux de réussite."
  },
  "Moto & Scooter": { en: "Motorcycle & Scooter", fr: "Moto & Scooter" },
  "Auto & Furgone": { en: "Car & Van", fr: "Voiture & Fourgonnette" },
  "Autocarro": { en: "Commercial Truck", fr: "Poids Lourd" },
  "Autobus": { en: "Bus & Coach", fr: "Autobus & Autocar" },
  "Tutte le Patenti": { en: "All Licenses", fr: "Tous les Permis" },
  "Noleggio Luxury": { en: "Luxury Rental", fr: "Location Luxury" },
  "Flotta Esclusiva — Supercars & Executive": { en: "Exclusive Fleet — Supercars & Executive", fr: "Flotte Exclusive — Supercars & Executive" },
  "Da 48 €/giorno. Lamborghini, Porsche, Mercedes Brabus, Range Rover e molto altro.": {
    en: "From €48/day. Lamborghini, Porsche, Mercedes Brabus, Range Rover and much more.",
    fr: "À partir de 48 €/jour. Lamborghini, Porsche, Mercedes Brabus, Range Rover et bien plus."
  },
  "Tutto il Catalogo": { en: "Full Catalog", fr: "Tout le Catalogue" },

  // Featured Vehicles & Catalog
  "Vetture di Punta": { en: "Featured Vehicles", fr: "Véhicules Phares" },
  "Le Stelle della Nostra Flotta": { en: "The Stars of Our Fleet", fr: "Les Étoiles de Notre Flotte" },
  "Selezione esclusiva di vetture premium disponibili immediatamente a Roma.": {
    en: "Exclusive selection of premium cars available immediately in Rome.",
    fr: "Sélection exclusive de véhicules premium disponibles immédiatement à Rome."
  },
  "Vedi tutti i 24 veicoli": { en: "View all 24 vehicles", fr: "Voir tous les 24 véhicules" },
  "Filtra:": { en: "Filter:", fr: "Filtrer :" },
  "Tutti": { en: "All", fr: "Tous" },
  "Supercar": { en: "Supercar", fr: "Supercar" },
  "Prestige": { en: "Prestige", fr: "Prestige" },
  "Sport": { en: "Sport", fr: "Sport" },
  "Mercedes": { en: "Mercedes", fr: "Mercedes" },
  "Van VIP": { en: "VIP Van", fr: "Van VIP" },
  "Citadine": { en: "City Cars", fr: "Citadines" },
  "Prenota": { en: "Book", fr: "Réserver" },
  "Prenota Ora": { en: "Book Now", fr: "Réserver" },
  "/giorno": { en: "/day", fr: "/jour" },
  "/settimana": { en: "/week", fr: "/semaine" },
  "/mese": { en: "/month", fr: "/mois" },
  "posti": { en: "seats", fr: "places" },
  "Automatico": { en: "Automatic", fr: "Automatique" },
  "Manuale": { en: "Manual", fr: "Manuel" },
  "24 Veicoli Disponibili": { en: "24 Vehicles Available", fr: "24 Véhicules Disponibles" },
  "Consegna a Domicilio": { en: "Door-to-door Delivery", fr: "Livraison à Domicile" },
  "Copertura Assicurativa Inclusa": { en: "Insurance Coverage Included", fr: "Assurance Tous Risques Incluse" },

  // Numbers & Stats
  "I Numeri Parlano": { en: "The Numbers Speak", fr: "Les Chiffres Parlent" },
  "La Fiducia dei Nostri Clienti": { en: "The Trust of Our Clients", fr: "La Confiance de nos Clients" },
  "Patenti Conseguite": { en: "Licenses Issued", fr: "Permis Obtenus" },
  "Tasso Promozione": { en: "Pass Rate", fr: "Taux de Réussite" },
  "Noleggi Completati": { en: "Rentals Completed", fr: "Locations Effectuées" },
  "Anni di Attività": { en: "Years in Business", fr: "Années d'Activité" },

  // Features
  "Perché Sceglierci": { en: "Why Choose Us", fr: "Pourquoi Nous Choisir" },
  "L'Eccellenza che Fa la Differenza": { en: "Excellence That Makes the Difference", fr: "L'Excellence qui Fait la Différence" },
  "Sei motivi per cui oltre 1.200 clienti ci hanno scelto.": {
    en: "Six reasons why over 1,200 clients have chosen us.",
    fr: "Six raisons pour lesquelles plus de 1 200 clients nous ont choisis."
  },
  "94% di Promozione": { en: "94% Pass Rate", fr: "94% de Réussite" },
  "Il tasso di successo al primo esame più alto di Roma. Metodo didattico collaudato e personalizzato.": {
    en: "The highest first-attempt success rate in Rome. Proven and customized teaching method.",
    fr: "Le taux de réussite au premier examen le plus élevé de Rome. Méthode pédagogique éprouvée et sur mesure."
  },
  "Corsi Online + Presenza": { en: "Online + Classroom Courses", fr: "Cours en Ligne + Présentiel" },
  "Teoria in e-learning con piattaforma interattiva. Lezioni pratiche in orari flessibili, anche weekend.": {
    en: "Theory via interactive e-learning platform. Practical driving lessons with flexible hours, including weekends.",
    fr: "Théorie sur plateforme e-learning interactive. Leçons de conduite pratiques à horaires flexibles, week-ends inclus."
  },
  "Autorizzazione Ministeriale": { en: "Ministry Authorization", fr: "Autorisation Ministérielle" },
  "Autoscuola riconosciuta dalla Motorizzazione Civile. Auth. n° RM-4492/2026, P.IVA IT16849201004.": {
    en: "Driving school accredited by the Civil Motorization. Auth. n° RM-4492/2026, VAT IT16849201004.",
    fr: "Auto-école reconnue par la Motorisation Civile. Auth. n° RM-4492/2026, TVA IT16849201004."
  },
  "Flotta Luxury Esclusiva": { en: "Exclusive Luxury Fleet", fr: "Flotte Luxury Exclusive" },
  "24 veicoli premium — Lamborghini, Porsche, Mercedes Brabus, Range Rover. Copertura assicurativa inclusa.": {
    en: "24 premium vehicles — Lamborghini, Porsche, Mercedes Brabus, Range Rover. Insurance coverage included.",
    fr: "24 véhicules premium — Lamborghini, Porsche, Mercedes Brabus, Range Rover. Assurance incluse."
  },
  "Ritiro e riconsegna del veicolo direttamente a casa tua, in hotel o in aeroporto su tutto il territorio romano.": {
    en: "Pickup and return of the vehicle directly at your home, hotel or airport throughout Rome.",
    fr: "Prise en charge et retour du véhicule directement à votre domicile, hôtel ou aéroport dans tout Rome."
  },
  "Supporto H24": { en: "24/7 Dedicated Support", fr: "Assistance 24h/24" },
  "Team dedicato raggiungibile via WhatsApp, email e telefono. Assistenza stradale 24/7 su tutti i noleggi.": {
    en: "Dedicated team available via WhatsApp, email and phone. 24/7 roadside assistance on all rentals.",
    fr: "Équipe dédiée joignable par WhatsApp, email et téléphone. Assistance dépannage 24/7 sur toutes les locations."
  },

  // Testimonials & CTA
  "Recensioni": { en: "Reviews", fr: "Avis Clients" },
  "Cosa Dicono i Nostri Clienti": { en: "What Our Clients Say", fr: "Ce que Disent nos Clients" },
  "Pronto a Partire?": { en: "Ready to Start?", fr: "Prêt à Partir ?" },
  "Inizia Oggi il Tuo Percorso": { en: "Start Your Journey Today", fr: "Commencez Votre Parcours Aujourd'hui" },
  "Contattaci su WhatsApp o compila il modulo online — rispondiamo entro 2 ore.": {
    en: "Contact us on WhatsApp or fill in the online form — we reply within 2 hours.",
    fr: "Contactez-nous sur WhatsApp ou remplissez le formulaire en ligne — réponse sous 2 heures."
  },
  "Richiedi Informazioni": { en: "Request Information", fr: "Demander des Informations" },
  "WhatsApp Diretto": { en: "Direct WhatsApp", fr: "WhatsApp Direct" },

  // Fee Banners & Conditions
  "Nessun chilometraggio limitato": { en: "Unlimited mileage", fr: "Kilométrage illimité" },
  "Ritiro/consegna Roma & dintorni": { en: "Pickup/delivery Rome & surroundings", fr: "Retrait/livraison Rome et environs" },
  "Deposito cauzionale restituito": { en: "Security deposit refunded", fr: "Caution remboursée" },
  "Assistenza H24": { en: "24/7 Assistance", fr: "Assistance 24h/24" },
  "Condizioni di Noleggio": { en: "Rental Terms", fr: "Conditions de Location" },
  "Tutto Incluso, Nessuna Sorpresa": { en: "All Inclusive, No Surprises", fr: "Tout Inclus, Aucune Mauvaise Surprise" },
  "Documenti Richiesti": { en: "Required Documents", fr: "Documents Requis" },
  "Carta d'identità o passaporto in corso di validità + patente di guida corrispondente alla categoria del veicolo.": {
    en: "Valid ID card or passport + driver's license matching the vehicle category.",
    fr: "Carte d'identité ou passeport en cours de validité + permis de conduire correspondant à la catégorie."
  },
  "Pagamento & Deposito": { en: "Payment & Deposit", fr: "Paiement & Caution" },
  "Pagamento anticipato via bonifico o carta di credito. Deposito cauzionale bloccato sulla carta, restituito alla restituzione.": {
    en: "Prepayment via bank transfer or credit card. Security deposit pre-authorized on card, released upon return.",
    fr: "Paiement d'avance par virement ou carte bancaire. Caution bloquée sur carte, restituée au retour."
  },
  "Assicurazione": { en: "Insurance", fr: "Assurance" },
  "Copertura RC inclusa. Furto e Kasko opzionale. Assistenza stradale H24 su tutto il territorio italiano.": {
    en: "Third-party liability included. Optional Theft & Comprehensive (Kasko). 24/7 roadside assistance across Italy.",
    fr: "Responsabilité civile incluse. Vol et Tous Risques (Kasko) en option. Dépannage 24/7 dans toute l'Italie."
  },
  "Consegna & Ritiro": { en: "Delivery & Pickup", fr: "Livraison & Restitution" },
  "Ritiro e riconsegna a Roma centro, aeroporti Fiumicino/Ciampino, hotel. Spesa di trasferta variabile su preventivo.": {
    en: "Pickup and return in central Rome, Fiumicino/Ciampino airports, hotels. Transfer fee quoted on request.",
    fr: "Prise en charge et retour à Rome centre, aéroports Fiumicino/Ciampino, hôtels. Frais de transfert sur devis."
  },
  "Vuoi Sapere di Più o Prenotare?": { en: "Want to Learn More or Book?", fr: "Vous Souhaitez en Savoir Plus ou Réserver ?" },
  "Il nostro team risponde entro 2 ore su WhatsApp.": { en: "Our team replies within 2 hours on WhatsApp.", fr: "Notre équipe répond sous 2 heures sur WhatsApp." },
  "Richiedi Preventivo": { en: "Request a Quote", fr: "Demander un Devis" },

  // Patenti Page
  "94% Promozione al 1° Esame": { en: "94% First-Attempt Pass Rate", fr: "94% de Réussite au 1er Examen" },
  "18 Categorie Disponibili": { en: "18 Categories Available", fr: "18 Catégories Disponibles" },
  "La Nostra Metodologia": { en: "Our Methodology", fr: "Notre Méthodologie" },
  "Un Approccio Personalizzato per Ogni Studente": { en: "A Personalized Approach for Every Student", fr: "Une Approche Personnalisée pour Chaque Élève" },
  "In Autoescuole Lorenzo crediamo che ogni studente sia unico. Per questo offriamo un percorso didattico su misura, combinando teoria interattiva online con esercitazioni pratiche intensive. I nostri istruttori, tutti certificati dalla Motorizzazione Civile, ti seguono passo dopo passo fino all'esame.": {
    en: "At Autoescuole Lorenzo, we believe every student is unique. We offer a tailored educational journey, combining interactive online theory with intensive practical training. Our instructors, all certified by the Civil Motorization, guide you step by step until the exam.",
    fr: "Chez Autoescuole Lorenzo, chaque élève est unique. Nous offrons un parcours pédagogique sur mesure, associant théorie interactive en ligne et formation pratique intensive. Nos moniteurs, tous certifiés par la Motorisation Civile, vous accompagnent pas à pas jusqu'à l'examen."
  },
  "Tasso di promozione": { en: "Pass rate", fr: "Taux de réussite" },
  "Patenti conseguite": { en: "Licenses issued", fr: "Permis délivrés" },
  "Anni di attività": { en: "Years in business", fr: "Années d'activité" },
  "Categorie di Patente": { en: "License Categories", fr: "Catégories de Permis" },
  "Tutte le Patenti Ufficiali": { en: "All Official Licenses", fr: "Tous les Permis Officiels" },
  "Da AM a D+E, copriamo ogni esigenza — dall'utente privato al professionista del trasporto.": {
    en: "From AM to D+E, we cover every need — from private drivers to commercial transport professionals.",
    fr: "De l'AM au D+E, nous couvrons tous les besoins — du particulier au professionnel du transport."
  },
  "Patenti Principali": { en: "Main Driving Licenses", fr: "Permis Principaux" },
  "Patenti Professionali": { en: "Commercial & Professional Licenses", fr: "Permis Professionnels" },
  "Certificazioni Speciali": { en: "Special Certifications", fr: "Certifications Spéciales" },
  "Come Funziona": { en: "How It Works", fr: "Comment Ça Marche" },
  "Il Percorso per Ottenere la Patente": { en: "The Road to Getting Your License", fr: "Le Parcours pour Obtenir Votre Permis" },
  "Iscrizione": { en: "Registration", fr: "Inscription" },
  "Teoria": { en: "Theory Course", fr: "Cours Théorique" },
  "Esame Teoria": { en: "Theory Exam", fr: "Examen Théorique" },
  "Pratica": { en: "Driving Practice", fr: "Leçons de Conduite" },
  "Patente!": { en: "License Issued!", fr: "Permis en Poche !" },
  "Pronto a Iniziare?": { en: "Ready to Begin?", fr: "Prêt à Commencer ?" },
  "Consulenza gratuita — Rispondiamo entro 2 ore su WhatsApp.": {
    en: "Free consultation — We reply within 2 hours on WhatsApp.",
    fr: "Conseil gratuit — Réponse sous 2 heures sur WhatsApp."
  },
  "Iscriviti al Corso": { en: "Enroll in the Course", fr: "S'inscrire au Cours" },
  "Contattaci su WhatsApp": { en: "Contact us on WhatsApp", fr: "Contactez-nous sur WhatsApp" },

  // Tracking & Client
  "Verifica lo Stato della Tua Pratica": { en: "Track Your Application Status", fr: "Suivre l'État de Votre Dossier" },
  "Inserisci il tuo numero di dossier o email per monitorare l'avanzamento in tempo reale.": {
    en: "Enter your file number or email to monitor live progress.",
    fr: "Indiquez votre numéro de dossier ou email pour suivre son avancée en direct."
  },
  "Cerca la tua Pratica": { en: "Search Your Application", fr: "Rechercher Votre Dossier" },
  "Cerca": { en: "Search", fr: "Rechercher" },
  "In Corso": { en: "In Progress", fr: "En Cours" },
  "Iscrizione completata": { en: "Registration completed", fr: "Inscription finalisée" },
  "Corso teoria avviato": { en: "Theory course started", fr: "Cours théorique commencé" },
  "Esame teoria": { en: "Theory exam", fr: "Examen théorique" },
  "Lezioni pratiche": { en: "Driving lessons", fr: "Leçons de conduite" },
  "Patente ottenuta": { en: "License obtained", fr: "Permis délivré" },
  "Traguardo finale": { en: "Final milestone", fr: "Objectif final atteint" },

  // Contact Page
  "Siamo Qui per Te": { en: "We Are Here for You", fr: "Nous Sommes Là pour Vous" },
  "Contattaci": { en: "Contact Us", fr: "Contactez-Nous" },
  "Rispondiamo entro 2 ore su WhatsApp. Consulenza gratuita per patenti e noleggio.": {
    en: "We reply within 2 hours on WhatsApp. Free consultation for licenses and rentals.",
    fr: "Réponse sous 2 heures sur WhatsApp. Conseil gratuit pour permis et location."
  },
  "I Nostri Recapiti": { en: "Our Contact Details", fr: "Nos Coordonnées" },
  "Parlaci del Tuo Progetto": { en: "Tell Us About Your Project", fr: "Parlez-Nous de Votre Projet" },
  "WhatsApp — Risposta rapida": { en: "WhatsApp — Fast Response", fr: "WhatsApp — Réponse Rapide" },
  "Telefono": { en: "Telephone", fr: "Téléphone" },
  "Email": { en: "Email", fr: "Email" },
  "Sede": { en: "Headquarters", fr: "Siège" },
  "Inviaci un Messaggio": { en: "Send Us a Message", fr: "Envoyez-Nous un Message" },
  "Ti risponderemo entro 2 ore lavorative.": { en: "We will reply within 2 business hours.", fr: "Nous vous répondrons sous 2 heures ouvrées." },
  "Nome *": { en: "First Name *", fr: "Prénom *" },
  "Cognome *": { en: "Last Name *", fr: "Nom *" },
  "Data di Nascita *": { en: "Date of Birth *", fr: "Date de Naissance *" },
  "Luogo di Nascita *": { en: "Place of Birth *", fr: "Lieu de Naissance *" },
  "Codice Fiscale *": { en: "Tax Code (Codice Fiscale) *", fr: "Numéro Fiscal / Identifiant *" },
  "Nazionalità *": { en: "Nationality *", fr: "Nationalité *" },
  "Indirizzo di Residenza": { en: "Residential Address", fr: "Adresse de Résidence" },
  "Categoria Patente *": { en: "License Category *", fr: "Catégorie de Permis *" },
  "Hai già una patente?": { en: "Do you already hold a driving license?", fr: "Avez-vous déjà un permis ?" },
  "Preferenza orario lezioni": { en: "Preferred lesson times", fr: "Créneau souhaité pour les leçons" },
  "Note aggiuntive": { en: "Additional Notes", fr: "Remarques complémentaires" },
  "Invia Richiesta di Iscrizione": { en: "Submit Enrollment Application", fr: "Envoyer l'Inscription" },
  "Invia Richiesta di Preventivo": { en: "Submit Quote Request", fr: "Demander un Devis" },
  "Invia Messaggio": { en: "Send Message", fr: "Envoyer le Message" },
  "Veicolo Desiderato *": { en: "Desired Vehicle *", fr: "Véhicule Souhaité *" },
  "Data inizio *": { en: "Start Date *", fr: "Date de début *" },
  "Data fine *": { en: "End Date *", fr: "Date de fin *" },
  "Ritiro *": { en: "Pickup Location *", fr: "Lieu de Retrait *" },
  "Riconsegna *": { en: "Return Location *", fr: "Lieu de Restitution *" },
  "N° Patente *": { en: "License Number *", fr: "N° de Permis *" },
  "Riepilogo Noleggio": { en: "Rental Summary", fr: "Récapitulatif Location" },

  // Footer & Legal
  "Link Rapidi": { en: "Quick Links", fr: "Liens Rapides" },
  "Legale": { en: "Legal", fr: "Mentions Légales" },
  "Note Legali": { en: "Legal Notice", fr: "Mentions Légales" },
  "Privacy Policy": { en: "Privacy Policy", fr: "Politique de Confidentialité" },
  "Termini & Condizioni": { en: "Terms & Conditions", fr: "Conditions Générales" },
  "Cookie Policy": { en: "Cookie Policy", fr: "Politique des Cookies" },
  "Certificazioni": { en: "Certifications", fr: "Certifications" },
  "Autoscuola professionale e noleggio luxury a Roma. Autorizzazione ministeriale n° RM-4492/2026. P.IVA IT16849201004.": {
    en: "Professional driving school and luxury car rental in Rome. Ministry authorization n° RM-4492/2026. VAT IT16849201004.",
    fr: "Auto-école professionnelle et location luxury à Rome. Autorisation ministérielle n° RM-4492/2026. TVA IT16849201004."
  },
  "© 2026 Autoescuole Lorenzo. Tutti i diritti riservati.": {
    en: "© 2026 Autoescuole Lorenzo. All rights reserved.",
    fr: "© 2026 Autoescuole Lorenzo. Tous droits réservés."
  }
};

let currentLang = localStorage.getItem('lang') || 'it';

function translateTextNodes(node, targetLang) {
  if (node.nodeType === Node.TEXT_NODE) {
    const raw = node.nodeValue;
    const txt = raw.trim();
    if (!txt) return;

    if (node._origText === undefined) {
      node._origText = raw;
    }

    if (targetLang === 'it') {
      node.nodeValue = node._origText;
      return;
    }

    const orig = node._origText.trim();
    if (DICT[orig] && DICT[orig][targetLang]) {
      const leading = node._origText.match(/^\s*/)[0];
      const trailing = node._origText.match(/\s*$/)[0];
      node.nodeValue = leading + DICT[orig][targetLang] + trailing;
      return;
    }

    // Dynamic pattern replacements
    let updated = orig;
    if (targetLang === 'en') {
      updated = updated
        .replace(/(\d+)\s+posti/g, '$1 seats')
        .replace(/\/giorno/g, '/day')
        .replace(/\/settimana/g, '/week')
        .replace(/\/mese/g, '/month')
        .replace(/≥\s*(\d+)\s*anni/g, '≥ $1 years')
        .replace(/(\d+)\s*anni/g, '$1 years')
        .replace(/^Da\s+/g, 'From ')
        .replace(/Fee dossier 88 € inclusa/g, '€88 file fee included')
        .replace(/Iscriviti/g, 'Enroll')
        .replace(/Prenota Ora/g, 'Book Now')
        .replace(/Prenota/g, 'Book');
    } else if (targetLang === 'fr') {
      updated = updated
        .replace(/(\d+)\s+posti/g, '$1 places')
        .replace(/\/giorno/g, '/jour')
        .replace(/\/settimana/g, '/semaine')
        .replace(/\/mese/g, '/mois')
        .replace(/≥\s*(\d+)\s*anni/g, '≥ $1 ans')
        .replace(/(\d+)\s*anni/g, '$1 ans')
        .replace(/^Da\s+/g, 'À partir de ')
        .replace(/Fee dossier 88 € inclusa/g, 'Frais de dossier 88 € inclus')
        .replace(/Iscriviti/g, "S'inscrire")
        .replace(/Prenota Ora/g, 'Réserver')
        .replace(/Prenota/g, 'Réserver');
    }

    if (updated !== orig) {
      const leading = node._origText.match(/^\s*/)[0];
      const trailing = node._origText.match(/\s*$/)[0];
      node.nodeValue = leading + updated + trailing;
    }
    return;
  }

  if (node.nodeType === Node.ELEMENT_NODE) {
    const tag = node.tagName.toLowerCase();
    if (tag === 'script' || tag === 'style' || tag === 'svg') return;

    // Placeholders
    if (node.placeholder) {
      if (node._origPlaceholder === undefined) {
        node._origPlaceholder = node.placeholder;
      }
      if (targetLang === 'it') {
        node.placeholder = node._origPlaceholder;
      } else {
        const ph = node._origPlaceholder.trim();
        if (DICT[ph] && DICT[ph][targetLang]) {
          node.placeholder = DICT[ph][targetLang];
        }
      }
    }

    // Option tags text
    if (tag === 'option') {
      if (node._origText === undefined) {
        node._origText = node.textContent;
      }
      if (targetLang === 'it') {
        node.textContent = node._origText;
      } else {
        const opt = node._origText.trim();
        if (DICT[opt] && DICT[opt][targetLang]) {
          node.textContent = DICT[opt][targetLang];
        }
      }
      return;
    }

    node.childNodes.forEach(child => translateTextNodes(child, targetLang));
  }
}

function setLanguage(lang) {
  if (lang !== 'it' && lang !== 'en' && lang !== 'fr') return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // Walk all text nodes
  if (document.body) {
    translateTextNodes(document.body, lang);
  }

  // Active buttons styling
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
  });
}

// Auto-run on load and after DOM settles
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    setLanguage(currentLang);
  }, 60);
});

// Hook into dynamic renders (like vehicle catalog filter or render)
const origPushState = history.pushState;
history.pushState = function() {
  origPushState.apply(this, arguments);
  setTimeout(() => setLanguage(currentLang), 50);
};

window.setLanguage = setLanguage;
window.currentLang = currentLang;
