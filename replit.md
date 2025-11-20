# Médium Amayon - Site Web Statique

## Vue d'ensemble

Site web statique et responsive pour le médium européen Médium Amayon, optimisé pour convertir les visiteurs en consultations WhatsApp (+33 7 80 78 26 81).

**Type de projet:** Site web statique (HTML/CSS/JavaScript vanilla)
**Objectif principal:** Maximiser les conversions WhatsApp via un design persuasif et mobile-first
**Public cible:** Femmes et hommes européens (France, Belgique, Suisse) avec problèmes d'amour, d'argent ou blocages personnels

## Structure du Projet

```
/
├── index.html              # Page unique complète avec toutes les sections
├── styles.css              # Styles CSS avec palette personnalisée
├── script.js               # JavaScript pour interactions et tracking
├── assets/                 # Dossier des ressources (images AI générées)
│   ├── prompts.txt         # Prompts utilisés pour génération d'images
│   ├── hero.png            # Image cosmos mystique (fond hero) ✓ INTÉGRÉE
│   ├── header-astrology.png # Image symboles astrologiques ✓ INTÉGRÉE
│   ├── client-1.png à client-10.png # 10 avatars clients ✓ INTÉGRÉS
│   └── service-*.png       # 4 illustrations services (disponibles)
├── README.txt              # Instructions de déploiement complètes
└── .gitignore              # Fichiers à ignorer
```

## Technologies Utilisées

- **HTML5** - Structure sémantique complète
- **CSS3** - Variables CSS, animations, mobile-first design
- **JavaScript Vanilla** - Aucune dépendance externe
- **Python HTTP Server** - Serveur de développement local

## Palette de Couleurs

- Fond général: Crème `#FDFCF6`
- Titres/Accents: Doré `#D4AF37`
- Textes principaux: Bleu foncé `#1A1A2E`
- Boutons CTA: Ambre `#FFB347`
- Footer: Bleu nuit `#0B1D3F`

## Sections du Site

1. **Hero Section** - Accroche émotionnelle + CTA principal WhatsApp
2. **À Propos** - Histoire et crédibilité de Médium Amayon
3. **Pourquoi Choisir** - 5 preuves concrètes (expérience, confidentialité, etc.)
4. **Services** - 4 spécialités (Amour, Argent, Protection, Tarot) avec CTAs
5. **Comment ça marche** - 4 étapes claires du processus
6. **Témoignages** - 10 témoignages clients détaillés avec avatars
7. **FAQ** - 6 questions courantes (confidentialité, paiement, durée)
8. **CTA Final** - Dernière opportunité de conversion
9. **Footer** - Informations légales et contact
10. **WhatsApp Sticky Button** - Bouton flottant visible au scroll

## Fonctionnalités JavaScript

- **Bouton WhatsApp sticky** - Apparaît après 70% du scroll du hero
- **Tracking console** - Log de tous les clics WhatsApp pour analytics
- **Animations au scroll** - Fade-in progressif des cartes et sections
- **Smooth scroll** - Navigation fluide entre ancres
- **Device detection** - Détection mobile/desktop pour optimisations
- **Performance monitoring** - Mesure des temps de chargement

## Liens WhatsApp Préremplis

Tous les boutons pointent vers `wa.me/33780782681` avec messages contextuels:
- **Amour:** "J'ai besoin d'aide pour une situation amoureuse"
- **Argent:** "J'ai un blocage financier, pouvez-vous m'aider ?"
- **Urgence:** "Situation urgente concernant [amour/argent/sécurité]"
- **Découverte:** "Je voudrais une première consultation"

## Déploiement

Le site est 100% statique et peut être déployé gratuitement sur:
- **Netlify** (recommandé) - Drag & drop ou Git
- **Vercel** - Déploiement instantané
- **GitHub Pages** - Hébergement gratuit GitHub
- **Cloudflare Pages** - CDN mondial gratuit

Voir `README.txt` pour instructions détaillées.

## Images Générées

✓ **STATUT:** Les images principales ont été générées avec AI (DALL-E 3).

**Images actives sur le site:**
- ✓ `hero.png` - Fond cosmos mystique avec symboles astrologiques (section hero)
- ✓ `header-astrology.png` - Décoration astrologique (header droite)
- ✓ `client-1.png` à `client-10.png` - 10 avatars photoréalistes pour témoignages
- ✓ `service-*.png` - 4 illustrations services (disponibles mais emojis utilisés)

**Prochaines améliorations possibles:**
- Remplacer les emojis services par les images PNG photoréalistes
- Compresser les images PNG pour optimiser les performances (TinyPNG.com)
- Ajouter lazy loading pour les images des témoignages

## Workflow de Développement

**Serveur local:** `python3 -m http.server 5000`
- Accessible sur port 5000
- Hot reload: rafraîchir le navigateur après modifications

## Optimisations Réalisées

✓ Mobile-first responsive design (breakpoints 480px, 768px)
✓ Animations CSS légères (fade-in, glow, pulse)
✓ Accessibilité AA (contraste, prefers-reduced-motion)
✓ SEO de base (meta tags, structure sémantique)
✓ Performance (CSS variables, transitions optimisées)
✓ UX conversion-optimized (CTAs multiples, trust badges)

## Prochaines Améliorations Possibles

- [ ] Intégrer vraies images photoréalistes 4K
- [ ] Ajouter Google Analytics ou Plausible
- [ ] Configurer domaine personnalisé
- [ ] Intégrer système de paiement (Stripe/PayPal)
- [ ] Ajouter versions multilingues (EN, NL, DE)
- [ ] Optimiser SEO avancé (structured data, sitemap)
- [ ] Lazy loading images pour performance
- [ ] Compression/minification CSS/JS pour production

## Contact Site

**WhatsApp:** +33 7 80 78 26 81  
**Format lien:** https://wa.me/33780782681

## Notes Techniques

- Aucune dépendance NPM/externe requise
- Compatible tous navigateurs modernes (Chrome, Safari, Firefox, Edge)
- Testé sur mobile et desktop
- Temps de chargement < 2s avec images optimisées
- 100% statique = sécurisé et facile à maintenir

## Historique des Modifications

**20 Novembre 2025** - Version 1.0
- Création initiale du site complet
- 10 sections avec contenu prêt à l'emploi
- Design responsive mobile-first
- Intégration WhatsApp avec messages préremplis
- Documentation complète (README.txt, prompts.txt)

---

*Site développé pour maximiser les conversions WhatsApp via un design bienveillant, rassurant et professionnel.*
