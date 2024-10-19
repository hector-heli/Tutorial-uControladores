import { enlistment } from '/src/scripts/enlisment.js';
import { schematic } from '/src/scripts/schematic.js';
import programming, { updateContent } from './src/scripts/programming.js';

// Constantes y configuración
const STAGES = Object.freeze({
    ENLISTMENT: 0,
    SCHEMATIC: 1,
    PROGRAMMING: 2,
    SIMULATION: 3,
    REPORTS: 4
});

const projectStages = Object.freeze([
    enlistment,
    schematic, 
    programming,
    'simulation',
    'reports'
]);

// Selectores puros
const getElement = (selector) => document.querySelector(selector);
const getElementById = (id) => document.getElementById(id);

// Funciones puras para actualizar UI
const updateArticleContent = (content) => {
    
    const article = getElementById('directives');
    article.innerHTML = content;
    return article;
};

const updateButtonStyles = (currentStage) => {
    const buttons = document.querySelectorAll('.select-stage button');
    buttons.forEach((btn, index) => {
        btn.classList.toggle('active', index === currentStage);
    });
};

const updatePrevButton = (stage) => {
    const prevBtn = getElementById('prev-btn');
    prevBtn.style.display = stage === 0 ? 'none' : 'block';
    return prevBtn;
};

// Funciones puras para la lógica de navegación
const getNextStage = (currentStage) => 
    currentStage < projectStages.length - 1 ? currentStage + 1 : 0;

const getPrevStage = (currentStage) => 
    currentStage > 0 ? currentStage - 1 : 0;

const getStageFromButton = (button) => 
    button && button.tagName === 'BUTTON' ? parseInt(button.value) : null;

// Composición de actualizaciones
const updateUI = (stage) => {
    updateArticleContent(projectStages[stage]);
    updateButtonStyles(stage);
    updatePrevButton(stage);
    return stage;
};

// Cuando necesites actualizar el contenido de programming en el article
const updateEditor = () => {
    const $article = document.getElementById("directives");
    $article.innerHTML = projectStages[stage];
};

// Agregar un event listener para los cambios de editor
document.addEventListener('editorChanged', (e) => {
    const newContent = updateContent(e.detail);
    const $article = document.getElementById("directives");
    $article.innerHTML = newContent;
});

// Manejadores de eventos puros
const createStageHandler = (getNewStage) => (currentStage) => () => {
    const newStage = getNewStage(currentStage);
    return updateUI(newStage);
};

// Inicialización y configuración de eventos usando composición
const initializeApp = () => {
    // Estado inicial
    let currentStage = 0;

    // Selectores iniciales
    const selectStage = getElement('.select-stage');
    const nextBtn = getElementById('next-btn');
    const prevBtn = getElementById('prev-btn');

    // Event Listeners usando composición funcional
    selectStage.addEventListener('click', (e) => {
        const newStage = getStageFromButton(e.target);
        if (newStage !== null) {
            currentStage = updateUI(newStage);
        }
    });

    nextBtn.addEventListener('click', () => {
        currentStage = createStageHandler(getNextStage)(currentStage)();
    });

    prevBtn.addEventListener('click', () => {
        currentStage = createStageHandler(getPrevStage)(currentStage)();
    });

    // Inicialización inicial
    updateUI(currentStage);

    // Retornar funciones para manipular el estado si es necesario
    return {
        getCurrentStage: () => currentStage,
        updateStage: (newStage) => {
            currentStage = updateUI(newStage);
            return currentStage;
        }
    };
};

// Iniciar la aplicación
const app = initializeApp();

// Exportar para testing o uso externo
export {
    STAGES,
    getNextStage,
    getPrevStage,
    updateUI,
    app
};