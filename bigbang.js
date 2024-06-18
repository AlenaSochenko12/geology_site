document.addEventListener('DOMContentLoaded', (event) => {
    const button1 = document.getElementById('myButton1');
    const textButton1 = document.getElementById('textButton1');
    const button2 = document.getElementById('myButton2');
    const textButton2 = document.getElementById('textButton2');
    const button3 = document.getElementById('myButton3');
    const textButton3 = document.getElementById('textButton3');
    let active = 0;

    const objects = document.querySelectorAll('.article');
    const content = document.getElementById('content');
    const objectInfo = document.getElementById('object-info');
    const titleContent = document.getElementById('title-content');
    const infoTime = document.getElementById('info-time');
    const infoContent = document.getElementById('info-content');
    const backButton = document.getElementById('back-button');

    function showObjectInfo(title, time, text) {
      titleContent.textContent = `${title}`;
      infoTime.textContent = `${time}`;
      infoContent.innerHTML = `<p>${text}</p>`;
      objectInfo.style.display = 'block';
      content.style.display = 'none';
    }

    objects.forEach(object => {
      object.addEventListener('click', function() {
        const objectTitle = this.getAttribute('data-title');
        const objectTime = this.getAttribute('data-time');
        const objectText = object.querySelector('.article-text').innerHTML;
        showObjectInfo(objectTitle, objectTime, objectText);
      });
    });

    backButton.addEventListener('click', function() {
      objectInfo.style.display = 'none';
      content.style.display = 'block';
    });

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
    button1.addEventListener('click', () => {
        if (!active) {
            activeButton(button1, button2, button3, textButton1, textButton2, textButton3);
            active = 1;
        } 
        else if (active == 1) {
            inactiveButton(button1, textButton1);
            active = 0;
        }
        else {
            $('#hide' + active).hide();
            objectInfo.style.display = 'none';
            content.style.display = 'block';
            inactiveButton(button2, textButton2);
            inactiveButton(button3, textButton3);
            activeButton(button1, button2, button3, textButton1, textButton2, textButton3);
            active = 1;
        }
    });

    button2.addEventListener('click', () => {
        if (!active) {
            activeButton(button2, button1, button3, textButton2, textButton1, textButton3);
            active = 2;
        } 
        else if (active == 2) {
            inactiveButton(button2, textButton2);
            active = 0;
        }
        else {
            $('#hide' + active).hide();
            objectInfo.style.display = 'none';
            content.style.display = 'block';
            inactiveButton(button1, textButton1);
            inactiveButton(button3, textButton3);
            activeButton(button2, button1, button3, textButton2, textButton1, textButton3);
            active = 2;
        }
    });

    button3.addEventListener('click', () => {
        if (!active) {
            activeButton(button3, button1, button2, textButton3, textButton1, textButton2);
            active = 3;
        } 
        else if (active == 3) {
            inactiveButton(button3, textButton3);
            active = 0;
        }
        else {
            $('#hide' + active).hide(); 
            objectInfo.style.display = 'none';
            content.style.display = 'block';
            inactiveButton(button1, textButton1);
            inactiveButton(button2, textButton2);
            activeButton(button3, button1, button2, textButton3, textButton1, textButton2);
            active = 3;
        }
    });
    $('document').ready(function(){
        $('#myButton1').click(function(){
            $('#hide1').slideToggle('slow');
            return false;
        });
    });
    $('document').ready(function(){
        $('#myButton2').click(function(){
            $('#hide2').slideToggle('slow');
            return false;
        });
    });

    $('document').ready(function(){
        $('#myButton3').click(function(){
            $('#hide3').slideToggle('slow');
            return false;
        });
    });
});