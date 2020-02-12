/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((_, articles) => {
            let countArticles = articles.length;

            articles.forEach((article, i) => {
                window.lib.getComments(article.id, (_, comments) => {
                    articles[i].comments = comments;

                    if (--countArticles === 0) {
                        console.log(articles);
                    }
                });
            });
        });
    });
})();
