let pass = document.getElementById("loding");
let givenlength = document.getElementById("length");
let uppercase = document.getElementById("upcase");
let lowercase = document.getElementById("lowcase");
let numbers = document.getElementById("number");
let symbols = document.getElementById("symbol");
let btn = document.getElementById("passbtn");
let ero = document.getElementById("err");
let uppercaseChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercaseChar = "abcdefghijklmnopqrtuvwxyz"
let numberchar ="0123456789"
let symbolchar = "~`!@#$%^&*()_-+=?.><,"

btn.addEventListener('click',()=>{
    let exptchar = "";
    let randomPass = "";
    exptchar += uppercase.checked ? uppercaseChar:"";
    exptchar += lowercase.checked ? lowercaseChar:"";
    exptchar += numbers.checked ? numberchar:"";
    exptchar += symbols.checked ? symbolchar:"";

    
     let length = Number(givenlength.value);
     if(exptchar.length != 0){
        if(length>=5 && length<31){
            for(let i = 0 ; i < length ; i++){
                let index = Math.trunc(Math.random()* (exptchar.length));
                randomPass += exptchar.at(index);
                pass.value = randomPass;
                ero .innerHTML = ""
;
            }
        

        
        }
        else{
            err.innerHTML = `<i>Enter the length b/w 5-30</i>`
            pass.value = 'Loading ...';
        }
     }
     else{
        err.innerHTML = `<i>Please select one type to generate password</i>`
        pass.value = "loading...";
     }

});

