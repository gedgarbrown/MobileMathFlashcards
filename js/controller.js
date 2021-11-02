//import Flashcard from "./model.js";
import View from "./view.js"

export default class Controller {
    constructor () {
       this.view = new View();
       this.cardsPerSession = document.getElementById("quantity").value;
    }

    setDif(dif) {

        this.difficulty = dif;

    }

    updateQuantity() {
        let rangeQ = document.getElementById("quantity").value;

        this.cardsPerSession = rangeQ;

        this.view.changeRangeQuantity(rangeQ);
        
        //console.log(this.cardsPerSession); //debugging


    }

    startSession() {
        let active = "activeSession";
        let inactive ="sessionSetup";

        this.view.changeDisplay(active, inactive);
        
    }

    quitSession() {

        let inactive = "activeSession";
        let active ="sessionSetup";

        this.view.changeDisplay(active, inactive);

    }
}