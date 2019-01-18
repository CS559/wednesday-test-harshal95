/**
 * JavaScript file that goes along with Workbook 1, Page 3
 * 
 * this file is pretty empty - we expect the student to fill it in
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

/* to make things easy, we'll define functions for each of the exercises
 * window.onload will call each in turn
 * the student should fill in these three functions
 */

function ex1() {
    let slider1 = document.getElementById("box01-slider1");
    let slider2 = document.getElementById("box01-slider2");
    let slider3 = document.getElementById("box01-slider3");
    slider1.onchange = function(){
        slider3.value = slider2.value - slider1.value;
    };
    slider2.onchange = function(){
        slider3.value = slider2.value - slider1.value;
    };
    slider3.onchange = function(){
        slider1.value = slider2.value - slider3.value;
    };
}

function ex2() {
    let button1 = document.getElementById("box02-button1");
    let button2 = document.getElementById("box02-button2");
    let slider =  document.getElementById("box02-slider1");
    
    let incval = 0;
    
    function advanceSlider(){
        let newValue = (Number(slider.value)+incval) % 100;
        slider.value = newValue.toString();
        // ask for this to be called again 16ms in the future
        window.requestAnimationFrame(advanceSlider);
    }
    
    advanceSlider();

    button1.onclick = function(){
        incval = 1;
    };
    button2.onclick = function(){
        incval = 0;
    };
}

function ex3() {
    /**
     * Student should put the code to solve exercise 3 here
     */
    // as a hint - this will at least change the background color (but not animate it)
    let text = document.getElementById("ex3-span");
    //text.style.backgroundColor = "#FF0000";
    let rval = 255;
    let gval = 0;
    let bval = 0;

    let rate = 600;
    let lastThrobTime = 0;
    let inc = -5;
    function throb(){
        let time = performance.now();
            if ((time-lastThrobTime) > rate) {
                lastThrobTime = time;
                if(gval == 255 ||gval == 0){
                    inc = -inc;
                }
                gval = (gval + inc) % 256;
                bval = (bval + inc) % 256;
                let newcolor = "#";
                let gstring = gval.toString(16);
                if(gstring.length == 1){
                    gstring = "0" + gstring;
                }
                let bstring = bval.toString(16);
                if(bstring.length == 1){
                    bstring = "0" + bstring;
                }
                newcolor = newcolor+rval.toString(16)+gstring+bstring;
                console.log(newcolor);
                text.style.backgroundColor = newcolor;
            }
            window.requestAnimationFrame(throb);
    }
    throb();


    
    
}

window.onload = function() {
    ex1();
    ex2();
    ex3();
};