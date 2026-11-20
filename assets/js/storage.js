/**
 * Autoescuole Lorenzo - Client State & Local Storage Management
 * Handles tracking numbers, applications, promo codes, cart and admin actions
 */

const STORAGE_KEYS = {
  APPLICATIONS: 'al_applications',
  RENTALS: 'al_rentals',
  FAVORITES: 'al_favorites',
  ACTIVE_PROMO: 'al_promo',
  COOKIES: 'al_cookie_consent'
};

// Default seed data for demonstrative realism
const DEFAULT_APPLICATIONS = [
  {
    trackingNumber: 'AL-2026-1001',
    type: 'patente',
    service: 'Nuovo Rilascio',
    category: 'Patente B (Auto)',
    categoryCode: 'B',
    client: {
      firstName: 'Marco',
      lastName: 'Rossi',
      email: 'marco.rossi@example.it',
      phone: '+39 340 123 4567',
      birthDate: '1998-05-14',
      city: 'Roma'
    },
    servicePrice: 680,
    adminFee: 88,
    discount: 50,
    total: 718,
    status: 'In corso',
    createdAt: '2026-11-15T10:30:00Z',
    history: [
      { date: '15/11/2026 10:30', status: 'Ricevuto', note: 'Domanda inviata con successo.' },
      { date: '16/11/2026 14:15', status: 'In verifica', note: 'Documenti di identità verificati.' },
      { date: '17/11/2026 09:00', status: 'Pagamento ricevuto', note: 'Saldo confermato con carta.' },
      { date: '18/11/2026 11:30', status: 'In corso', note: 'Pratica inoltrata alla Motorizzazione Civile.' }
    ]
  },
  {
    trackingNumber: 'AL-2026-1002',
    type: 'noleggio',
    vehicleName: 'Mercedes Classe A 200d AMG Line',
    client: {
      firstName: 'Giulia',
      lastName: 'Bianchi',
      email: 'giulia.b@example.it',
      phone: '+39 349 987 6543'
    },
    days: 7,
    startDate: '2026-12-01',
    endDate: '2026-12-08',
    rentalPrice: 510,
    adminFee: 88,
    discount: 0,
    total: 598,
    status: 'Pagamento ricevuto',
    createdAt: '2026-11-18T16:00:00Z',
    history: [
      { date: '18/11/2026 16:00', status: 'Ricevuto', note: 'Richiesta di prenotazione registrata.' },
      { date: '19/11/2026 11:20', status: 'Pagamento ricevuto', note: 'Acconto versato con bonifico.' }
    ]
  }
];

// Initialize Storage
function initStorage() {
  if (!localStorage.getItem(STORAGE_KEYS.APPLICATIONS)) {
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(DEFAULT_APPLICATIONS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.FAVORITES)) {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([]));
  }
}

initStorage();

function getApplications() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.APPLICATIONS)) || [];
  } catch (e) {
    return DEFAULT_APPLICATIONS;
  }
}

function saveApplication(app) {
  const apps = getApplications();
  apps.unshift(app);
  localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(apps));
  return app;
}

function findApplication(trackingNumber) {
  if (!trackingNumber) return null;
  const cleanNum = trackingNumber.trim().toUpperCase();
  const apps = getApplications();
  return apps.find(a => a.trackingNumber.toUpperCase() === cleanNum) || null;
}

function updateApplicationStatus(trackingNumber, newStatus, note = '') {
  const apps = getApplications();
  const app = apps.find(a => a.trackingNumber.toUpperCase() === trackingNumber.toUpperCase());
  if (app) {
    app.status = newStatus;
    const now = new Date();
    const dateStr = now.toLocaleDateString('it-IT') + ' ' + now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
    app.history = app.history || [];
    app.history.push({ date: dateStr, status: newStatus, note: note || `Stato aggiornato a ${newStatus}.` });
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(apps));
    return app;
  }
  return null;
}

function generateTrackingNumber() {
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `AL-2026-${rand}`;
}
