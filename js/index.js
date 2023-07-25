const langBtn = document.getElementsByClassName('dropdown-container');
const langOption = document.getElementsByClassName('language-dropdown');


for(let g = 0; g<langBtn.length; g++)
{
    langBtn[g].addEventListener('click' , ()=>{

        if(langOption[g].style.display !== 'none')
        {
            langOption[g].style.display = 'none';

        }
        else{
            langOption[g].style.display = 'block'
        }
    })
}



let toggleBtns = document.getElementsByClassName('show-toggle-btn');
let moreInfo = document.getElementsByClassName('show-hide');
let icons = document.getElementsByClassName('icons');


for(let i = 0; i<toggleBtns.length; i++)
{
    toggleBtns[i].addEventListener('click' , ()=>{
        if(moreInfo[i].style.display !== 'none')
        {
            moreInfo[i].style.display = 'none';
            icons[i].classList.add('fa-plus');
            icons[i].classList.remove('fa-times');
        }
        else{
            moreInfo[i].style.display = 'block';
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-times');
        }
    });
}

let email = document.getElementById('email');
let password = document.getElementById('password');

if(email){
    email.addEventListener('blur' , ()=>{
        let errorEmail = document.getElementById("error-email");
    
        let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    
        let str =  email.value;
        if(regex.test(str)){
            errorEmail.style.display = 'none';
            document.getElementsByClassName("form-control")[0].style.boxShadows = 'none';
            document.getElementsByClassName("form-control")[0].style.backgroundColor = 'white';
            email.style.color = 'black';
        }
        else{
            errorEmail.style.display = 'block';
            document.getElementsByClassName("form-control")[0].style.border = "1px solid #ff9900"
            document.getElementsByClassName("form-control")[0].style.boxShadows = "none"
            document.getElementsByClassName("form-control")[0].style.backgroundColor = "#303030";
            email.style.color = '#555454';
    
        }
    });

}


if(password){
    password.addEventListener('blur' , ()=>{
        let errorPassword = document.getElementById('error-password');
        let regex = /^([\w+\W+\S][\d+\S]){4,60}/;
        let str = password.value;
    
        if(regex.test(str)){
            errorPassword.style.display = 'none';
            document.getElementsByClassName("form-control")[1].style.boxShadows  = "none";
            document.getElementsByClassName("form-control")[1].style.backgroundColor = "white";
            password.style.color = "black";
        }
        else{
            errorPassword.style.display = 'block';
            document.getElementsByClassName("form-control")[1].style.border  = "#ff9900";
            document.getElementsByClassName("form-control")[1].style.backgroundColor = "#303030";
            password.style.color = "#555454";
        }
    })

}

let learnMoreBtn = document.getElementById('readBtn');
let learnMoreInfo = document.getElementById('read-more');

if(learnMoreBtn){
    learnMoreBtn.addEventListener('click' , ()=>{
        if(learnMoreInfo.style.display !== 'none'){
            learnMoreInfo.style.display !== 'none';
        }
        else{
            learnMoreInfo.style.display = 'block';
            learnMoreBtn.style.display = 'none';
        }
    })

}