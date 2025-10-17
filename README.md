## 🧩 **Examen – Développement piloté par les tests (TDD)**

### 🧠 **Partie 1 – Compréhension rapide**

**1.** En une ou deux phrases, expliquez le principe du TDD et ses trois étapes clés.

Le TDD (Test Driven Development) est une méthologie qui consiste à écrire des tests avant de développer le code fonctionnel correspondant. Ses trois étapes clés sont :

  - N'écrire aucun code de production avant d'avoir écrit un test qui échoue.

  - Ne pas écrire plus de test que nécessaire pour provoquer cet échec.

  - Ne pas écrire plus de code de production que nécessaire pour faire réussir le test.


**2.** Citez deux avantages concrets du TDD.

  - Il améliore la qualité du code en assurant que chaque fonctionnalité est testée dès sa création.

  - Il facilite la maintenance et l'évolution du code, car les tests existants garantissent que les modifications n'introduisent pas de régressions.

**3.** Quelle est la différence entre un fake et un stub ? Donnez un exemple rapide.

  - Un fake est une implémentation simplifiée d'une interface ou d'une classe, souvent utilisée pour des tests plus complets. Par exemple, une base de données en mémoire utilisée pour tester des opérations CRUD sans avoir besoin d'une vraie base de données.

  - Un stub est un objet qui fournit des réponses prédéfinies aux appels de méthode, généralement utilisé pour isoler le code testé. Par exemple, un stub de service de paiement qui retourne toujours "paiement réussi".

---

### 💻 **Partie 2 – Cas pratique : gestion de panier e-commerce**

#### **Contexte :**

Vous développez un système qui permet d’ajouter des produits et de calculer le total du panier.
Chaque produit a un nom et un prix. Le panier doit appliquer une **réduction de 10 %** si le total dépasse **100 €**.

---

#### **Objectif :**

Mettre en œuvre le cycle **TDD complet** pour cette fonctionnalité.

---


Le panier doit permettre :

- d’ajouter des produits (nom + prix),
- de calculer le total du panier,
- d’appliquer une réduction de 10 % si le total dépasse 100 €,
- et de renvoyer un total exact dans tous les cas.

Vous devez produire :

1. Les tests unitaires nécessaires pour valider le comportement attendu.
2. Le code correspondant (implémentation complète et propre).
3. Un code final refactorisé, lisible et cohérent.
4. Expliquez en quelques lignes comment vous intégreriez ces tests dans un pipeline CI/CD.

---

#### Réponse à la question 4 :

Pour intégrer les tests dans un pipeline CI/CD :
- Exécuter le pipeline sur push et pull request afin d’empêcher la fusion de code cassant.
- Installer Node.js et dépendances (npm ci) puis utiliser le script npm test défini dans package.json.
- Mettre en cache le dossier npm (ou node_modules) pour accélérer les exécutions.
- Faire échouer le job si les tests échouent ; exiger le statut de checks "passing" avant merge.
- Optionnel : exécuter sur une matrice de versions Node, générer un rapport de couverture et publier les artefacts ou badge de build.