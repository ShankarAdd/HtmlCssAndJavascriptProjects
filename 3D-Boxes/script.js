//Creating element to store the boxes
const boxContainer=document.getElementById('boxes');
const btn=document.getElementById('btn');

//when the magic button clicked we create the small class for transition
btn.addEventListener('click', () => boxContainer.classList.toggle('small'))

//creating the boxes and adding it one by one 
function createBoxes(){
    for(let i=0; i<4 ;i++){
        for(let j=0; j<4 ;j++){
            const box =document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition= `${-j * 125}px ${-i*125}px`
            boxContainer.appendChild(box);
        }
    }
}
createBoxes();