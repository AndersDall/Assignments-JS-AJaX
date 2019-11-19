"use strict";
import {$} from "./nQuery.js";
import {Ajax} from "./Ajax.js";

/*
 * Event handler for fortune button - tests responseText
 */
let getNewContent = function() {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("examplejson3g.json", txtHandler);
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
        let fName = document.createTextNode(`${obj[i].fName}`);
        td2.appendChild(fName);
        let td3 = document.createElement("td");
        let lName = document.createTextNode(`${obj[i].lName}`);
        td3.appendChild(lName);

        let td4 = document.createElement("td");
        let email = document.createTextNode(`${obj[i].Email}`);
        td4.appendChild(email);

        let td5 = document.createElement("td");
        let birthday = document.createTextNode(`${obj[i].Birthday}`);
        td5.appendChild(birthday);

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);


        $("klassedata").appendChild(row);
    }
}

/*
 *  Listen to the button
 */
let showStarter = function () {
    $("data").addEventListener("click", getNewContent);
}

window.addEventListener("load", showStarter);                   // kick off JS
