let cartButton=document.querySelector('.cart-btn')
let cartNum=document.querySelector('.cart-num')
let warning=document.querySelector('small')
cartNum.innerText=0
cartButton.addEventListener('click',function () {
    if (cartNum.innerText>=5) {
        alert('Maximum Cart can be 5 Numbers')
        cartButton.disabled = true;
        warning.innerText='(5 Left)'
        // cartButton.innerText=cartNum.innerText
    }else{
        cartNum.innerText=parseInt(cartNum.innerText)+1
        // cartButton.innerText=cartNum.innerText
    }
})







































































































































































































































































