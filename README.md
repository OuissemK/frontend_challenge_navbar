# Navbar Responsive – Menu Burger & Off-Canvas

Un challenge de navigation responsive avec barre latérale en desktop qui se transforme en top bar sur tablette et mobile.

Ce projet met l’accent sur la restructuration du layout, l’implémentation d’un menu off-canvas, et la gestion des états UI.

---

## 📂 Structure du projet

### 01 — Navigation Off-Canvas
- Barre latérale fixe (desktop)
- Transformation en top bar (responsive)
- Menu burger (états ouvert / fermé)
- Panneau off-canvas animé
- Accordéon natif avec `<details>` / `<summary>`
- Icônes plus / moins via pseudo-éléments
- Restructuration complète du layout en responsive

---

## 📱 Comportement Responsive

- **Desktop**
  - Barre latérale fixe
  - Texte vertical (writing-mode)
  - Icônes en bas
  - Off-canvas glissant depuis la droite

- **Tablette & Mobile (≤1024px)**
  - La barre latérale devient une top bar
  - Réorganisation en CSS Grid
  - Texte horizontal
  - Off-canvas positionné sous la top bar

---

## 🎯 Objectifs

- Approfondir CSS Grid
- Comprendre la restructuration responsive avancée
- Gérer les états UI en JavaScript
- Améliorer la logique de positionnement
- Structurer un composant scalable et propre

---

## 🛠️ Technologies

- HTML5
- CSS3 (Grid, Flexbox, writing-mode)
- JavaScript (manipulation du DOM)
- Variables CSS (design tokens)

---

## 🚀 Démo Live

🔗 https://ouissemk.github.io/frontend_challenge_navbar/off_canvas/

---

## 📌 Notes

Ce projet fait partie d’une série de challenges centrés sur la navigation.

L’animation type "marquee" sera améliorée ultérieurement en JavaScript.
