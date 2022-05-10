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
        // Just letting the default in English for now
      
    },
    es:{
        welcome : "Un lugar donde viven las mentes más brillantes.",
        paragraph : `Conocimiento que vale la pena difundir, en la universidad de Eduford profundizará 
                     sus conocimientos en una variedad de areas, este es el lugar para estar.`,
        visit :   "Visítanos para saber más",
        couseOffer : "Cursos que ofrecemos",
        courseParagraph : `Con más de 3000 estudiantes universitarios y 1500 graduados estudiando en nuestra universidad,
                           ofrecemos muchas oportunidades de estudio en todo el mundo`,
        undergraduate : "licenciatura",
        undergradTexto : `Los estudios de grado en Eduford son de alta calidad con un enfoquepráctico. 
                          Se espera que los estudiantes cumplan con los criterios básicosmínimos en los primeros años 
                          académicos y luego en los ultimos años empiezancon las praticas en empresas.`,
        graduate : "Posgrado",
        graduateTexto : `Los estudios de Posgrado en Eduford ofrecen recursos de desarrollo profesional, 
                         oportunidades de creación de contactos entre varias universidades y  
                         todo el apoyo para los estudiantes de Master, doctorado y títulos profesionales`


    }
};

// define language via window hash
if(window.location.hash){
    if(window.location.hash === "#es"){
        welcomeSectionh1.textContent = language.es.welcome;
        welcomeSectP.textContent = language.es.paragraph;
        visita.textContent = language.es.visit;
        courseSecth1.textContent = language.es.couseOffer;
        courseSectP.textContent = language.es.courseParagraph;
        undergraduateHeader.textContent = language.es.undergraduate;
        undergradTexto.textContent = language.es.undergradTexto;
        graduateHeader.textContent = language.es.graduate;
        graduateTexto.textContent = language.es.graduateTexto;
       
    }    
}



 


    