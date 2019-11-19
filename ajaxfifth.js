"use strict";
import {$} from "./nQuery.js";
import {Ajax} from "./Ajax.js";

/*
 * Event handler for fortune button - tests responseText
 */
let getNewContent = function() {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("examplejson2g.json", txtHandler);
}

/*
 * readystatechange/load event handler
 * aka callback function
 * for the above AJaX
 */
let txtHandler = function(e) {
    /* ajax load event
     * puts received text
     * onto the dom
     * into the dom
     */

    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it
    for (let i = 0; i < obj.length; i++) {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let id = document.createTextNode(`${obj[i].id}`);
        td1.appendChild(id);
        let td2 = document.createElement("td");
        let city = document.createTextNode(`${obj[i].name}`);
        td2.appendChild(city);
        let td3 = document.createElement("td");
        let population = document.createTextNode(`${obj[i].population}`);
        td3.appendChild(population);
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        $("new").appendChild(row);
    }

/*
    let txt = document.createTextNode(`Byen ${obj[1].name} har ${obj[1].population} indbyggere`);
    let p = document.createElement("p");
    p.appendChild(txt);
    $("new").appendChild(p);
*/



}

/*
 *  Listen to the button
 */
let showStarter = function () {
    $("fortune").addEventListener("click", getNewContent);
}

window.addEventListener("load", showStarter);                   // kick off JS
