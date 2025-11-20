╔═══════════════════════════════════════════════════════════════════════════════╗
║                    GRAND MAÎTRE AMAYON - SITE WEB STATIQUE                    ║
║                         Instructions de Déploiement                           ║
╚═══════════════════════════════════════════════════════════════════════════════╝

📋 CONTENU DU PROJET
═══════════════════════════════════════════════════════════════════════════════

Ce site web statique est composé des fichiers suivants:

✓ index.html          - Page HTML unique complète avec toutes les sections
✓ styles.css          - Feuille de styles CSS avec palette personnalisée
✓ script.js           - JavaScript pour interactions et tracking
✓ assets/             - Dossier contenant les images
  ├── prompts.txt     - Prompts détaillés pour générer les images finales
  ├── hero.jpg        - Image de fond section hero (PLACEHOLDER)
  ├── amayon.jpg      - Portrait du Maître Amayon (PLACEHOLDER)
  ├── symbols-love-money-protection.jpg - Image services (PLACEHOLDER)
  ├── client-1.jpg à client-10.jpg - Avatars témoignages (PLACEHOLDERS)
✓ README.txt          - Ce fichier d'instructions

═══════════════════════════════════════════════════════════════════════════════

🚀 DÉPLOIEMENT SUR HÉBERGEMENT STATIQUE
═══════════════════════════════════════════════════════════════════════════════

Ce site est 100% statique (aucun backend, aucune base de données) et peut être
déployé gratuitement sur plusieurs plateformes:

─────────────────────────────────────────────────────────────────────────────
1. NETLIFY (Recommandé - Le plus simple)
─────────────────────────────────────────────────────────────────────────────

MÉTHODE A - Drag & Drop (aucune commande):
1. Aller sur https://app.netlify.com/drop
2. Glisser-déposer TOUS les fichiers du projet (index.html, styles.css, 
   script.js, et le dossier assets/)
3. Votre site est en ligne instantanément!
4. Netlify vous donne une URL gratuite (ex: random-name.netlify.app)
5. Vous pouvez personnaliser le nom de domaine dans les paramètres

MÉTHODE B - Avec Git (pour mises à jour automatiques):
1. Créer un compte sur https://netlify.com
2. Connecter votre dépôt GitHub/GitLab
3. Netlify détecte automatiquement que c'est un site statique
4. Configuration: laisser tous les champs vides (pas de build command)
5. Publish directory: "/" (racine)
6. Déployer!

─────────────────────────────────────────────────────────────────────────────
2. VERCEL
─────────────────────────────────────────────────────────────────────────────

1. Installer Vercel CLI (optionnel):
   npm install -g vercel

2. Dans le dossier du projet, exécuter:
   vercel

3. Suivre les instructions à l'écran
4. Votre site est déployé en quelques secondes

OU via l'interface web:
1. Aller sur https://vercel.com
2. Importer votre dépôt Git
3. Vercel détecte automatiquement la configuration
4. Déployer!

─────────────────────────────────────────────────────────────────────────────
3. GITHUB PAGES (Gratuit avec GitHub)
─────────────────────────────────────────────────────────────────────────────

1. Créer un dépôt GitHub (ex: maitre-amayon-website)
2. Pousser tous les fichiers vers le dépôt
3. Aller dans Settings > Pages
4. Source: sélectionner "Deploy from a branch"
5. Branch: sélectionner "main" et folder "/ (root)"
6. Sauvegarder
7. Votre site sera accessible à: https://votre-nom.github.io/nom-du-repo/

─────────────────────────────────────────────────────────────────────────────
4. CLOUDFLARE PAGES
─────────────────────────────────────────────────────────────────────────────

1. Aller sur https://pages.cloudflare.com
2. Connecter votre dépôt Git
3. Build settings:
   - Build command: (laisser vide)
   - Build output directory: / (racine)
4. Déployer!

═══════════════════════════════════════════════════════════════════════════════

🖼️ REMPLACEMENT DES IMAGES PLACEHOLDER
═══════════════════════════════════════════════════════════════════════════════

IMPORTANT: Les fichiers images actuels dans assets/ sont des PLACEHOLDERS.
Vous DEVEZ les remplacer par de vraies images avant la mise en production.

