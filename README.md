# Autoescuole Lorenzo - Piattaforma Web Ufficiale

Piattaforma web completa per autoscuola certificata e noleggio veicoli a Roma (Italia), realizzata rigorosamente in conformità con il **Cahier des charges fonctionnel et technique v1.0**.

---

## 🚀 Architettura e Caratteristiche Principali

- **Doppio Hero Section**: Presentazione complementare di Patenti (18 categorie) e Noleggio Veicoli.
- **Calcolatore di Devis Istantaneo**: Preventivatore in tempo reale con applicazione automatica e trasparente dei frais di gestione fissi di **88 €**.
- **18 Categorie Ufficiali di Patente (`patenti.html`)**:
  - **Moto**: AM (380 €), A1 (430 €), A2 (480 €), A (580 €)
  - **Auto**: B1 (480 €), B (680 €), B96 (430 €), BE (380 €)
  - **Camion**: C1 (880 €), C1E (980 €), C (1.180 €), CE (1.280 €)
  - **Bus**: D1 (880 €), D1E (1.180 €), D (1.280 €), DE (980 €)
  - **Professionale**: CQC Merci & Persone (1.280 €)
- **Formulario Guidato in 6 Tappe (`richiesta-patente.html`)**:
  - Tappa 1: Scelta Servizio (Nuovo rilascio, Rinnovo con visita, Duplicato/Biometrico).
  - Tappa 2: Categoria di patente con prezzi ufficiali.
  - Tappa 3: Dati anagrafici completi.
  - Tappa 4: Upload documenti crittografati (< 5 MB).
  - Tappa 5: Codici promozionali (`BENVENUTO26` o `LORENZO50`).
  - Tappa 6: Riepilogo e generazione del **Numero di Tracciabilità Unico** (es. `AL-2026-XXXX`).
- **Verifica Pratica in Tempo Reale (`verifica-pratica.html`)**:
  - Ricerca per codice fascicolo con timeline dell'avanzamento dei dossier.
  - Simulatore di saldo con carta di credito e upload ricevuta di bonifico bancario.
- **Catalogo Noleggio Veicoli (`noleggio.html` & `richiesta-noleggio.html`)**:
  - Filtri per categoria (Citadine, Gamma Mercedes, Supercars, Moto).
  - Tariffe giorno / settimana / mese + 88 € frais di dossier.
- **Back-Office Amministrazione (`admin.html`)**:
  - Consultazione delle richieste in arrivo, cambio di stato in tempo reale ed esportazione CSV.
- **Conformità RGPD & Mentions Legali**:
  - Cookie banner interattivo con consenso preventivo.
  - P.IVA, REA e Autorizzazione Motorizzazione Civile (n° RM-4492/2026).
- **Pulsante WhatsApp Galleggiante**: Diretto verso `+39 378 030 2475`.

---

## 📦 Struttura dei File

```
├── index.html                 # Homepage con Hero, Devis instantané, Compteurs et Avis
├── patenti.html               # 18 Categorie ufficiali di guida
├── richiesta-patente.html     # Formulario in 6 tappe
├── noleggio.html              # Catalogo veicoli di noleggio
├── richiesta-noleggio.html    # Formulario prenotazione noleggio
├── verifica-pratica.html      # Tracciabilità online fascicoli
├── blog.html                  # Articoli e guide
├── domande-frequenti.html     # FAQ con accordéon
├── contatti.html              # Sede, orari, recapiti e WhatsApp
├── account.html               # Spazio personale clienti
├── admin.html                 # Back-office operatori
├── note-legali.html           # Dati societari e autorizzazione Motorizzazione
├── privacy-policy.html        # Informativa RGPD
├── termini-condizioni.html    # Condizioni generali di vendita
├── cookie-policy.html         # Gestione cookie
├── assets/
│   ├── css/style.css          # Design tokens (Bleu #0B3C5D, Orange #F28C28)
│   ├── js/main.js             # Logica UI globale
│   ├── js/storage.js          # Persistenza locale dei dossier e tracciabilità
│   └── images/                # Foto ufficiali di Lorenzo e veicolo d'esame a Roma
├── vercel.json                # Configurazione di routing e sicurezza per Vercel
└── package.json               # Configurazione pacchetto
```

---

## 🌐 Deploy su Vercel

Il progetto è 100% pronto per Vercel :
1. Connetti la repository GitHub su [vercel.com](https://vercel.com).
2. Seleziona il progetto `autoescuole-lorenzo` e clicca **Deploy**.
3. Vercel rileva automaticamente `vercel.json` e distribuisce il sito istantaneamente sulla rete Edge globale.
