import {Flashcard, Difficulty, Session, }  from "./model.js";
import View from "./view.js"


export default class Controller {
    constructor () {
        this.view = new View();
        this.cardsPerSession = document.getElementById("quantity").value;
        this.operator = 0;
        this.opRef = ["+", "-", "x", "&divide;"];
        this.difficulty = 0;
        this.difSettings = [];

        this.difSettings.push(new Difficulty(10, 10));
        this.difSettings.push(new Difficulty(20, 20));
        this.difSettings.push(new Difficulty(100, 100));
        this.session = new Session(this.cardsPerSession, 0, 10, 10);

        this.currentCard = 0;
    }

    setDifficulty(id){
        this.view.selectButton(id);


        switch(id){
            case "difLow":
                this.difficulty = 0;
                this.view.unselectButton("difMed");
                this.view.unselectButton("difHard");
            break;   
             case "difMed":
                this.difficulty = 1;
                this.view.unselectButton("difLow");
                this.view.unselectButton("difHard");
            break;  
             case "difHard":
                this.difficulty = 2;
                this.view.unselectButton("difLow");
                this.view.unselectButton("difMed");
            break;  
            default:
            break;
        }
        
        console.log("Operator: ", this.operator);


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
             default:
             break;
        }
        
        console.log("Operator: ", this.operator); //debugging

    }

    updateQuantity() {
        let rangeQ = document.getElementById("quantity").value;

        this.cardsPerSession = rangeQ;

        this.view.changeRangeQuantity(rangeQ);
        
        //console.log(this.cardsPerSession); //debugging
    }

    startSession() {
        //change view to session
        let active = "activeSession";
        let inactive ="sessionSetup";
        this.view.changeDisplay(active, inactive);
        
        let maxTop = this.difSettings[this.difficulty].maxTop;
        let maxBot = this.difSettings[this.difficulty].maxBot
        this.session = new Session(this.cardsPerSession, this.operator, maxTop, maxBot);
        console.log(this.session) //debugging
        this.renderFlashcard();
        

    }

    renderFlashcard(){

        let i = this.session.currentCard; 
        console.log("i = ", i);//debugging
        console.log(this.session.flashcards);
        console.log("Card to render: ", this.session.flashcards[i]); //debugging
        let numTop = this.session.flashcards[i].top;
        let numBot = this.session.flashcards[i].bot;
        let operator = this.session.flashcards[i].getOperatorReference();
        
        console.log(operator);
        
        this.view.displayFlashcard(numTop, numBot, operator);
    }

    submitAnswer(){
       
        let answer = document.getElementById("answer").value;
        console.log(answer);
        if(answer == null){

           
            return;
        }

        document.getElementById("answer").value = null;

        if(this.session.flashcards[this.session.currentCard].checkAnswer(answer)){
            alert("Correct!");
            this.session.score++;

        } else {
            alert("Incorrect!");
        }

        this.session.currentCard++;
        if(this.session.currentCard >= this.session.quantity) {
            alert("Finished. You got " + this.session.score + " right out of " + this.session.quantity);

            this.quitSession();

        }


        this.renderFlashcard();

    }

    quitSession() {

        let inactive = "activeSession";
        let active ="sessionSetup";

        this.view.changeDisplay(active, inactive);

    }

    openOptions() {
        this.view.openModal("optionsModal");
        
           
    }

    closeOptions() {
        this.view.closeModal("optionsModal");
        
    }

    windowClick(event) {
        if (event.target == document) {
           this.closeOptions();
          }
    }


}