/* becode/javascript
 *
 * /_shared/lib/callbacks.js - Small lib for callbacks exercises
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

((ns, utils) => {
    ns.wait = (delay, next) => setTimeout(next, delay);

    ns.getPosts = next =>
        ns.wait(1000, () =>
            next(
                null,
                Array.from(new Array(utils.getRandomInt(5, 10)).keys()).map(
                    id => ({id, ...utils.generatePost()}),
                ),
            ),
        );

    ns.getComments = (_, next) =>
        ns.wait(200, () =>
            next(
                null,
                Array.from(new Array(utils.getRandomInt(5, 10)).keys()).map(
                    id => ({id, ...utils.generateComment()}),
                ),
            ),
        );

    ns.getPersons = next =>
        ns.wait(1000, () => {
            if (Math.round(Math.random())) {
                next(new Error("Bad luck!"));
                return;
            }
            next(
                null,
                Array.from(new Array(utils.getRandomInt(5, 15)).keys()).map(
                    id => ({id, name: utils.generateName()}),
                ),
            );
        });
})((window.lib = {}), window.utils);
