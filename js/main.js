function changeMode(){
    changeClasses();
}
function changeClasses(){
button.classList.toggle('dark-mode');
body.classList.toggle('dark-mode');
}
const button = document.getElementById('logo-js');
const body = document.getElementsByTagName('body')[0];

button.addEventListener('click',changeMode);

