import Controller from "./controller.js";

let controller = new Controller();



//controls for difficulty 
document.getElementById("difLow").addEventListener("click", () => {alert("TODO: Set difLow") });
document.getElementById("difMed").addEventListener("click", () => {alert("TODO: Set difMed") });
document.getElementById("difHard").addEventListener("click", () => {alert("TODO: Set difHard") });
document.getElementById("quantity").addEventListener("input", () => {controller.updateQuantity(); }); 


//controls for operator
document.getElementById("opAdd").addEventListener("click", () => {
    controller.setOperator(document.getElementById("opAdd").id);
});
document.getElementById("opSub").addEventListener("click", () => {
    controller.setOperator(document.getElementById("opSub").id);
});
document.getElementById("opMult").addEventListener("click", () => {
    controller.setOperator(document.getElementById("opMult").id);
});
document.getElementById("opDiv").addEventListener("click", () => {
    controller.setOperator(document.getElementById("opDiv").id);
});


//start and options session
document.getElementById("start").addEventListener("click", () => { controller.startSession(); });
document.getElementById("options").addEventListener("click", () => {alert("TODO: Open Options") });

//controls for session
document.getElementById("submit").addEventListener("click", () => {alert("TODO: Submit Answer") });
document.getElementById("quit").addEventListener("click", () => { controller.quitSession(); });