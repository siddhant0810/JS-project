let loding = document.getElementById(inp1);
let passlength = document.getElementById(length);
let error = document.getElementById(err);
let Lowcase = document.getElementById(chk1);
let upcase = document.getElementById(chk2);
let numbs = document.getElementById(chk3);
let symbols = document.getElementById(chk4);
let btn = document.getElementById(btn);

let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
let numbersChar = '0123456789'
let symcaseChar = "~`!@#$%^&*()_-+=:?/{}[]<>,." 

btn.addEventListener('click',()=>{
    let exptchar = '';
    let randomPass = '';
    exptchar += upcase.Checked ? uppercaseChar : "";
    exptchar += Lowcase.Checked ? lowercaseChar : "";
    exptchar += numbs.Checked ? numbersChar : "";
    exptchar += numbs.Checked ? symcaseChar : "";

    let length = Number(passlength.value);
    if ( exptchar.length != 0){
        if(length>=5 && length<=30){
        for(let i = 0 ; i < length ; i++){
            let index = Math.trunc(Math.random()*(exptchar.length));
            randomPass += exptchar.at(index);


        }
        loding.value = randomPass;
        error.innerHTML = "";

    }
    else{
        error.innerHTML = `<i>Enter the length between 5-30 numbers </i>`
        loding.value = 'Loading...'
    }
    }
    else{
         error.innerHTML = `<i>Please select at least one field for generating random password </i>`
        loding.value = 'Loading...'
    }
    
  

});