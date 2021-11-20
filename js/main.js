import Controller from "./controller.js";

let controller = new Controller();



//controls for difficulty 
document.getElementById("difLow").addEventListener("click", () => {
    controller.setDifficulty("difLow");
 });
document.getElementById("difMed").addEventListener("click", () => {
    controller.setDifficulty("difMed");
 });
document.getElementById("difHard").addEventListener("click", () => {
    controller.setDifficulty("difHard")
 });
document.getElementById("quantity").addEventListener("input", () => {controller.updateQuantity(); }); 


//controls for operator
document.getElementById("opAdd").addEventListener("click", () => {
    controller.setOperator("opAdd");
});
document.getElementById("opSub").addEventListener("click", () => {
    controller.setOperator("opSub");
});
document.getElementById("opMult").addEventListener("click", () => {
    controller.setOperator("opMult");
});
document.getElementById("opDiv").addEventListener("click", () => {
    controller.setOperator("opDiv");
});


//start Session
document.getElementById("start").addEventListener("click", () => {
    controller.startSession(); 
});
document.getElementById("options").addEventListener("click", () => {
    controller.openOptions();
 });

//controlls for Options
document.getElementById("optionsClose").addEventListener("click", () => {
    controller.closeOptions();
})

document.getElementById("optionsSave").addEventListener("click", () => {
    controller.updateDifficulties();
    controller.closeOptions();
})

/*window.addEventListener("click", (event) => { 
    alert("clicking")//debugging
    controller.windowClick(event);
  });*/

//controls for session
document.getElementById("submit").addEventListener("click", () => {
    controller.submitAnswer();    
 });

document.getElementById("quit").addEventListener("click", () => {
     controller.quitSession(); 
});