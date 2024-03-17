import { programmingArd1 } from "./programming_ard_1.js";
import { programmingArd2 } from "./programming_ard_2.js";

let editor = 0;

const d = document;

const $editorOptions = d.querySelector(".editor-options");
const $selectBoard = d.querySelector(".select-board");
let $programming = d.createElement('p');
let programming = ``;


$editorOptions.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        editor = e.target.getAttribute('value');
        updateProgramming(editor);
    }
});


const editorOption = (editor)=> {
    console.log(editor);
    programming = `
    <h2> Programación del Arduino </h2>
    <p> En esta seccion vamos a escribir el código para la simulación de la placa seleccionada. En nuestro caso el Arduino Uno. Sin embargo este código puede ser usado en cualquier placa compatible con Arduino IDE.  </p>

    <p>El código puede ser transcrito siguiendo el ejemplo dado en el documento guía que se puede descargar desde <a href="https://drive.google.com/file/d/165jPD5k-NHkLaUJM1zA09RgdVR4x-GTt/view?usp=classroom_web&authuser=2" target="blank">aquí</a>. </p>

    <p> En esta sección se van a explicar diferentes alternativas de editor de código para la escritura del programa, a saber:</p>
    <ul>
        <li>Programación desde el Arduino IDE 1.8.19</li>
        <li>Programación desde el Arduino IDE 2.3.x</li>
        <li>Programación desde el Arduino Web Editor</li>
        <li>Programación desde el VSM de Proteus</li>
        <li>Programación desde Visual Studio Code</li>
    </ul> 

    <p> Para elegir una de estas alternativas puede dar click en el respectivo botón de <a href="#arduino1-btn"> arriba</a>. </p> <hr>
`;
    
    switch(editor){
        case 1:
            programming += programmingArd1;   
            break;       
        case 2:
            programming += programmingArd2;
            break;       
        case 3:
            programming += `<h3>onLine</h3>`;
            break;       
        case 4:
            programming += `<h3>proteus</h3>`;
            break;       
        case 5:
            programming += `<h3>vscode</h3>`;
            break;       
        default:
            programming += ``;

    }
    return programming;

}

let updateProgramming = () => {
    $programming = editorOption(editor);
};

updateProgramming();

// programming = editorOption();
export default $programming;