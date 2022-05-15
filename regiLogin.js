let fname = document.querySelector('.fname')
let lname = document.querySelector('.lname')
let email = document.querySelector('.email')
let pass = document.querySelector('.pass')

let arr = []
let store=JSON.parse(localStorage.getItem('data'))
console.log(store);
if(store==null){
    store=[]
}else{
let regi = document.querySelector('#regi')
for (let i = 0; i < store.length; i++) {
    arr.push(store[i])
}
}
regi.addEventListener('submit', (eve) => {
    eve.preventDefault()
    let val = []
    val.push(fname.value)
    val.push(email.value)
    val.push(pass.value)
    arr.push(val)
    console.log(arr);
    localStorage.setItem('data', JSON.stringify(arr))
    window.location.href = 'login.html'
})
