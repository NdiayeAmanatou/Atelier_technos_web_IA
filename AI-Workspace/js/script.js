
// Fonction pour enregistrer une requête dans l'historique
function enregistrerRequete(requete) {

    // Récupération de l'historique existant
    let historique = JSON.parse(localStorage.getItem("historique")) || [];

    // Ajout de la nouvelle requête
    historique.push(requete);

    // Sauvegarde dans le navigateur
    localStorage.setItem("historique", JSON.stringify(historique));
}


const mainContent = document.getElementById("main-content");
const lienResume = document.querySelector('a[href="#resume"]');

lienResume.addEventListener("click", function (event) {

    event.preventDefault();

    // On vide la zone principale
    mainContent.innerHTML = "";

    // Création du titre
    const titre = document.createElement("h2");
    titre.textContent = "Résumé de texte";
    mainContent.appendChild(titre);

    // Création du paragraphe d'introduction
    const introduction = document.createElement("p");
    introduction.textContent = "Saisissez votre texte ci-dessous et notre outil générera automatiquement un résumé des informations essentielles.";
    mainContent.appendChild(introduction);

    // Création de la zone de saisie
    const zoneSaisie = document.createElement("textarea");
    zoneSaisie.placeholder = "Saisissez votre texte ici...";

    mainContent.appendChild(zoneSaisie);

    // Création du bouton
    const bouton = document.createElement("button");
    bouton.textContent = "Résumer";

    mainContent.appendChild(bouton);

    // Création de la zone de résultat
    const zoneResume = document.createElement("div");
    zoneResume.id = "resume-resultat";
    zoneResume.textContent = "Le résumé apparaîtra ici...";

    mainContent.appendChild(zoneResume);

    // Action lorsqu'on clique sur Résumer
    bouton.addEventListener("click", function () {

        const texte = zoneSaisie.value;

        if (texte.trim() === "") {
            zoneResume.textContent = "Veuillez saisir un texte.";
            return;
        }

        enregistrerRequete(texte);

        const mots = texte.split(" ");

        const resume = mots.slice(0, 20).join(" ");

        zoneResume.textContent = resume;
    });

});



// Récupération du lien Traduction
const lienTraduction = document.querySelector('a[href="#traduction"]');

lienTraduction.addEventListener("click", function (event) {

    event.preventDefault();

    // On vide la zone principale
    mainContent.innerHTML = "";

    // Création du titre
    const titre = document.createElement("h2");
    titre.textContent = "Traduction";
    mainContent.appendChild(titre);

    // Création du texte d'introduction
    const introduction = document.createElement("p");
    introduction.textContent = "Saisissez votre texte, choisissez une langue et obtenez une traduction simulée.";
    mainContent.appendChild(introduction);

    // Création de la zone de texte
    const zoneSaisie = document.createElement("textarea");
    zoneSaisie.placeholder = "Saisissez votre texte ici...";

    mainContent.appendChild(zoneSaisie);

    // Création du choix de langue
    const selectLangue = document.createElement("select");

    const optionFrancais = document.createElement("option");
    optionFrancais.value = "francais";
    optionFrancais.textContent = "Francais";

    const optionAnglais = document.createElement("option");
    optionAnglais.value = "anglais";
    optionAnglais.textContent = "Anglais";

    const optionEspagnol = document.createElement("option");
    optionEspagnol.value = "espagnol";
    optionEspagnol.textContent = "Espagnol";

    const optionPortugais = document.createElement("option");
    optionPortugais.value = "portugais";
    optionPortugais.textContent = "Portugais";

    selectLangue.appendChild(optionFrancais);
    selectLangue.appendChild(optionAnglais);
    selectLangue.appendChild(optionEspagnol);
    selectLangue.appendChild(optionPortugais);

    mainContent.appendChild(selectLangue);
    // Création du bouton Traduire
    const bouton = document.createElement("button");
    bouton.textContent = "Traduire";

    mainContent.appendChild(bouton);

    // Création de la zone de traduction
    const zoneTraduction = document.createElement("div");
    zoneTraduction.id = "traduction-resultat";
    zoneTraduction.textContent = "La traduction apparaîtra ici...";

    mainContent.appendChild(zoneTraduction);
    // Action lorsqu'on clique sur Traduire
    bouton.addEventListener("click", function () {

    const texte = zoneSaisie.value;
    const langue = selectLangue.value;

    if (texte.trim() === "") {
        zoneTraduction.textContent = "Veuillez saisir un texte.";
        return;
    }
    enregistrerRequete(texte);

    zoneTraduction.textContent =
        "Traduction simulée en " + langue + " : " + texte;
});

});


