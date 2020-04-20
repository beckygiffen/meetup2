//console.log('test');

const usernameField = document.querySelector('#username');
const signupSubmit = document.querySelector('#signupSubmit');

signupSubmit.addEventListener('click', (e) =>{
    if (usernameField.value ===''){
        e.preventDefault();
        window.alert('Form Requires username');
    }
});
