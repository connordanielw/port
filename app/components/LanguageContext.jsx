'use client';

import { createContext, useContext, useState } from 'react';

export const LANGUAGES = ['en', 'fr', 'de', 'it'];

export const strings = {
  en: {
    // ── Shared / Home ──────────────────────────────────────────────────────
    heroSubtitle: 'Creative Developer | New York, NY',
    coreTech: 'Core Tech',
    recentWork: 'Recent web design work',
    designDev: 'Design & Development',
    fullStackDev: 'Full-Stack Development',
    about: 'About',
    contact: 'Contact',

    // ── Navigation / chrome ───────────────────────────────────────────────
    backToMain: 'Back to main',
    toggleLanguage: 'Toggle language',
    toggleNav: 'Toggle navigation menu',

    // ── About (/info) ─────────────────────────────────────────────────────
    infoKicker: 'Web Developer / Frontend Systems / Site Editing',
    infoIntro:
      'Frontend developer focused on component architecture, responsive design, and UX-driven site management.',
    capFrontendTitle: 'Frontend Architecture',
    capFrontendText:
      'I build structured, scalable interfaces with reusable components, clear page systems, and maintainable styling.',
    capSiteTitle: 'Site Management',
    capSiteText:
      'I organize, update, and maintain live websites with attention to performance, consistency, content flow, and deployment.',
    capEditTitle: 'Editing & Polish',
    capEditText:
      'I refine layouts, copy, motion, and visual hierarchy so pages feel intentional, clean, and easy to use.',
    whatIBring: 'What I bring to a project',
    bringPara1:
      "I'm strongest where design, structure, and implementation meet: turning loose ideas into pages that are clear, usable, and easy to keep improving.",
    bringPara2:
      'I work comfortably across React and Next.js projects, with an emphasis on component organization, SCSS systems, responsive layouts, deployment, and practical edits that make a site feel finished.',
    toolsTitle: 'Tools & Technologies',
    availabilityCta:
      'Available for frontend development, portfolio builds, site cleanup, and ongoing web management.',

    // ── Contact (/contact) ────────────────────────────────────────────────
    contactTitle: 'Contact',
    messageSent: 'Message sent',
    thankYou: (name) => `Thank you, ${name}! We will be in touch soon.`,
    backToHome: 'Back to Home',
    namePlaceholder: 'Name',
    emailPlaceholder: 'Email',
    phonePlaceholder: 'Phone (optional)',
    subjectPlaceholder: 'Subject (optional)',
    messagePlaceholder: 'What would you like to know?',
    sending: 'Sending…',
    submit: 'Submit',
    sendFailed: 'Oops! Message failed. Please try again.',

    // ── Projects list (/projects) ─────────────────────────────────────────
    projectsListTitle: 'Portfolio',
    siteLabel: 'Site',
    repoLabel: 'Repo',
    projectsList: {
      cadence: {
        date: 'June 2025',
        bullets: [
          'AI-powered music library with semantic search. Upload audio or sheet music, describe it, find it by feel',
          'Natural language search backed by VoyageAI vector embeddings and pgvector cosine similarity',
          'Claude (Anthropic) expands user descriptions into rich searchable paragraphs',
          'Stack: Next.js 15, FastAPI, PostgreSQL + pgvector, Clerk auth, VoyageAI, Anthropic Claude, Railway, Vercel',
        ],
      },
      discogmvp: {
        date: 'May 2025',
        bullets: [
          'Led a five-person team through UI/UX sprints and GitHub workflow setup for a full-stack vinyl-marketplace platform',
          'Built Apple-style responsive frontend with React + SCSS Modules and full ARIA / keyboard support',
          'Implemented Node/Express API, JWT auth, dynamic filters, Stripe checkout',
          'Stack: React, Node.js, Express, PostgreSQL, JWT, Stripe, SCSS Modules',
        ],
      },
      soundpiece: {
        date: 'June 2025',
        bullets: [
          'Prototype audio-skill trading platform (Next 14 + Express monorepo) with JWT/bcrypt auth & Supabase uploads',
          'Dashboard, trade-request flow, full API covered by Jest + Supertest',
          'Automated CI/CD: Vercel frontend, AWS EC2 backend, env-safe deploy',
          'Stack: Next 14, React, SCSS Modules, Context API, Express, Prisma, PostgreSQL, Supabase, AWS EC2',
        ],
      },
      beatseq: {
        date: 'May – June 2025',
        bullets: [
          '4×16 drum-machine sequencer in React + Tone.js with pattern persistence',
          'Express + PostgreSQL backend, JWT auth, deployed on Vercel',
          'Stack: React, Tone.js, Node.js, Express, PostgreSQL, JWT, Vite, SCSS',
        ],
      },
    },

    // ── Project detail (/projects/[slug]) ─────────────────────────────────
    projectNotFound: 'Project not found.',
    backToBase: '← Back to Base',
    visitLiveSite: 'Visit Live Site',
    openedLabel: 'Opened ↗',
    livePreview: 'Live preview',
    prevLabel: '← Prev',
    nextLabel: 'Next →',
    projectDescriptions: {
      artportfolio: 'A simple visual portfolio built to let the work breathe.',
      cadence:
        'An AI-powered music library. Upload audio or sheet music, describe what it sounds like, and search your collection by feel.',
      discogmvp: 'A minimalist, music-focused e-commerce project',
    },
  },
  fr: {
    // ── Shared / Home ──────────────────────────────────────────────────────
    heroSubtitle: 'Développeur créatif | New York, NY',
    coreTech: 'Technologies principales',
    recentWork: 'Projets web récents',
    designDev: 'Conception & développement',
    fullStackDev: 'Développement full-stack',
    about: 'À propos',
    contact: 'Contact',

    // ── Navigation / chrome ───────────────────────────────────────────────
    backToMain: "Retour à l'accueil",
    toggleLanguage: 'Changer de langue',
    toggleNav: 'Ouvrir/fermer le menu de navigation',

    // ── About (/info) ─────────────────────────────────────────────────────
    infoKicker: 'Développeur Web / Systèmes Frontend / Édition de site',
    infoIntro:
      "Développeur frontend spécialisé dans l'architecture des composants, le design responsive et la gestion de sites axée sur l'expérience utilisateur.",
    capFrontendTitle: 'Architecture Frontend',
    capFrontendText:
      "Je conçois des interfaces structurées et évolutives avec des composants réutilisables, des systèmes de pages clairs et un style facile à maintenir.",
    capSiteTitle: 'Gestion de site',
    capSiteText:
      "J'organise, mets à jour et maintiens des sites web en production, avec une attention portée à la performance, à la cohérence, au flux de contenu et au déploiement.",
    capEditTitle: 'Édition & finition',
    capEditText:
      'Je peaufine les mises en page, les textes, les animations et la hiérarchie visuelle pour que chaque page paraisse intentionnelle, soignée et facile à utiliser.',
    whatIBring: "Ce que j'apporte à un projet",
    bringPara1:
      "Je suis le plus efficace là où le design, la structure et l'implémentation se rejoignent : transformer des idées encore floues en pages claires, utilisables et faciles à faire évoluer.",
    bringPara2:
      "Je suis à l'aise sur des projets React et Next.js, avec un accent sur l'organisation des composants, les systèmes SCSS, les mises en page responsives, le déploiement et les ajustements concrets qui donnent à un site une impression de finition.",
    toolsTitle: 'Outils & Technologies',
    availabilityCta:
      'Disponible pour du développement frontend, la création de portfolios, le nettoyage de sites et la gestion web continue.',

    // ── Contact (/contact) ────────────────────────────────────────────────
    contactTitle: 'Contact',
    messageSent: 'Message envoyé',
    thankYou: (name) => `Merci, ${name} ! Nous vous recontacterons bientôt.`,
    backToHome: "Retour à l'accueil",
    namePlaceholder: 'Nom',
    emailPlaceholder: 'Email',
    phonePlaceholder: 'Téléphone (facultatif)',
    subjectPlaceholder: 'Sujet (facultatif)',
    messagePlaceholder: 'Qu’aimeriez-vous savoir ?',
    sending: 'Envoi…',
    submit: 'Envoyer',
    sendFailed: "Oups ! L'envoi a échoué. Veuillez réessayer.",

    // ── Projects list (/projects) ─────────────────────────────────────────
    projectsListTitle: 'Portfolio',
    siteLabel: 'Site',
    repoLabel: 'Dépôt',
    projectsList: {
      cadence: {
        date: 'Juin 2025',
        bullets: [
          'Bibliothèque musicale alimentée par IA avec recherche sémantique. Importez un fichier audio ou une partition, décrivez-le, retrouvez-le au feeling',
          'Recherche en langage naturel appuyée par les embeddings vectoriels de VoyageAI et la similarité cosinus de pgvector',
          'Claude (Anthropic) transforme les descriptions des utilisateurs en paragraphes riches et indexables',
          'Stack : Next.js 15, FastAPI, PostgreSQL + pgvector, authentification Clerk, VoyageAI, Anthropic Claude, Railway, Vercel',
        ],
      },
      discogmvp: {
        date: 'Mai 2025',
        bullets: [
          "A dirigé une équipe de cinq personnes à travers des sprints UI/UX et la mise en place du workflow GitHub pour une plateforme full-stack de vente de vinyles",
          "Développement d'un frontend responsive de style Apple avec React + SCSS Modules et prise en charge complète ARIA / clavier",
          "Implémentation d'une API Node/Express, authentification JWT, filtres dynamiques, paiement Stripe",
          'Stack : React, Node.js, Express, PostgreSQL, JWT, Stripe, SCSS Modules',
        ],
      },
      soundpiece: {
        date: 'Juin 2025',
        bullets: [
          "Prototype de plateforme d'échange de compétences audio (monorepo Next 14 + Express) avec authentification JWT/bcrypt et téléversements Supabase",
          "Tableau de bord, flux de demandes d'échange, API entièrement couverte par Jest + Supertest",
          "CI/CD automatisé : frontend sur Vercel, backend sur AWS EC2, déploiement sécurisé par variables d'environnement",
          'Stack : Next 14, React, SCSS Modules, Context API, Express, Prisma, PostgreSQL, Supabase, AWS EC2',
        ],
      },
      beatseq: {
        date: 'Mai – Juin 2025',
        bullets: [
          'Séquenceur de boîte à rythmes 4×16 en React + Tone.js avec persistance des patterns',
          'Backend Express + PostgreSQL, authentification JWT, déployé sur Vercel',
          'Stack : React, Tone.js, Node.js, Express, PostgreSQL, JWT, Vite, SCSS',
        ],
      },
    },

    // ── Project detail (/projects/[slug]) ─────────────────────────────────
    projectNotFound: 'Projet introuvable.',
    backToBase: '← Retour à la base',
    visitLiveSite: 'Voir le site en ligne',
    openedLabel: 'Ouvert ↗',
    livePreview: 'Aperçu en direct',
    prevLabel: '← Préc.',
    nextLabel: 'Suivant →',
    projectDescriptions: {
      artportfolio: 'Un portfolio visuel simple, pensé pour laisser respirer le travail.',
      cadence:
        'Une bibliothèque musicale alimentée par IA. Importez un fichier audio ou une partition, décrivez ce à quoi cela ressemble, et parcourez votre collection au feeling.',
      discogmvp: 'Un projet e-commerce minimaliste, centré sur la musique',
    },
  },
  de: {
    // ── Shared / Home ──────────────────────────────────────────────────────
    heroSubtitle: 'Kreativentwickler | New York, NY',
    coreTech: 'Kerntechnologien',
    recentWork: 'Aktuelle Webdesign-Projekte',
    designDev: 'Design & Entwicklung',
    fullStackDev: 'Full-Stack-Entwicklung',
    about: 'Über mich',
    contact: 'Kontakt',

    // ── Navigation / chrome ───────────────────────────────────────────────
    backToMain: 'Zurück zur Startseite',
    toggleLanguage: 'Sprache wechseln',
    toggleNav: 'Navigationsmenü öffnen/schließen',

    // ── About (/info) ─────────────────────────────────────────────────────
    infoKicker: 'Webentwickler / Frontend-Systeme / Website-Pflege',
    infoIntro:
      'Frontend-Entwickler mit Fokus auf Komponentenarchitektur, responsives Design und UX-orientierte Website-Verwaltung.',
    capFrontendTitle: 'Frontend-Architektur',
    capFrontendText:
      'Ich baue strukturierte, skalierbare Oberflächen mit wiederverwendbaren Komponenten, klaren Seitensystemen und wartbarem Styling.',
    capSiteTitle: 'Website-Verwaltung',
    capSiteText:
      'Ich organisiere, aktualisiere und pflege Live-Websites mit Blick auf Performance, Konsistenz, Content-Fluss und Deployment.',
    capEditTitle: 'Feinschliff & Politur',
    capEditText:
      'Ich verfeinere Layouts, Texte, Bewegung und visuelle Hierarchie, damit Seiten durchdacht, klar und benutzerfreundlich wirken.',
    whatIBring: 'Was ich in ein Projekt einbringe',
    bringPara1:
      'Ich bin dort am stärksten, wo Design, Struktur und Umsetzung aufeinandertreffen: lose Ideen in klare, nutzbare Seiten verwandeln, die sich leicht weiterentwickeln lassen.',
    bringPara2:
      'Ich arbeite sicher mit React- und Next.js-Projekten, mit Schwerpunkt auf Komponentenorganisation, SCSS-Systemen, responsiven Layouts, Deployment und praktischen Anpassungen, die eine Website fertig wirken lassen.',
    toolsTitle: 'Tools & Technologien',
    availabilityCta:
      'Verfügbar für Frontend-Entwicklung, Portfolio-Erstellung, Website-Bereinigung und laufende Webverwaltung.',

    // ── Contact (/contact) ────────────────────────────────────────────────
    contactTitle: 'Kontakt',
    messageSent: 'Nachricht gesendet',
    thankYou: (name) => `Danke, ${name}! Wir melden uns bald bei dir.`,
    backToHome: 'Zurück zur Startseite',
    namePlaceholder: 'Name',
    emailPlaceholder: 'E-Mail',
    phonePlaceholder: 'Telefon (optional)',
    subjectPlaceholder: 'Betreff (optional)',
    messagePlaceholder: 'Was möchtest du wissen?',
    sending: 'Wird gesendet…',
    submit: 'Absenden',
    sendFailed: 'Hoppla! Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.',

    // ── Projects list (/projects) ─────────────────────────────────────────
    projectsListTitle: 'Portfolio',
    siteLabel: 'Website',
    repoLabel: 'Repo',
    projectsList: {
      cadence: {
        date: 'Juni 2025',
        bullets: [
          'KI-gestützte Musikbibliothek mit semantischer Suche. Lade Audio oder Noten hoch, beschreibe sie und finde sie nach Gefühl',
          'Suche in natürlicher Sprache, basierend auf VoyageAI-Vektor-Embeddings und pgvector-Kosinus-Ähnlichkeit',
          'Claude (Anthropic) erweitert Nutzerbeschreibungen zu ausführlichen, durchsuchbaren Absätzen',
          'Stack: Next.js 15, FastAPI, PostgreSQL + pgvector, Clerk-Auth, VoyageAI, Anthropic Claude, Railway, Vercel',
        ],
      },
      discogmvp: {
        date: 'Mai 2025',
        bullets: [
          'Leitete ein fünfköpfiges Team durch UI/UX-Sprints und den Aufbau des GitHub-Workflows für eine Full-Stack-Vinyl-Marktplatz-Plattform',
          'Entwickelte ein responsives Frontend im Apple-Stil mit React + SCSS Modules und vollständiger ARIA-/Tastaturunterstützung',
          'Implementierte Node/Express-API, JWT-Auth, dynamische Filter, Stripe-Checkout',
          'Stack: React, Node.js, Express, PostgreSQL, JWT, Stripe, SCSS Modules',
        ],
      },
      soundpiece: {
        date: 'Juni 2025',
        bullets: [
          'Prototyp einer Plattform zum Tausch von Audio-Skills (Next 14 + Express Monorepo) mit JWT/bcrypt-Auth & Supabase-Uploads',
          'Dashboard, Tausch-Anfrage-Flow, vollständige API-Abdeckung durch Jest + Supertest',
          'Automatisiertes CI/CD: Vercel-Frontend, AWS-EC2-Backend, umgebungssicheres Deployment',
          'Stack: Next 14, React, SCSS Modules, Context API, Express, Prisma, PostgreSQL, Supabase, AWS EC2',
        ],
      },
      beatseq: {
        date: 'Mai – Juni 2025',
        bullets: [
          '4×16-Drum-Machine-Sequencer in React + Tone.js mit Pattern-Speicherung',
          'Express + PostgreSQL-Backend, JWT-Auth, deployed auf Vercel',
          'Stack: React, Tone.js, Node.js, Express, PostgreSQL, JWT, Vite, SCSS',
        ],
      },
    },

    // ── Project detail (/projects/[slug]) ─────────────────────────────────
    projectNotFound: 'Projekt nicht gefunden.',
    backToBase: '← Zurück zur Basis',
    visitLiveSite: 'Live-Website besuchen',
    openedLabel: 'Geöffnet ↗',
    livePreview: 'Live-Vorschau',
    prevLabel: '← Zurück',
    nextLabel: 'Weiter →',
    projectDescriptions: {
      artportfolio: 'Ein schlichtes visuelles Portfolio, das der Arbeit Raum zum Atmen gibt.',
      cadence:
        'Eine KI-gestützte Musikbibliothek. Lade Audio oder Noten hoch, beschreibe den Klang und durchsuche deine Sammlung nach Gefühl.',
      discogmvp: 'Ein minimalistisches, musikorientiertes E-Commerce-Projekt',
    },
  },
  it: {
    // ── Shared / Home ──────────────────────────────────────────────────────
    heroSubtitle: 'Sviluppatore creativo | New York, NY',
    coreTech: 'Tecnologie principali',
    recentWork: 'Progetti web recenti',
    designDev: 'Design e sviluppo',
    fullStackDev: 'Sviluppo full-stack',
    about: 'Chi sono',
    contact: 'Contatti',

    // ── Navigation / chrome ───────────────────────────────────────────────
    backToMain: 'Torna alla home',
    toggleLanguage: 'Cambia lingua',
    toggleNav: 'Apri/chiudi il menu di navigazione',

    // ── About (/info) ─────────────────────────────────────────────────────
    infoKicker: 'Sviluppatore Web / Sistemi Frontend / Gestione del sito',
    infoIntro:
      'Sviluppatore frontend specializzato in architettura dei componenti, design responsive e gestione dei siti orientata alla UX.',
    capFrontendTitle: 'Architettura Frontend',
    capFrontendText:
      'Costruisco interfacce strutturate e scalabili con componenti riutilizzabili, sistemi di pagine chiari e uno stile facile da mantenere.',
    capSiteTitle: 'Gestione del sito',
    capSiteText:
      'Organizzo, aggiorno e mantengo siti web in produzione con attenzione alle prestazioni, alla coerenza, al flusso dei contenuti e al deployment.',
    capEditTitle: 'Editing e rifinitura',
    capEditText:
      'Perfeziono layout, testi, animazioni e gerarchia visiva affinché le pagine risultino intenzionali, pulite e facili da usare.',
    whatIBring: 'Cosa porto in un progetto',
    bringPara1:
      'Do il meglio di me dove design, struttura e implementazione si incontrano: trasformo idee ancora vaghe in pagine chiare, utilizzabili e facili da migliorare.',
    bringPara2:
      "Lavoro con disinvoltura su progetti React e Next.js, con particolare attenzione all'organizzazione dei componenti, ai sistemi SCSS, ai layout responsive, al deployment e alle modifiche pratiche che danno a un sito un aspetto rifinito.",
    toolsTitle: 'Strumenti e tecnologie',
    availabilityCta:
      'Disponibile per sviluppo frontend, realizzazione di portfolio, pulizia di siti e gestione web continuativa.',

    // ── Contact (/contact) ────────────────────────────────────────────────
    contactTitle: 'Contatti',
    messageSent: 'Messaggio inviato',
    thankYou: (name) => `Grazie, ${name}! Ti risponderemo presto.`,
    backToHome: 'Torna alla home',
    namePlaceholder: 'Nome',
    emailPlaceholder: 'Email',
    phonePlaceholder: 'Telefono (facoltativo)',
    subjectPlaceholder: 'Oggetto (facoltativo)',
    messagePlaceholder: 'Cosa vorresti sapere?',
    sending: 'Invio…',
    submit: 'Invia',
    sendFailed: 'Ops! Invio non riuscito. Riprova.',

    // ── Projects list (/projects) ─────────────────────────────────────────
    projectsListTitle: 'Portfolio',
    siteLabel: 'Sito',
    repoLabel: 'Repo',
    projectsList: {
      cadence: {
        date: 'Giugno 2025',
        bullets: [
          'Libreria musicale basata su IA con ricerca semantica. Carica un file audio o uno spartito, descrivilo, trovalo in base alla sensazione',
          'Ricerca in linguaggio naturale basata su embedding vettoriali VoyageAI e similarità coseno pgvector',
          'Claude (Anthropic) trasforma le descrizioni degli utenti in paragrafi ricchi e ricercabili',
          'Stack: Next.js 15, FastAPI, PostgreSQL + pgvector, autenticazione Clerk, VoyageAI, Anthropic Claude, Railway, Vercel',
        ],
      },
      discogmvp: {
        date: 'Maggio 2025',
        bullets: [
          "Ha guidato un team di cinque persone attraverso sprint UI/UX e l'impostazione del workflow GitHub per una piattaforma full-stack di vendita di vinili",
          'Frontend responsive in stile Apple con React + SCSS Modules e pieno supporto ARIA / da tastiera',
          'Implementazione di API Node/Express, autenticazione JWT, filtri dinamici, checkout Stripe',
          'Stack: React, Node.js, Express, PostgreSQL, JWT, Stripe, SCSS Modules',
        ],
      },
      soundpiece: {
        date: 'Giugno 2025',
        bullets: [
          'Prototipo di piattaforma di scambio di competenze audio (monorepo Next 14 + Express) con autenticazione JWT/bcrypt e upload su Supabase',
          'Dashboard, flusso di richieste di scambio, API interamente coperta da test Jest + Supertest',
          'CI/CD automatizzato: frontend su Vercel, backend su AWS EC2, deploy sicuro tramite variabili d\'ambiente',
          'Stack: Next 14, React, SCSS Modules, Context API, Express, Prisma, PostgreSQL, Supabase, AWS EC2',
        ],
      },
      beatseq: {
        date: 'Maggio – Giugno 2025',
        bullets: [
          'Sequencer per drum machine 4×16 in React + Tone.js con salvataggio dei pattern',
          'Backend Express + PostgreSQL, autenticazione JWT, distribuito su Vercel',
          'Stack: React, Tone.js, Node.js, Express, PostgreSQL, JWT, Vite, SCSS',
        ],
      },
    },

    // ── Project detail (/projects/[slug]) ─────────────────────────────────
    projectNotFound: 'Progetto non trovato.',
    backToBase: '← Torna alla base',
    visitLiveSite: 'Visita il sito live',
    openedLabel: 'Aperto ↗',
    livePreview: 'Anteprima live',
    prevLabel: '← Prec.',
    nextLabel: 'Succ. →',
    projectDescriptions: {
      artportfolio: 'Un semplice portfolio visivo pensato per lasciare respirare il lavoro.',
      cadence:
        'Una libreria musicale basata su IA. Carica un file audio o uno spartito, descrivi il suono che stai cercando ed esplora la tua collezione in base alla sensazione.',
      discogmvp: 'Un progetto e-commerce minimalista, incentrato sulla musica',
    },
  },
};

const LanguageContext = createContext({
  lang: 'en',
  t: strings.en,
  setLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  return (
    <LanguageContext.Provider value={{ lang, t: strings[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
