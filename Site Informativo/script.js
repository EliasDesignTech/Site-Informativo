const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if(body.className.endsWith('dark-mode')){
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }
    else{
        themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
});