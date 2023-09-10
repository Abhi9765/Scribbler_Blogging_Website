;//This is our first model
/*getting elemnt by using quearyselector */
const trigger=document.querySelector('#sign_up');
const login=document.querySelector('.login');

//Applying Actions on them by using addEventListner method
trigger.addEventListener('click',function(){
 login.classList.add('active');
});

//This is our second model

const trigger_one=document.querySelector('#sign_in');
const login_second=document.querySelector('.login_second');

trigger_one.addEventListener('click',function(){
    login_second.classList.add('active_one');
   });