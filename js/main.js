import Controller from "./controller.js";

let controller = new Controller();



//controls for difficulty 
document.getElementById("difLow").addEventListener("click", () => {alert("TODO: Set difLow") });
document.getElementById("difMed").addEventListener("click", () => {alert("TODO: Set difMed") });
document.getElementById("difHard").addEventListener("click", () => {alert("TODO: Set difHard") });
document.getElementById("quantity").addEventListener("input", () => {controller.updateQuantity(); }); 


//controls for operator
document.getElementById("opAdd").addEventListener("click", () => {alert("TODO: Set Addition") });
document.getElementById("opSub").addEventListener("click", () => {alert("TODO: Set Subtraction") });
document.getElementById("opMult").addEventListener("click", () => {alert("TODO: Set Multiplication") });
document.getElementById("opDiv").addEventListener("click", () => {alert("TODO: Set Division") });

//start and options session
document.getElementById("start").addEventListener("click", () => { controller.startSession(); });
document.getElementById("options").addEventListener("click", () => {alert("TODO: Open Options") });

//controls for session
document.getElementById("submit").addEventListener("click", () => {alert("TODO: Submit Answer") });
document.getElementById("quit").addEventListener("click", () => { controller.quitSession(); });