ÉTAPES:
1. Ouvrir le fichier assets/prompts.txt
2. Utiliser les prompts fournis pour générer les images photoréalistes 4K
3. Outils recommandés:
   - Midjourney (https://midjourney.com) - Meilleure qualité
   - DALL-E 3 via ChatGPT Plus
   - Leonardo.ai avec preset PhotoReal
   - Stable Diffusion XL

4. Une fois les images générées, les renommer exactement comme suit:
   ✓ hero.jpg (1920x1080px minimum)
   ✓ amayon.jpg (800x800px)
   ✓ symbols-love-money-protection.jpg (1200x800px)
   ✓ client-1.jpg à client-10.jpg (400x400px chacun)

5. Remplacer les fichiers dans le dossier assets/
6. Redéployer le site

ASTUCE: Compresser les images avant de les uploader pour améliorer les 
performances du site. Utiliser TinyPNG.com ou Squoosh.app

═══════════════════════════════════════════════════════════════════════════════

⚙️ PERSONNALISATION DU SITE
═══════════════════════════════════════════════════════════════════════════════

CHANGER LE NUMÉRO WHATSAPP:
- Ouvrir index.html
- Rechercher: +33780782681 ou 33780782681
- Remplacer par le nouveau numéro (format international sans espaces)
- Exemple: +33612345678 devient 33612345678 dans les liens wa.me

MODIFIER LES COULEURS:
- Ouvrir styles.css
- Modifier les variables CSS au début du fichier (lignes 5-12):
  --color-bg-main: #FDFCF6;     (fond général)
  --color-gold: #D4AF37;         (titres/accents)
  --color-text-dark: #1A1A2E;    (textes principaux)
  --color-cta-amber: #FFB347;    (boutons CTA)
  --color-footer-navy: #0B1D3F;  (footer)

MODIFIER LES TEXTES:
- Ouvrir index.html
- Tous les textes sont directement dans le HTML
- Modifier selon vos besoins (titres, témoignages, services, etc.)

AJOUTER/SUPPRIMER DES TÉMOIGNAGES:
- Dans index.html, chercher la section <!-- Témoignages -->
- Copier-coller un bloc <div class="testimonial-card">...</div>
- Modifier le contenu (nom, texte, image)

═══════════════════════════════════════════════════════════════════════════════

📱 DOMAINE PERSONNALISÉ
═══════════════════════════════════════════════════════════════════════════════

Pour utiliser votre propre nom de domaine (ex: maitre-amayon.com):

1. Acheter un nom de domaine chez:
   - Namecheap (https://namecheap.com)
   - GoDaddy (https://godaddy.com)
   - OVH (https://ovh.com)

2. Dans votre plateforme d'hébergement (Netlify/Vercel/etc.):
   - Aller dans les paramètres du site
   - Section "Custom domain" ou "Domains"
   - Ajouter votre nom de domaine
   - Suivre les instructions pour configurer les DNS

3. Attendre la propagation DNS (5 minutes à 48 heures)
4. Votre site sera accessible via votre domaine personnalisé!

═══════════════════════════════════════════════════════════════════════════════

🔒 SSL/HTTPS (Certificat de sécurité)
═══════════════════════════════════════════════════════════════════════════════

Netlify, Vercel, GitHub Pages et Cloudflare Pages fournissent AUTOMATIQUEMENT
et GRATUITEMENT des certificats SSL (https://). Aucune action requise!

Votre site sera automatiquement sécurisé avec https:// dès le déploiement.

═══════════════════════════════════════════════════════════════════════════════

📊 ANALYTICS (Optionnel - pour plus tard)
═══════════════════════════════════════════════════════════════════════════════

Pour suivre les visiteurs et conversions, vous pouvez ajouter:

GOOGLE ANALYTICS:
1. Créer un compte Google Analytics
2. Obtenir votre ID de suivi (ex: G-XXXXXXXXXX)
3. Ajouter ce code AVANT </head> dans index.html:

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
<!-- End Google Analytics -->

4. Décommenter les lignes gtag() dans script.js pour tracker les clics WhatsApp

ALTERNATIVES PRIVACY-FRIENDLY:
- Plausible Analytics (https://plausible.io)
- Fathom Analytics (https://usefathom.com)

═══════════════════════════════════════════════════════════════════════════════

✅ CHECKLIST AVANT MISE EN PRODUCTION
═══════════════════════════════════════════════════════════════════════════════

□ Remplacer TOUTES les images placeholder par des vraies photos 4K
□ Vérifier que le numéro WhatsApp est correct (+33 7 80 78 26 81)
□ Tester tous les boutons WhatsApp sur mobile et desktop
□ Vérifier l'affichage sur mobile (80% du trafic sera mobile)
□ Compresser les images pour optimiser la vitesse de chargement
□ Relire tous les textes (orthographe, grammaire)
□ Tester le site sur Chrome, Safari, Firefox
□ Vérifier que le bouton WhatsApp sticky apparaît au scroll
□ Configurer un domaine personnalisé (optionnel mais recommandé)
□ Ajouter Google Analytics ou alternative (optionnel)
□ Partager le lien du site et tester l'expérience utilisateur

═══════════════════════════════════════════════════════════════════════════════

🆘 SUPPORT & QUESTIONS
═══════════════════════════════════════════════════════════════════════════════

PROBLÈMES COURANTS:

Q: Les images ne s'affichent pas après déploiement
A: Vérifier que le dossier assets/ a bien été uploadé avec les fichiers

Q: Le bouton WhatsApp ne fonctionne pas
A: Vérifier que WhatsApp est installé sur le téléphone, ou que le navigateur
   peut ouvrir les liens wa.me

Q: Le site n'est pas responsive sur mobile
A: Vider le cache du navigateur et recharger la page (Ctrl+Shift+R)

Q: Le CSS ou JS ne se charge pas
A: Vérifier que les chemins dans index.html sont corrects:
   <link rel="stylesheet" href="styles.css">
   <script src="script.js"></script>

═══════════════════════════════════════════════════════════════════════════════

📞 INFORMATIONS DE CONTACT DU SITE
═══════════════════════════════════════════════════════════════════════════════

WhatsApp: +33 7 80 78 26 81
Format lien: https://wa.me/33780782681

═══════════════════════════════════════════════════════════════════════════════

✨ BONNE CHANCE AVEC VOTRE SITE WEB! ✨

Ce site a été conçu pour maximiser les conversions WhatsApp.
Chaque élément (couleurs, textes, boutons) a été optimisé dans ce but.

═══════════════════════════════════════════════════════════════════════════════
Fin du README.txt
Version 1.0 - Novembre 2025
