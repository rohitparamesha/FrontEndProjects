const circle = document.querySelector('.bag-circle');

circle.addEventListener('click',()=>{
    circle.style.transform = 'scale(1.1)';
    setTimeout(()=>{
        circle.style.transform = 'scale(0.9)';
    },100)
    setTimeout(()=>{
        circle.style.transform = 'scale(1)';
    },200)
    setTimeout(()=>{
        circle.style.transform = 'scale(1.1)';
    },300)
    setTimeout(()=>{
        circle.style.transform = 'scale(1)';
    },500)
    setTimeout(()=>{
        circle.style.transform = 'scale(0.9)';
    },600)
    setTimeout(()=>{
        circle.style.transform = 'scale(1)';
    },700)
    setTimeout(()=>{
        circle.style.transform = 'scale(1.1)';
    },710)
    setTimeout(()=>{
        circle.style.transform = 'scale(1)';
    },800)
    setTimeout(()=>{
        circle.style.transform = 'scale(1.1)';
    },810)
    setTimeout(()=>{
        circle.style.transform = 'scale(1)';
    },850)
})