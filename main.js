function submitForm() {
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let reason = document.getElementById('reason').value;
    console.log(firstName,lastName,email,reason);
    if(firstName!="" && lastName!="" && email!="" && reason!=""){
        alert('Form Submitted Successfully');
    }
    else{
        alert('Fill the given fields')
    }
}