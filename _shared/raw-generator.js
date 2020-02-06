const data = {
    base: {
        "var-alert": [
            "var & alert",
            "Dans le fichier script.js, crée une variable du nom de ton choix, dont la valeur sera une chaîne de caractères contenant Hello, World!, et affiche cette variable dans une boîte de dialogue (alert box).",
        ],
        "var-prompt": [
            "var & prompt",
            "Demande à l'utilisateur son prénom, et affiche dans une boîte de dialogue le message de bienvenue suivant Bonjour, [prénom] !.",
        ],
        "prompt-if": [
            "promp & if",
            "Demande à l'utilisateur s'il veut du gâteau. S'il répond oui, félicite-le ; pour tout autre réponse, sermonne-le gentillement : du gâteau, ça ne se refuse pas !",
        ],
        "asv-confirm": [
            "ASV avec confirmation",
            "Pose trois questions à l'utilisateur : son âge, sexe et ville. Affiche-les dans une boîte de dialogue qui lui demandera de confirmer. S'il ne confirme pas ses informations, recommence le processus.",
        ],
    },
    maths: {
        "calculator-one": [
            "calculatrice",
            "Complète le script fourni pour rendre la calculatrice fonctionelle.",
        ],
        "calculator-two": [
            "calculatrice (2)",
            "Complète le script fourni pour rendre la calculatrice fonctionelle. Pour ce faire, utilise une structure switch.",
        ],
        "even-square": [
            "carrés des pairs",
            "Au clic sur le bouton, calcule et affiche les carrés des nombres pairs entre 1 et 21.",
        ],
        "sort-numbers": [
            "classer des nombres",
            "Au clic sur le bouton, récupère les nombres affichés dans l'input, et affiche-les, classés du plus petit au plus grand.",
        ],
        factorial: [
            "Factorielle",
            "Au clic sur le bouton, récupère le nombre dans l'input, et affiche sa factorielle.",
        ],
        fizzbuzz: [
            "fizzbuzz",
            `Dans la console, pour chaque nombre entre 1 et 100 : affiche "fizz" si le nombre est multiple de 3, "buzz" s'il est multiple de 5, "fizzbuzz" s'il est multiple de 3 ET 5, ou simplement le nombre si aucun cas ne correspond.`,
        ],
    },
    colors: {
        "change-bcg-one": [
            "couleur de fond (1)",
            "Chaque bouton, une fois cliqué, doit changer la couleur de fond de la page par celle indiquée.",
        ],
        "change-bcg-two": [
            "couleur de fond (2)",
            "Au clic sur le bouton, récupère la valeur de l'input et utilise-la comme couleur de fond de la page.",
        ],
        "change-bcg-three": [
            "couleur de fond (3)",
            "Au clic sur le bouton, génére une couleur aléatoire et utilise-la comme couleur de fond de la page.",
        ],
    },
    dates: {
        "title-by-hour-one": [
            "texte en fonction de l'heure (1)",
            "Change le contenu de la balise indiquée par Bonjour (s'il est moins de 18h), ou par Bonsoir.",
        ],
        "title-by-hour-two": [
            "texte en fonction de l'heure (2)",
            "Change le contenu de la balise indiquée par Bonjour (s'il est moins de 17h30), ou par Bonsoir.",
        ],
        "age-by-select": [
            "calculateur d'âge",
            "Au clic sur le bouton, récupère la date de naissance du visiteur et affiche son âge exact.",
        ],
        "locale-date": [
            "date textuelle",
            "Change le contenu de la balise indiquée par la date du jour, en français (ex : dimanche 28 octobre 2018, 23h32).",
        ],
        "get-spooky-fridays": [
            "calcul des vendredi 13",
            "Au clic sur le bouton, affiche chaque mois qui contiendra un vendredi 13 pour l'année donnée.",
        ],
    },
    arrays: {
        "get-element": [
            "élément de tableau",
            "Au clic sur le bouton, affiche le quatrième élément du tableau fruits dans le script.",
        ],
        "manipulate-array": [
            "manipulation de tableau",
            `Au clic sur le bouton, opère les transformations suivantes sur le tableau fruits : enlève le premier et le dernier élement, ajoute un élément "banane" au début du tableau et ajoute un élément "kiwi" à la fin du tableau.`,
        ],
        "walk-one": [
            "parcours de tableau (1)",
            "Au clic sur le bouton, affiche l'une après l'autre chaque valeur du tableau fruits. Utilise une boucle for.",
        ],
        "walk-two": [
            "parcours de tableau (2)",
            "Au clic sur le bouton, affiche l'une après l'autre chaque valeur du tableau fruits. Utilise la méthode map.",
        ],
        "walk-three": [
            "parcours de tableau (3)",
            "Au clic sur le bouton, affiche l'un après l'autre le nom de chaque personne du tableau people. Utilise la méthode map.",
        ],
        "find-in-array": [
            "recherche dans un tableau",
            `Au clic sur le bouton, affiche l'âge de la personne dont le nom est "Dupont" et le prénom "Jean" dans le tableau people. Ensuite, affiche son index dans ce tableau.`,
        ],
        "filter-array": [
            "filtrer un tableau",
            "Au clic sur le bouton, crée un nouveau tableau à partir du tableau people, qui ne contiendra que les personnes dont l'âge est supérieur à 18 ans. Affiche le tableau résultant dans la console.",
        ],
        "array-includes": [
            "présence dans un tableau",
            "Au clic sur le bouton, affiche si, oui ou non, il y a une pomme dans le tableau fruits.",
        ],
        "rand-array-stats": [
            "tableau aléatoire & statistiques",
            "Au clic sur le bouton, affiche dans les balises prévues les dix éléments d'un tableau de 10 nombres (entre 1 et 100), ainsi que les statistiques suivantes : le plus petit nombre, le plus grand, la somme des nombres et la moyenne de ceux-ci.",
        ],
        "reduce-array": [
            "utilisation d'un reducer",
            "Au clic sur le bouton, affiche le total des âges des personnes dans le tableau people. Utilise la méthode reduce.",
        ],
    },
    dom: {
        "select-one": [
            "sélection par id",
            `Sélectionne la balise dont l'id est "target": remplace son contenu par "owned".`,
        ],
        "select-two": [
            "sélection par sélecteur css",
            `Sélectionne la balise span dont la classe est "target": remplace son contenu par "owned".`,
        ],
        "select-three": [
            "sélection multiple par sélecteur css",
            `Sélectionne les balises dont la classe est "target": remplace leurs contenus par "owned".`,
        ],
        "attr-create": [
            "manipulation d'attributs & création d'élément",
            `Récupère la valeur de l'attribut "data-image" de la balise dont l'id est "source". Crée ensuite une balise image qui affichera cette valeur.`,
        ],
        "hover-image": [
            "survol d'image",
            `Au survol de l'image, change sa source par celle qui se trouve dans son attribut "data-hover".`,
        ],
        "mini-carousel": [
            "mini carousel",
            "Au clic sur le bouton, change la source de l'image par celle de l'image suivante dans le tableau gallery. Fais-en une boucle.",
        ],
        "generate-table-one": [
            "génération d'un tableau (1)",
            "Génère un tableau HTML d'un colonne et dix rangées.",
        ],
        "generate-table-two": [
            "génération d'un tableau (2)",
            "Génère un tableau HTML qui affichera les dix premières tables de multiplication de 1 à 10.",
        ],
        "match-password-one": [
            "vérification de mots de passe (1)",
            "Au clic sur le bouton, vérifie que les deux mots de passe dans les inputs sont identiques. Si ça n'est pas le cas, colore les bordures des inputs en rouge.",
        ],
        "match-password-two": [
            "vérification de mots de passe (2)",
            `Au clic sur le bouton, vérifie que les deux mots de passe dans les inputs sont identiques. Si ça n'est pas le cas, ajoute la classe "error" aux inputs.`,
        ],
        "change-event-input-one": [
            "événement change (1)",
            "Observe les changements de l'input et affiche le nombre de caractères utilisés. Si ce nombre est plus grand que 10, empêche la saisie de nouveau caractère.",
        ],
        "change-event-input-two": [
            "événement change (2)",
            `Observe les changements de l'input et affiche "ok" si le contenu fait 8 caractères au minimum, et contient au moins 2 chiffres.`,
        ],
    },
    misc: {
        "waving-text": [
            "effet vague",
            `Affiche le texte de ton choix dans la balise prévue, avec un "effet vague" d'au moins 5 tailles différentes.`,
        ],
        "typewriter-effect": [
            "effet machine à écrire",
            `Affiche le texte de ton choix dans la balise prévue, avec un "effet machine à écrire" : chaque lettre doit s'afficher l'une après l'autre. Bonus : fais en sorte que le délai entre chaque lettre soit aléatoire.`,
        ],
        "worst-ui-one": [
            "la pire interface (1) : phone slider",
            "Petit exercice, réaliser des interfaces horribles pour encoder un numéro de téléphone : utilise la valeur du slider pour afficher un numéro de téléphone (de 0480000000 à 0499999999).",
        ],
        "worst-ui-two": [
            "la pire interface (2) : phone clicker",
            "Petit exercice, réaliser des interfaces horribles pour encoder un numéro de téléphone : chaque clic sur un bouton incrémente la valeur sélectionnée.",
        ],
        "worst-ui-three": [
            "la pire interface (3) : phone slot",
            "Petit exercice, réaliser des interfaces horribles pour encoder un numéro de téléphone : chaque groupe de chiffre se comporte comme un bandit manchot de casino.",
        ],
        "guess-number": [
            "jeu : trouver un nombre",
            `Au chargement de la page, le script choisi un nombre entre 1 et 100, puis demande à l'utilisateur de soumettre un chiffre. Le script répond "plus grand" ou "plus petit" en fonction, ou le félicite si le nombre est correct, tout en affichant son nombre d'essais.`,
        ],
        "storage-clicker": [
            "jeu : clicker persistant",
            "Au clic sur le bouton, le compteur augmente de 1. Utilise le localStorage pour sauvegarder et restaurer la valeur du compteur entre chaque chargement de page.",
        ],
    },
};

