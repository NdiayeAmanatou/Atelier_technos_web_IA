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

    zoneReponse.textContent =
        "Réponse simulée de l'IA : Merci pour votre message. Je suis un assistant IA et voici une réponse simulée à votre demande.";
});

});