// Récupération du lien Chat
const lienChat = document.querySelector('a[href="#chat"]');

lienChat.addEventListener("click", function (event) {

    event.preventDefault();

    // On vide la zone principale
    mainContent.innerHTML = "";

    // Création du titre
    const titre = document.createElement("h2");
    titre.textContent = "Chat IA";
    mainContent.appendChild(titre);

    // Création du texte d'introduction
    const introduction = document.createElement("p");
    introduction.textContent = "Posez votre question et échangez avec notre assistant IA.";
    mainContent.appendChild(introduction);

    // Création de la zone de saisie
    const zoneSaisie = document.createElement("textarea");
    zoneSaisie.placeholder = "Écrivez votre message ici...";

    mainContent.appendChild(zoneSaisie);

    // Création du bouton Envoyer
    const bouton = document.createElement("button");
    bouton.textContent = "Envoyer";

    mainContent.appendChild(bouton);

    // Création de la zone de réponse
    const zoneReponse = document.createElement("div");
    zoneReponse.id = "chat-reponse";
    zoneReponse.textContent = "La réponse de l'IA apparaîtra ici...";

    mainContent.appendChild(zoneReponse);

    // Action lorsqu'on clique sur Envoyer
bouton.addEventListener("click", function () {

    const message = zoneSaisie.value;

    if (message.trim() === "") {
        zoneReponse.textContent = "Veuillez saisir un message.";
        return;
    }
    enregistrerRequete(message);
    zoneReponse.textContent =
        "Réponse simulée de l'IA : Merci pour votre message. Je suis un assistant IA et voici une réponse simulée à votre demande.";
});

});


// Récupération du lien Prédiction
const lienPrediction = document.querySelector('a[href="#prediction"]');

lienPrediction.addEventListener("click", function (event) {

    event.preventDefault();

    // On vide la zone principale
    mainContent.innerHTML = "";

    // Création du titre
    const titre = document.createElement("h2");
    titre.textContent = "Prédiction";
    mainContent.appendChild(titre);

    // Création du texte d'introduction
    const introduction = document.createElement("p");
    introduction.textContent = "Saisissez votre âge, votre revenu et votre ville pour obtenir une prédiction fictive.";
    mainContent.appendChild(introduction);

    // Zone de saisie de l'âge
    const age = document.createElement("input");
    age.type = "number";
    age.placeholder = "Âge";
    mainContent.appendChild(age);

    // Zone de saisie du revenu
    const revenu = document.createElement("input");
    revenu.type = "number";
    revenu.placeholder = "Revenu";
    mainContent.appendChild(revenu);

    // Zone de saisie de la ville
    const ville = document.createElement("input");
    ville.type = "text";
    ville.placeholder = "Ville";
    mainContent.appendChild(ville);

    // Création du bouton Prédire
    const bouton = document.createElement("button");
    bouton.textContent = "Prédire";
    mainContent.appendChild(bouton);

    // Zone d'affichage de la prédiction
    const resultat = document.createElement("div");
    resultat.id = "prediction-resultat";
    resultat.textContent = "La prédiction apparaîtra ici...";
    mainContent.appendChild(resultat);

    // Action lorsqu'on clique sur Prédire
    bouton.addEventListener("click", function () {

        const valeurAge = age.value;
        const valeurRevenu = revenu.value;
        const valeurVille = ville.value;

        // Vérification des champs
        if (valeurAge === "" || valeurRevenu === "" || valeurVille.trim() === "") {
            resultat.textContent = "Veuillez remplir tous les champs.";
            return;
        }

        enregistrerRequete(
            "Prédiction - Âge : " + valeurAge +
            ", Revenu : " + valeurRevenu +
            ", Ville : " + valeurVille
        );

        // Affichage de la prédiction fictive
        resultat.textContent =
            "Prédiction fictive : profil analysé avec succès pour une personne de " +
            valeurAge + " ans, avec un revenu de " +
            valeurRevenu + " FCFA, habitant à " +
            valeurVille + ".";
    });
});


