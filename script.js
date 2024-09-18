document.getElementById('login-btn').addEventListener('click', e => {
    e.preventDefault()

    const email = document.getElementById('email-input')
    const password = document.getElementById('password-input')

    if (email.value === 'aosaf@gmail.com' && password.value === '1234rd') {
        window.location.href = 'home.html'
        email.value = ''
    } else {
        alert('Email or Password is Invalid')
    }
})