let buttons = document.querySelectorAll('.subscription__subscription-button');

for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', (event)=>{
        event.preventDefault();
        alert("Это учебный сайт, поэтому к сожалению ничего не произвойдет :)")
    });
}