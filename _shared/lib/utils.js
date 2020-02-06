/* becode/javascript
 *
 * /_shared/lib/utils.js - Misc utils
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

(ns => {
    const words = [
        "lorem",
        "ipsum",
        "dolor",
        "sit",
        "amet",
        "consectetur",
        "adipiscing",
        "elit",
        "morbi",
        "turpis",
        "euismod",
        "ligula",
        "et",
        "dignissim",
        "pretium",
        "leo",
        "aenean",
        "ac",
        "felis",
        "in",
        "mauris",
        "varius",
        "condimentum",
        "ut",
        "vel",
        "cras",
        "viverra",
        "diam",
        "enim",
        "sodales",
        "lobortis",
        "dui",
        "suspendisse",
        "tincidunt",
        "convallis",
        "feugiat",
        "porttitor",
        "vestibulum",
        "a",
        "interdum",
        "malesuada",
        "fames",
        "ante",
        "primis",
        "faucibus",
        "sed",
        "facilisis",
        "odio",
        "tristique",
        "iaculis",
        "non",
        "donec",
        "ultrices",
        "erat",
        "nec",
        "dictum",
        "finibus",
        "quis",
        "nam",
        "at",
        "semper",
        "proin",
        "neque",
        "molestie",
        "vulputate",
        "sapien",
        "mi",
        "eget",
        "hendrerit",
        "velit",
        "eros",
        "lacus",
        "duis",
        "est",
        "eu",
        "sagittis",
    ];

    const firstnames = [
        "James",
        "John",
        "Robert",
        "Michael",
        "William",
        "David",
        "Richard",
        "Joseph",
        "Charles",
        "Thomas",
        "Christopher",
        "Daniel",
        "Matthew",
        "George",
    ];
    const lastnames = [
        "Smith",
        "Johnson",
        "Williams",
        "Jones",
        "Brown",
        "Davis",
        "Miller",
        "Wilson",
        "Moore",
        "Taylor",
        "Anderson",
        "Thomas",
        "Jackson",
        "White",
    ];

    const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

    ns.getRandomInt = (min = 0, max = 10) =>
        min + Math.round(Math.random() * (max - min));

    ns.generateSentence = (length = 10) => {
        let sentence = [],
            count = 0;

        do {
            let word = getRandomItem(words);

            if (count === 0) {
                word = `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
            }
            sentence.push(word);
        } while (count++ < length);

        return `${sentence.join(" ")}.`;
    };

    ns.generateName = () =>
        `${getRandomItem(firstnames)} ${getRandomItem(lastnames)}`;

    ns.generatePost = () => ({
        title: ns.generateSentence(ns.getRandomInt(2, 10)),
        content: ns.generateSentence(ns.getRandomInt(20, 100)),
        author: ns.generateName(),
    });

    ns.generateComment = () => ({
        content: ns.generateSentence(ns.getRandomInt(5, 10)),
        author: ns.generateName(),
    });
})((window.utils = {}));