// Récupération du lien Historique
const lienHistorique = document.querySelector('a[href="#historique"]');
function afficherHistorique(filtre = "") {

    const historique = JSON.parse(localStorage.getItem("historique")) || [];

    const listeHistorique = document.getElementById("liste-historique");

    listeHistorique.innerHTML = "";

    // Filtrer les requêtes
    const resultats = historique.filter(function (requete) {
        return requete.toLowerCase().includes(filtre.toLowerCase());
    });

    // Si aucun résultat
    if (resultats.length === 0) {
        listeHistorique.textContent = "Aucune requête trouvée.";
        return;
    }

    // Afficher les résultats
    resultats.forEach(function (requete) {

        const element = document.createElement("p");

        element.textContent = requete;

        listeHistorique.appendChild(element);
    });
}
lienHistorique.addEventListener("click", function (event) {

    event.preventDefault();

    // On vide la zone principale
    mainContent.innerHTML = "";

    // Création du titre
    const titre = document.createElement("h2");
    titre.textContent = "Historique";
    mainContent.appendChild(titre);

    // Création du texte d'introduction
    const introduction = document.createElement("p");
    introduction.textContent = "Retrouvez ici toutes vos requêtes précédentes.";
    mainContent.appendChild(introduction);

    // Création de la zone de recherche
    const recherche = document.createElement("input");
    recherche.type = "text";
    recherche.placeholder = "Rechercher dans l'historique...";
    mainContent.appendChild(recherche);

    // Création de la zone d'affichage
    const listeHistorique = document.createElement("div");
    listeHistorique.id = "liste-historique";
    listeHistorique.textContent = "Aucune requête dans l'historique.";
    mainContent.appendChild(listeHistorique);

    function afficherHistorique(filtre = "") {

    const historique = JSON.parse(localStorage.getItem("historique")) || [];

    const listeHistorique = document.getElementById("liste-historique");

    listeHistorique.innerHTML = "";

    historique.forEach(function (requete, index) {

        // Vérifier si la requête correspond à la recherche
        if (!requete.toLowerCase().includes(filtre.toLowerCase())) {
            return;
        }

        // Créer une ligne pour la requête
        const element = document.createElement("div");

        // Afficher la requête
        const texte = document.createElement("span");
        texte.textContent = requete;

        // Créer le bouton Supprimer
        const boutonSupprimer = document.createElement("button");
        boutonSupprimer.textContent = "Supprimer";

        // Action du bouton
        boutonSupprimer.addEventListener("click", function () {

            // Supprimer la requête
            historique.splice(index, 1);

            // Sauvegarder le nouvel historique
            localStorage.setItem("historique", JSON.stringify(historique));

            // Réafficher l'historique
            afficherHistorique(filtre);
        });

        element.appendChild(texte);
        element.appendChild(boutonSupprimer);

        listeHistorique.appendChild(element);
    });

    // Vérifier s'il y a des résultats
    if (listeHistorique.children.length === 0) {
        listeHistorique.textContent = "Aucune requête trouvée.";
    }
}

    recherche.addEventListener("input", function () {

    afficherHistorique(recherche.value);

});

    // Bouton pour vider l'historique
    const boutonVider = document.createElement("button");
    boutonVider.textContent = "Vider l'historique";
    mainContent.appendChild(boutonVider);

    boutonVider.addEventListener("click", function () {

    // Supprimer tout l'historique
    localStorage.removeItem("historique");

    // Réafficher l'historique vide
    afficherHistorique();
});
});




// Récupération du lien Tableau de bord
const lienDashboard = document.querySelector('a[href="#dashboard"]');

lienDashboard.addEventListener("click", function (event) {

    event.preventDefault();

    // Retour à la page initiale du tableau de bord
    window.location.reload();
});


