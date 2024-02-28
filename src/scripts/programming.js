import { programmingArd1 } from "./programming_ard_1.js";
import { programmingArd2 } from "./programming_ard_2.js";

let editor = 0;

const editorOption = ()=> {
    switch(editor){
        case 0:
            return programmingArd1;          
        case 1:
            return programmingArd2;
    }

}

export const programming = editorOption();