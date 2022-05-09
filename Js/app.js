'use strict'

let navLink = document.getElementById("navLink");

function showMenu(){
    navLink.style.right = "0";

}

function hideMenu(){
    navLink.style.right = "-200px";
 }

 // Create a function to change the hash value of the page
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

// language translations
var language = {
    en: {
        welcome: "welocme in english"
    },
    es:{
        welcome : "Bienvenido a todos"
    }
};

// define language via window hash
if(window.location.hash){
    if(window.location.hash === "#es"){
        welcomeSection.textContent = language.es.welcome;
       
    }    
}



 


    