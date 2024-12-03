let uppercase =document.getElementById('upcase');
let lowercase =document.getElementById('lwcase');
let numbers =document.getElementById('numcase');
let symbols =document.getElementById('symcase');
let generatedPass = document.getElementById('inp');
let btn = document.getElementById('gen_btn');
let passLength = document.getElementById('length');
let errBox = document.getElementById('err');

let uppercaseChar = 'ABCDEFGHIJKLMONPQRSTUVWXYZ';
let lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
let numChar = '0123456789';
let symChar = '~`!@#$%^&*()+=:?/{}[]<>,.';

btn.addEventListener('click',()=>{
    let expectedChar ='';
    let randomPass = '';
    expectedChar += uppercase.checked ? uppercaseChar : '';
    expectedChar += lowercase.checked ? lowercaseChar : '';
    expectedChar += numbers.checked ? numChar : '';
    expectedChar += symbols.checked ? symChar : '';
    let length = Number(passLength.value);
    if(expectedChar.length != 0){
        if(length>=5 && length<31){
            for(let i = 0;i<length;i++){
                let index = Math.trunc(Math.random() * (expectedChar.length));
                randomPass += expectedChar.at(index);
            }
            generatedPass.value = randomPass;
            errBox.innerHTML = '';
        }
        else{
            errBox.innerHTML = `<i>Enter the length b/w 5-30</i>`
            generatedPass.value = 'Loading ...';
        }
    }
    else{
        errBox.innerHTML = `<i>Please select at least one field for generating random password</i>`;
        generatedPass.value = 'Loading ...';
    }
    
});