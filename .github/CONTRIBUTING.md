content = """# Guide de contribution

Merci de prendre le temps de contribuer à ce projet ! Nous suivons le modèle **Gitflow**. Ce document détaille les règles et la marche à suivre pour proposer vos modifications.

---

## 1. Structure des branches

- **`main`** : Code actuellement déployé en **production**. Doit être à tout moment stable et prêt à être déployé.
- **`develop`** : Branche principale d'**intégration** (environnement de développement). Contient les dernières évolutions validées pour la prochaine version.
- **`feature/*`** : Nouvelles fonctionnalités ou aménagement majeur (créées depuis `develop`).
- **`bugfix/*`** : Corrections de bugs sur l'environnement de développement ou de staging (créées depuis `develop`).
- **`hotfix/*`** : Corrections d'urgence de bugs critiques directement identifiés en **production** (créées depuis `main`).
- **`release/*`** : Préparation et stabilisation de la livraison d'une nouvelle version (créées depuis `develop`).

---

## 2. Processus de travail (Workflow)

### A. Développer une nouvelle fonctionnalité (`feature`)

1. Récupérer la version la plus récente de `develop` :
   ```bash
   git checkout develop
   git pull origin develop
   ```
