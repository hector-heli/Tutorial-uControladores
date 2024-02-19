import {enlistment} from './src/enlisment.js';
import { schematic } from './src/schematic.js';

let $btnEnlistment = document.getElementById('enlistment-btn');
let $btnSchematic = document.getElementById('schematic-btn');
let $btnCode = document.getElementById('code-btn');
let $btnSimulation = document.getElementById('simulation-btn');
let $btnReports = document.getElementById('reports-btn');

let $btnNext = document.getElementById('next-btn');
let $btnPrev = document.getElementById('prev-btn');

const projectStages = [enlistment, schematic, 'code', 'simulation', 'reports'];

let stage = 1;


$btnEnlistment.onclick = () => stage = 0;
$btnSchematic.onclick = () => stage = 1;
$btnCode.onclick = () => stage = 2;
$btnSimulation.onclick = () => stage = 3;
$btnReports.onclick = () => stage = 4;

$btnNext.onclick = () => 
    stage < projectStages.length-1? stage++: projectStages.length;

$btnPrev.onclick = () => 
    stage>0? stage--: stage=0;

const updateStages = () => {
    const $article = document.getElementById("directives");
    $article.innerHTML = projectStages[stage];
    console.log(stage);
}

document.body.onclick = () => updateStages();

updateStages();

