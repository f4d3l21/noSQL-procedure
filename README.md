
# Projet NoSQL - LokiJS

Ce projet est une démonstration de l'utilisation de la base de données LokiJS pour gérer les informations des écoles. Il permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) telles que l'insertion, la récupération, l'update et la suppression des écoles dans la base de données. Il utilise un fichier CSV contenant les données des écoles comme source de données initiale.

# Dependances requises

Assurez-vous d'avoir les dépendances suivantes installées avant de procéder à l'installation :

Node.js : Environnement d'exécution JavaScript
npm : Gestionnaire de packages pour Node.js
LokiJS : https://db-engines.com/en/system/LokiJS


# Installation

Suivez ces étapes pour installer et exécuter le projet de base de données LokiJS :

Clonez ou téléchargez les fichiers de ce projet depuis le référentiel GitHub.

Dans le répertoire du projet, ouvrez un terminal ou une invite de commandes.

Exécutez la commande suivante pour installer les dépendances requises :


- `npm install`
Assurez-vous d'avoir un fichier CSV contenant les données des écoles. Le fichier CSV doit être formaté avec des colonnes nommées title, name, adress, realAdress, departement, country, tel, email. Remplacez 'contacts.csv' par le chemin absolu ou relatif vers votre fichier CSV contenant les données des écoles dans le fichier db.js :


fs.createReadStream('votre-chemin-fichier.csv')
Exécutez le fichier JavaScript en utilisant la commande suivante :


- `node db.js`
Cela chargera les écoles à partir du fichier CSV, les insérera dans la base de données LokiJS et effectuera différentes opérations CRUD (Create, Read, Update, Delete) sur les écoles.

Vérifiez les résultats affichés dans le terminal pour chaque opération et assurez-vous que tout fonctionne comme prévu.

Vous pouvez personnaliser le code dans index.js pour ajouter des fonctionnalités supplémentaires ou l'intégrer dans votre projet existant.



# Utilisation

Exécuter la commande `npm install` pour installer les dépendances.
Se rendre dans le dossier src : 
- "cd src".
Exécuter la commande `node db.js` pour lancer le projet.


