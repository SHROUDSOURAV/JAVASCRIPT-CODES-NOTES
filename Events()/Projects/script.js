let modeBtn = document.querySelector('#mode');
let currentMode = 'light';

modeBtn.addEventListener('click', () => {
    if(currentMode === 'light'){
        currentMode = 'dark';
        document.querySelector('#mode').innerHTML = '<i class="bi bi-sun"></i>';
        document.querySelector('body').style.backgroundColor='#353935';
    }else{
        currentMode = 'light';
        document.querySelector('#mode').innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
        document.querySelector('body').style.backgroundColor='#FAF9F6';
    }
});
