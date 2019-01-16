/**
 * JavaScript file that goes along with Workbook 1, Page 3
 * 
 * this file is unfortunately called "three.js" - not to be confused with a library
 * we will use later in the class
 * 
 * everything is put into one big function that gets run "onload"
 */
// note that we don't do a global "use strict" because this can create a problem
// if we include another file
// "use strict";

// we do enable typescript type checking - see
// http://graphics.cs.wisc.edu/WP/cs559-sp2019/typed-js/
// and
// https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files
// @ts-check

/* Set options for jshint (my preferred linter)
 * disable the warning about using bracket rather than dot
 * even though dot is better 
 * https://stackoverflow.com/questions/13192466/how-to-suppress-variable-is-better-written-in-dot-notation
 */
/* jshint -W069, esversion:6 */

window.onload = function() {
    /**
     * Code for BOX01
     * this finds the span and changes it to have new text
     */
    let span01 = document.getElementById("box1-span");
    span01.innerHTML = "write my text in the JavaScript Program";
}