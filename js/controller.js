//import Flashcard from "./model.js";
import View from "./view.js"

export default class Controller {
    constructor () {
       this.view = new View();

    }

    setDif(dif) {

        this.difficulty = dif;

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