/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    var colors = ["red", "green", "yellow", "blue"];
    colors.forEach(element => {
      document.getElementById(element).addEventListener("click", () => {
        document.querySelectorAll('html')[0].style.backgroundColor = element;
      });
    });
  })();