const fs = require("fs");

Object.entries(data).forEach(([section, exos], i) => {
    const dirname = `0${i + 1}-${section}`;

    !fs.existsSync(`./${dirname}`) && fs.mkdirSync(`./${dirname}`);

    Object.entries(exos).forEach(([exo, [title, description]], j) => {
        const exodirname = `./${dirname}/${j < 9 ? "0" : ""}${j + 1}-${exo}`;

        fs.mkdirSync(exodirname);
        fs.writeFileSync(
            `${exodirname}/index.html`,
            [
                `<!--`,
                ` * becode/javascript`,
                ` *`,
                ` * ${exodirname.replace(".", "")}/index.html - ${i + 1}.${j +
                    1}: ${title}`,
                ` *`,
                ` * coded by leny@BeCode`,
                ` * started at 26/10/2018`,
                `-->`,
                `<!DOCTYPE html>`,
                `<html lang="fr">`,
                `  <head>`,
                `    <meta charset="UTF-8" />`,
                `    <title>BeCode/JavaScript - ${i + 1}.${j +
                    1}: ${title}</title>`,
                ``,
                `    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />`,
                `    <link rel="stylesheet" href="../../_shared/css/normalize.css" />`,
                `    <link rel="stylesheet" href="../../_shared/css/styles.css" />`,
                `  </head>`,
                `  <body>`,
                `    <div class="container">`,
                `      <header>`,
                `        <h1>BeCode / JavaScript</h1>`,
                `        <h2>`,
                `          <span>${i + 1}.${j + 1}</span>`,
                `          <strong>${title}</strong>`,
                `        </h2>`,
                `      </header>`,
                `      <div class="content">`,
                `        <section class="explain">`,
                `          <p>${description}</p>`,
                `        </section>`,
                `      </div>`,
                `    </div>`,
                ``,
                `    <script src="./script.js"></script>`,
                `  </body>`,
                `</html>`,
                `                                                                                                                                       `,
            ].join("\n"),
            "utf8",
        );
        fs.writeFileSync(
            `${exodirname}/script.js`,
            [
                `/* becode/javascript`,
                ` *`,
                ` * ${exodirname.replace(".", "")}/script.js - ${i + 1}.${j +
                    1}: ${title}`,
                ` *`,
                ` * coded by leny@BeCode`,
                ` * started at 26/10/2018`,
                ` */`,
                ``,
                `// NOTE: don't focus on the existing code structure for now.`,
                `// You will have time to focus on it later.`,
                ``,
                `(function() {`,
                ``,
                `  // your code here`,
                ``,
                `})();`,
            ].join("\n"),
            "utf8",
        );
    });
});
