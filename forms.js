



let namee = sessionStorage.getItem('firstname') ? sessionStorage.getItem('firstname') : ''
console.log(namee);
if (namee != '') {
    alert('Please visit profile');
    window.location.href = "form.html";
}

let inputbutton = document.getElementById('inputbutton');
let error = document.getElementsByClassName('error');
let ffirstName = document.querySelector('#fname');
let lastNme = document.querySelector('#lname')
let eemail = document.querySelector('#email');
let pass = document.querySelector('#pass');
let cpass = document.querySelector('#cpass');

inputbutton.addEventListener('click', inputbuttonfun);
function inputbuttonfun() {

    ffirstName = ffirstName.value;
    lastNme = lastNme.value;
    eemail = eemail.value;
    pass = pass.value;
    // var p = window.btoa(pass1);
    cpass = cpass.value;
    if (ffirstName.trim() != 0 && lastNme.trim() != 0 && eemail.trim() != 0 && pass.trim() != 0 && cpass.trim() != 0) {
        if (pass === cpass) {
            if (sessionStorage.getItem('studentsRecords') == null) {
                array = [];
                array.push({ firstname: ffirstName, lastname: lastNme, email: eemail, password: pass });
                sessionStorage.setItem('studentsRecords', JSON.stringify(array));
            } else {
                let string = sessionStorage.getItem('studentsRecords');
                let array = JSON.parse(string);
                if (array.filter((v) => { return v.email === eemail && v.firstname === ffirstName})) {
                    alert("duplicate data");
                } else {
                    array.push({ firstname: ffirstName, lastname: lastNme, email: eemail, password: pass });
                    sessionStorage.setItem('studentsRecords', JSON.stringify(array));
                }
            }
        }
    } else {
        error[4].innerHTML = " *Password and Confirm password should match!";
    }
}