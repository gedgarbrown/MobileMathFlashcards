//import Flashcard from "./model.js";
import View from "./view.js"

export default class Controller {
    constructor () {
       this.view = new View();
       this.cardsPerSession = document.getElementById("quantity").value;
       this.operator = 0;
    }

    setDif(dif) {

        this.difficulty = dif;

    }

    setOperator(id) {

        this.view.selectButton(id);


        switch(id){
            case "opAdd":
                this.operator = 0;
                this.view.unselectButton("opSub");
                this.view.unselectButton("opMult");
                this.view.unselectButton("opDiv");
             break;   
             case "opSub":
                this.operator = 1;
                this.view.unselectButton("opAdd");
                this.view.unselectButton("opMult");
                this.view.unselectButton("opDiv");
             break;  
             case "opMult":
                this.operator = 2;
                this.view.unselectButton("opSub");
                this.view.unselectButton("opAdd");
                this.view.unselectButton("opDiv");
             break;  
             case "opDiv":
                this.operator = 3;
                this.view.unselectButton("opSub");
                this.view.unselectButton("opMult");
                this.view.unselectButton("opAdd");
             break;  
        }
        
        console.log("Operator: ", this.operator);

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