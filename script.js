const hiddenElements = document.querySelectorAll('.hidden');
window.addEventListener('scroll',() => {
    hiddenElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(elementTop < windowHeight - 100){
            el.classList.add('show');
           }
        });
    });