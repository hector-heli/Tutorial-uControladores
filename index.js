import { enlistment } from '/src/scripts/enlisment.js';
import { schematic } from '/src/scripts/schematic.js';
import programming  from '/src/scripts/programming.js';

let stage = 0;
const d = document;

const projectStages = [enlistment, schematic, programming, 'simulation', 'reports'];

const $selectStage = d.querySelector('.select-stage');
$selectStage.addEventListener('click', (e) => {
    stage = e.target.getAttribute('value');
});

const $btnNext = document.getElementById('next-btn');
const $btnPrev = document.getElementById('prev-btn');

$btnNext.onclick = () => 
    stage < projectStages.length-1? stage++: stage = 0;

$btnPrev.onclick = () => {
    stage>0? stage--: stage=0;
    $btnPrev.setAttribute('display', 'none');
}

const $nav = document.querySelector('.editor-options');  

const updateStages = () => {
    stage == 2? $nav.style.setProperty('display', 'flex'): $nav.style.setProperty('display', 'none');
    const $article = document.getElementById("directives");
    $article.innerHTML = projectStages[stage];
}

document.body.onclick = () => updateStages();

updateStages();

