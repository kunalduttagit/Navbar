//window.onload=function(){
    var menu = document.querySelector('.hamburgerMenu');
    const offScreen = document.querySelector('.offScreenMenu');
    menu.addEventListener('click',() => {
        menu.classList.toggle('active');
        offScreen.classList.toggle('active');
});
//} //placed the script file before body, 
//so the script loaded before the DOM interafce did