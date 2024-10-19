import { programmingArd1 } from "./programming_ard_1.js";
import { programmingArd2 } from "./programming_ard_2.js";

// Constantes
const EDITORS = {
    ARDUINO_1: 0,
    ARDUINO_2: 1,
    ONLINE: 2,
    PROTEUS: 3,
    VSCODE: 4
};

// Función pura para generar el contenido HTML según el editor
const getEditorContent = (editorValue) => {
    let content = `
        <h2> Programación del Arduino </h2><br>
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
        <nav class="editor-options">
            <button id="arduino1-btn" value="0">Arduino 1</button>
            <button id="arduino2-btn" value="1">IDE 2</button>
            <button id="cloud-btn" value="2">on-line</button>
            <button id="proteus-btn" value="3">Proteus</button>
            <button id="vscode-btn" value="4">VSCode</button>
        </nav>
    `;

    // Agregar contenido específico según el editor seleccionado
    switch(parseInt(editorValue)) {
        case EDITORS.ARDUINO_1:
            content += programmingArd1;
            break;
        case EDITORS.ARDUINO_2:
            content += programmingArd2;
            break;
        case EDITORS.ONLINE:
            content += '<h3>onLine</h3>';
            break;
        case EDITORS.PROTEUS:
            content += '<h3>proteus</h3>';
            break;
        case EDITORS.VSCODE:
            content += '<h3>vscode</h3>';
            break;
        default:
            content += '';
    }

    // Agregar el script para manejar los eventos
    content += `
        <script>
            document.querySelector(".editor-options").addEventListener('click', (e) => {
                console.info(e.target.className);
                if (e.target.tagName === 'BUTTON') {
                    const editor = e.target.value;
                    // Actualizar el contenido usando la función del módulo principal
                    const event = new CustomEvent('editorChanged', { detail: editor });
                    document.dispatchEvent(event);
                }
            });
        </script>
    `;
    console.info(content);

    return content;
};

// Estado inicial
let currentEditor = 0;

// Función para actualizar el contenido
const updateContent = (editorValue = currentEditor) => {
    currentEditor = editorValue;
    return getEditorContent(currentEditor);
};

// Exportar el contenido inicial
export default updateContent();

// Exportar también la función de actualización para poder usarla desde fuera
export { updateContent };