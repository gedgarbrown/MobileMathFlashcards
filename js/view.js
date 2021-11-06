export default class View {
    constructor () {
      
    }

    changeDisplay(newActive, newInactive) {

        let activeObject = document.getElementById(newActive);

        activeObject.classList.add("active");
        activeObject.classList.remove("inactive");
        
        let inactiveObject = document.getElementById(newInactive);

        inactiveObject.classList.remove("active");
        inactiveObject.classList.add("inactive");
        
    }

    changeRangeQuantity(rangeQ){

        document.getElementById("quantityDisplay").innerText= rangeQ;

    }

    unselectButton(id){
        let button = document.getElementById(id);
        button.classList.remove("btnSelected");
        button.classList.add("btnUnselected");
    }

    selectButton(id){
        let button = document.getElementById(id);
        button.classList.add("btnSelected");
        button.classList.remove("btnUnselected");
    }

    openModal(id) {
        document.getElementById(id).style.display = "block";

    }

    closeModal(id) {
        document.getElementById(id).style.display = "none";
    }

    displayFlashcard(numTop, numBot, operator) {
        console.log("NumTop, numBot, operator", numTop, " ", numBot, " ", operator) //debugging. 
        document.getElementById("numTop").innerText = numTop;
        document.getElementById("operator").innerText = operator;
        document.getElementById("numBot").innerText = numBot;

        document.getElementById("answer").focus();

    }

    displaySessionStatus(currentCardNumber, score) {
        document.getElementById("cardNum").innerText = currentCardNumber;
        document.getElementById("score").innerText = score;
    }


   
}