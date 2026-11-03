# Journal de bord — Projet site web (modèle Notion)

Modèle de tableau de bord Notion pour un projet de groupe : création du site internet d'une entreprise.

## Méthode simple : copier-coller (recommandée)

1. Ouvre `Copier-coller dans Notion.md` et copie tout le texte.
2. Colle-le dans ta page Notion (Ctrl+V ou Cmd+V) : titres, cases à cocher et tableaux apparaissent automatiquement.
3. Remplis les colonnes « Qui ? » et « Pour quand ? ».

La méthode ci-dessous, avec les fichiers CSV, n'est utile que si tu veux de vraies bases de données Notion (vue Kanban, calendrier).

## Contenu

| Fichier | Devient dans Notion |
|---|---|
| `Page principale.md` | La page d'accueil du projet : infos, équipe, étapes, règles |
| `Tâches.csv` | Base de données des tâches, déjà remplie avec les étapes classiques d'un projet de site |
| `Journal de bord.csv` | Base de données du journal : une entrée par séance de travail |
| `Réunions.csv` | Base de données des réunions, avec l'ordre du jour de la réunion de lancement |
| `Ressources.csv` | Base de données des liens et documents utiles |

## Importer dans Notion

1. **Page principale** : ouvre `Page principale.md`, copie tout le texte et colle-le dans ta page Notion. Notion convertit automatiquement les titres, les listes et les cases à cocher.
2. **Bases de données** : dans la barre latérale de Notion, va dans **Paramètres → Importer → CSV** et importe les 4 fichiers `.csv` un par un.
3. Sur chaque base importée, clique sur **••• → Déplacer vers** et choisis ta page de projet.
4. Dans chaque base, change le type des propriétés (Notion les importe en texte) :
   - **Statut** → Statut (À faire / En cours / Terminé)
   - **Priorité**, **Phase**, **Type** → Sélection
   - **Responsable**, **Auteur**, **Participants** → Personne (une fois tes camarades invités dans la page)
   - **Date**, **Échéance** → Date
5. Vues conseillées :
   - **Tâches** : vue *Tableau* groupée par Statut, et vue *Calendrier* par Échéance
   - **Journal de bord** : vue *Liste* triée par Date, de la plus récente à la plus ancienne
6. Pour afficher une base directement dans la page principale, tape `/vue liée` à l'endroit voulu et choisis la base.

Dans le journal de bord, la ligne « Modèle — à dupliquer » sert d'exemple : duplique-la à chaque séance, ou transforme-la en modèle de base de données (**Nouveau ▾ → + Nouveau modèle**).
