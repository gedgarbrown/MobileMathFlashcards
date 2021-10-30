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

   
}