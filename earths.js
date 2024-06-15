let hide1 = "";
let hide2 = "";
let hide3 = "";

document.addEventListener('DOMContentLoaded', (event) => {
    const button1 = document.getElementById('myButton1');
    const textButton1 = document.getElementById('textButton1');
    const button2 = document.getElementById('myButton2');
    const textButton2 = document.getElementById('textButton2');
    const button3 = document.getElementById('myButton3');
    const textButton3 = document.getElementById('textButton3');
    let active = 0;

    const activeButton = (activeButton, inactiveButton1, inactiveButton2, activeText, inactiveText1, inactiveText2) => {
        activeButton.classList.add('clicked-btn');
        inactiveButton1.classList.remove('clicked-btn');
        inactiveButton2.classList.remove('clicked-btn');
        inactiveText1.classList.remove('clicked-text');
        inactiveText1.classList.add('btn-format');
        inactiveText2.classList.remove('clicked-text');
        inactiveText2.classList.add('btn-format');
        activeText.classList.remove('btn-format');
        activeText.classList.add('clicked-text');
        console.log(active);
        return active;
    }
    const inactiveButton = (activeButton, activeText) => {
        activeButton.classList.remove('clicked-btn');
        activeText.classList.remove('clicked-text');
        activeText.classList.add('btn-format');
        return active;
    }
    
    function first() {
        console.log(active);
        if (!active) {
            activeButton(button1, button2, button3, textButton1, textButton2, textButton3);
            active = 1;
            $(`#${hide1}`).slideToggle('slow');
        } 
        else if (active == 1) {
            inactiveButton(button1, textButton1);
            active = 0;
            $(`#${hide1}`).slideToggle('slow');
        }
        else {
            $(`#${hide2}`).hide(); 
            $(`#${hide3}`).hide(); 
            inactiveButton(button2, textButton2);
            inactiveButton(button3, textButton3);
            activeButton(button1, button2, button3, textButton1, textButton2, textButton3);
            active = 1;
            $(`#${hide1}`).slideToggle('slow');
        }
    }
    function second() {
        if (!active) {
            activeButton(button2, button1, button3, textButton2, textButton1, textButton3);
            active = 2;
            $(`#${hide2}`).slideToggle('slow');
        } 
        else if (active == 2) {
            inactiveButton(button2, textButton2);
            active = 0;
            $(`#${hide2}`).slideToggle('slow');
        }
        else {
            $(`#${hide1}`).hide(); 
            $(`#${hide3}`).hide(); 
            inactiveButton(button1, textButton1);
            inactiveButton(button3, textButton3);
            activeButton(button2, button1, button3, textButton2, textButton1, textButton3);
            active = 2;
            $(`#${hide2}`).slideToggle('slow');
        }
    }

    function third() {
        if (!active) {
            activeButton(button3, button1, button2, textButton3, textButton1, textButton2);
            active = 3;
            $(`#${hide3}`).slideToggle('slow');
        } 
        else if (active == 3) {
            inactiveButton(button3, textButton3);
            active = 0;
            $(`#${hide3}`).slideToggle('slow');
        }
        else {
            $(`#${hide1}`).hide(); 
            $(`#${hide2}`).hide(); 
            inactiveButton(button1, textButton1);
            inactiveButton(button2, textButton2);
            activeButton(button3, button1, button2, textButton3, textButton1, textButton2);
            active = 3;
            $(`#${hide3}`).slideToggle('slow');
        }
    }
    const hideObjects = () => {
        inactiveButton(button1, textButton1);
        inactiveButton(button2, textButton2);
        inactiveButton(button3, textButton3);
        if (hide1) {
            $(`#${hide1}`).hide(); 
            $(`#${hide2}`).hide(); 
            $(`#${hide3}`).hide(); 
        }
        active = 0;
    }
    const initHiddens = (video, articles, photos) => {
        hide1 = video;
        hide2 = articles;
        hide3 = photos;
    }
    button1.addEventListener("click", first);
    button2.addEventListener("click", second);
    button3.addEventListener("click", third);

    initHiddens("hide1", "hide2", "hide3"); 
    function getSelectValue(e){
        let selectedValue = e.target.value;
        console.log(selectedValue);
        if (selectedValue === "black") {
            hideObjects();
            initHiddens("hide1", "hide2", "hide3");   
        } else if (selectedValue === "blue") {
            hideObjects();
            initHiddens("hide4", "hide5", "hide6");
        } else if (selectedValue === "gray") {
            hideObjects();
            initHiddens("hide7", "hide8", "hide9");
        } else if (selectedValue === "live") {
            hideObjects();
            initHiddens("hide10", "hide11", "hide12");
        } else if (selectedValue === "red") {
            hideObjects();
            initHiddens("hide13", "hide14", "hide15");
        } else if (selectedValue === "boring") {
            hideObjects();
            initHiddens("hide16", "hide17", "hide18");
        } else if (selectedValue === "white") {
            hideObjects();
            initHiddens("hide19", "hide20", "hide21");
        } else if (selectedValue === "green") {
            hideObjects();
            initHiddens("hide22", "hide23", "hide24");
        } else if (selectedValue === "human") {
            hideObjects();
            initHiddens("hide25", "hide26", "hide27");
        } else if (selectedValue === "now") {
            hideObjects();
            initHiddens("hide28", "hide29", "hide30");
        } else if (selectedValue === "future") {
            hideObjects();
            initHiddens("hide31", "hide32", "hide33");
        }
    }
      
    const list = document.querySelector('#earths');

    list.addEventListener('change', function(e) {  
      getSelectValue(e);
    });

});