const panels=document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        removeactiveClass();
        panel.classList.add('active');
    })
})
function removeactiveClass(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}