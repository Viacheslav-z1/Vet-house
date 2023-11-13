let buttons = document.querySelectorAll('.faq__name');

buttons.forEach(item =>{
    item.addEventListener('click', ()=>{
        if(  item.parentNode.classList.contains('active')){
            item.parentNode.classList.remove('active')
        } else{
            item.parentNode.classList.add('active')
        }
        
    });
})