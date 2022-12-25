# Saucy Saucer

Bienvenue sur le projet Saucy Saucer, un site web fictif qui présente une entreprise de transports interplanétaire en soucoupes volantes. Ce projet a été réalisé dans le cadre d'un travail universitaire à l'Université Paris-Saclay, IUT d'Orsay.

## Fonctionnalités

- La page `bookseats.php` permet de réserver un vol en choisissant la destination, la date de départ, l'heure et le mode de transport (Classic, Green, Comfort).
- Le système utilise une API factice avec les données stockées dans des fichiers JSON : [CATEGORY.JSON](https://github.com/nawfelkerarsi/Saucy-Saucer/blob/main/api/v1/CATEGORY.JSON), [DEPARTURES.JSON](https://github.com/nawfelkerarsi/Saucy-Saucer/blob/main/api/v1/DEPARTURES.JSON), [PLANETS.JSON](https://github.com/nawfelkerarsi/Saucy-Saucer/blob/main/api/v1/PLANETS.JSON).
- Le système est personnalisable : Les listes des planètes, catégories et les listes des départs peuvent être modifiées à tout moment dans les fichiers JSON.
- À la fin de la réservation, un mail de confirmation est envoyé à l'utilisateur grâce à PHPMailer.

## Installation

Pour utiliser ce projet sur votre ordinateur, veuillez suivre les étapes suivantes :

1. Téléchargez ou clonez ce dépôt sur votre ordinateur.
2. Assurez-vous d'avoir un serveur web et PHP en cours d'exécution sur votre ordinateur.
3. Placez les fichiers du projet dans le répertoire racine de votre serveur web.
4. Configurez les paramètres de l'envoi de mail dans le fichier [mail.php](https://github.com/nawfelkerarsi/Saucy-Saucer/blob/main/mail.php).
5. Accédez au projet à l'aide de votre navigateur en entrant l'adresse URL du projet.

## Captures d'écrans

Version pour ordinateur    |  Version mobile
:-------------------------:|:-------------------------:
<img src="https://raw.githubusercontent.com/nawfelkerarsi/Saucy-Saucer/main/ressouces/SCREENSHOT1.png" style="width: 700px"/>     |  <img src="https://raw.githubusercontent.com/nawfelkerarsi/Saucy-Saucer/main/ressouces/SCREENSHOT2.png"  style="width: 200px"/>

## Exemple d'utilisation

Voici comment réserver un vol sur le site Saucy Saucer :

1. Accédez à la page `bookseats.php` à l'aide de votre navigateur.
2. Sélectionnez le mode de transport désirés, votre destination, la date de départ et l'heure.
3. Indiquer votre adresse mail.
4. Vous recevrez un mail de confirmation avec les détails de votre réservation.

N'hésitez pas à jeter un coup d'œil aux autres pages du site pour en savoir plus sur l'entreprise et les différentes destinations proposées :
- La page `fleet.html` vous permet de découvrir nos différents services de transport en soucoupes volantes.
- La page `ourstory.html` vous raconte l'histoire de la création de notre entreprise.
- La page `contact-us.html` vous permet de nous contacter en cas de questions ou de demandes spéciales.

Bon voyage !

## Librairies utilisées

- PHPMailer : librairie utilisée pour l'envoi de mails par un serveur SMTP.
- model-viewer.js : librairie permettant d'ajouter des modèles 3D dans des balises HTML.
- Font Awesome : librairie d'icônes vectorielles.

#### Le lien vers le rapport du projet ce trouve dans le `<footer/>` mais aussi [ici](https://nawfelkerarsi.github.io/Saucy-Saucer/ressouces/Rapport%20COIN[55].pdf).

<img src="https://raw.githubusercontent.com/nawfelkerarsi/Saucy-Saucer/main/ressouces/UPS.svg.png" style="width: 200px"/>