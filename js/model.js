/*******************************************************************
 * Flashcard
 *******************************************************************/
export class Flashcard {
    constructor (operator, top, bot) {
        this.top = top;
        this.bot = bot;
        this.operator = parseInt(operator);
        var temp = ["+", "-", "x", "÷"];
        this.opRef = temp;

        if (operator == 1 && this.top < this.bot ){
            this.top = bot;
            this.bot = top;
        }

        if (operator == 3){
            if(this.bot < 1) {
             this.bot = 1;
            }

           this.top = top * bot; 
     
            
        }
    }

    getAnswer() {
       let answer = 0; 
       
        switch (this.operator) {
            case 0:
                answer = this.top + this.bot;
            break;
            case 1:
                answer = this.top - this.bot;
            break;
            case 2:
                answer = this.top * this.bot;
            break;
            case 3:
                answer = this.top / this.bot;
            break;
            default:
                answer = 0;
            break;
        }



        return answer;
    }

    checkAnswer(answer){

        let correctAnswer = this.getAnswer();
        console.log("Correct Answer: ",correctAnswer);
        if(correctAnswer == answer){
            return true;
        }

        return false;

    }

    getOperatorReference() {
        console.log(this.operator);
        console.log(this.opRef);
        console.log(this.opRef[this.operator]);
        console.log(this.opRef[0]);
        console.log(this.operator === 0);
        console.log(0 == '0');



        return this.opRef[this.operator];
    }

}

/*******************************************************************
 * Session
 *******************************************************************/

export class Session {
    constructor (quantity, operator, maxTop, maxBot) {
        this.quantity = quantity;
        this.score = 0;
        this.maxTop = maxTop;
        this.maxBot = maxBot;
        this.flashcards = [];
        this.operator = operator; 
        this.score = 0;
        this.currentCard = 0;

        for (let i = 0; i < quantity; i++) {
            let t = Math.floor(Math.random() * (maxTop)) + 1;
            let b = Math.floor(Math.random() * (maxBot)) + 1;
            let tempCard = new Flashcard(this.operator, t, b);
            this.flashcards.push(tempCard);
        }

        
    }

    getFlashcard(cardIndex) {
        
        console.log(this.flashcards[0]);
        console.log(cardIndex);
        console.log(this.flashcard[cardIndex]);
        return this.flashcards[cardIndex];

    }

    

}

/*******************************************************************
 * Difficulty
 *******************************************************************/

export class Difficulty {
    constructor (maxTop, maxBot) {
        this.maxTop = maxTop;
        this.maxBot = maxBot;
    }
    
}


