let store = JSON.parse(localStorage.getItem('data'))
console.log(store);


let email = document.querySelector('.email')
let pass = document.querySelector('.pass')
let form = document.querySelector('.forml')
let error = document.querySelector('small')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let emailVal = email.value
    let passVal = pass.value
    for (let i = 0; i < store.length; i++) {
        if (store[i][1] === emailVal && store[i][2] === passVal) {
            window.location.href='mainPage.html'
            alert(`Hi ${store[i][0]},`)

        } else {
            error.innerText='Please Enter Valid Email ID and Password'
        }
    }
})













































































































