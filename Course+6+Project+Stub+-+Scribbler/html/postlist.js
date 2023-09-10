//for trash icon

//getting required bttons
const trash=document.querySelector('#trashnew');
const modal=document.querySelector('.modal');

//performing action on it
trash.addEventListener('click',function(){

    modal.classList.add('active');
});

//close modal


//button_one
const closebt=document.querySelector('#close');

closebt.addEventListener('click',function(){
modal.classList.remove('active');
});

//button_two

const closebt_one=document.querySelector('#close');

closebt.addEventListener('click',function(){
modal.classList.remove('active');
});

