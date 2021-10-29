/*******************************************************************
 * Flashcard
 *******************************************************************/
export class Flashcard {
    constructor (operator, top, bot) {
        this.top = top;
        this.bot = bot;
        this.operator = operator;

        if (operator == 1 && this.top < this.bot ){
            this.top = bot;
            this.bot = top;
        }

        if (operator == 3 && this.bot < 1) {
            this.bot = 1;
        }
    }

    getAnswer() {
        let answer = 0;

        switch (operator) {
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

}

export class Session {
    constructor (quantity, operator, maxTop, maxBot) {
        this.quantity = quantity;
        this.score = 0;
        this.maxTop = maxTop;
        this.maxBot = maxBot;
        this.flaschcards = [];
        
        for (let i = 0; i < quantity; i++) {
            let t = Math.random() * (maxTop + 1);
            let b = Math.random() * (maxBot + 1);
            let tempCard = new Flashcard(this.operator, t, b);
            this.flaschcards.push(tempCard);
        }
    }

}

export class Difficulty {
    constructor (maxTop, maxBot){
        this.maxTop = maxTop;
        this.maxBot = maxBot;
    }
    
}
